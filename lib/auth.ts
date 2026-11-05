import 'server-only'
import crypto from 'node:crypto'
import { promisify } from 'node:util'
import { getRedis } from './redis'
import { adminEmail } from './email'

/*
 * Admin authentication.
 * - One admin, identified by ADMIN_EMAIL (env, never in code).
 * - The password exists only as a scrypt hash in Redis. It can only be set or
 *   changed through a single-use link emailed to ADMIN_EMAIL.
 * - Sessions are random tokens; only their SHA-256 is stored, with a TTL, so
 *   they can be revoked (logout, password reset) and expire on their own.
 * - In production without Redis nothing can be stored, so login fails closed.
 *   Local development falls back to process memory.
 */

export const SESSION_COOKIE = 'zevu_admin'
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days
const RESET_TTL = 60 * 30 // 30 minutes
export const RESET_TTL_MINUTES = RESET_TTL / 60
export const PASSWORD_MIN = 12

const K = {
  password: 'zevu:admin:password',
  session: (h: string) => `zevu:admin:session:${h}`,
  sessions: 'zevu:admin:sessions',
  reset: (h: string) => `zevu:admin:reset:${h}`,
}

const scrypt = promisify(crypto.scrypt) as (pw: string, salt: Buffer, len: number, opts: crypto.ScryptOptions) => Promise<Buffer>
const SCRYPT = { N: 1 << 15, r: 8, p: 1, maxmem: 64 * 1024 * 1024 }
const sha = (s: string) => crypto.createHash('sha256').update(s).digest('hex')

/* ---------- tiny KV: Redis, or memory in local dev ---------- */
const mem = new Map<string, { v: string; exp: number }>()
const memSets = new Map<string, Set<string>>()
const devFallback = () => process.env.NODE_ENV !== 'production'

export class StorageUnavailable extends Error {}

async function kvSet(key: string, value: string, ttl?: number) {
  const r = getRedis()
  if (r) {
    await r.set(key, value, ttl ? { ex: ttl } : undefined)
    return
  }
  if (!devFallback()) throw new StorageUnavailable('redis_not_configured')
  mem.set(key, { v: value, exp: ttl ? Date.now() + ttl * 1000 : Infinity })
}

async function kvGet(key: string): Promise<string | null> {
  const r = getRedis()
  if (r) {
    const v = await r.get<unknown>(key)
    return v == null ? null : typeof v === 'string' ? v : JSON.stringify(v)
  }
  if (!devFallback()) throw new StorageUnavailable('redis_not_configured')
  const e = mem.get(key)
  if (!e || e.exp < Date.now()) return null
  return e.v
}

async function kvDelete(keys: string[]) {
  if (!keys.length) return
  const r = getRedis()
  if (r) {
    await r.del(...keys)
    return
  }
  for (const k of keys) mem.delete(k)
}

async function kvTake(key: string): Promise<string | null> {
  const r = getRedis()
  if (r) {
    const v = await r.getdel<unknown>(key)
    return v == null ? null : String(v)
  }
  const v = await kvGet(key)
  mem.delete(key)
  return v
}

async function setAdd(key: string, member: string) {
  const r = getRedis()
  if (r) {
    await r.sadd(key, member)
    return
  }
  if (!memSets.has(key)) memSets.set(key, new Set())
  memSets.get(key)!.add(member)
}

async function setMembers(key: string): Promise<string[]> {
  const r = getRedis()
  if (r) return (await r.smembers(key)) ?? []
  return [...(memSets.get(key) ?? [])]
}

/* ---------- password ---------- */
export async function hasPassword(): Promise<boolean> {
  return Boolean(await kvGet(K.password))
}

export async function setPassword(pw: string) {
  const salt = crypto.randomBytes(16)
  const hash = await scrypt(pw, salt, 64, SCRYPT)
  await kvSet(K.password, ['scrypt', SCRYPT.N, SCRYPT.r, SCRYPT.p, salt.toString('base64'), hash.toString('base64')].join('$'))
}

/**
 * Verifies email + password. Always does the full scrypt work and compares in
 * constant time, so response timing doesn't reveal which part was wrong.
 */
export async function verifyCredentials(email: string, pw: string): Promise<boolean> {
  const stored = await kvGet(K.password)
  const expectedEmail = adminEmail()
  const parts = stored?.split('$') ?? []
  const salt = parts[4] ? Buffer.from(parts[4], 'base64') : crypto.randomBytes(16)
  const expected = parts[5] ? Buffer.from(parts[5], 'base64') : crypto.randomBytes(64)
  const opts = parts[1] ? { N: Number(parts[1]), r: Number(parts[2]), p: Number(parts[3]), maxmem: SCRYPT.maxmem } : SCRYPT
  const actual = await scrypt(pw, salt, expected.length, opts)
  const pwOk = crypto.timingSafeEqual(actual, expected)
  const emailOk = crypto.timingSafeEqual(Buffer.from(sha(email.trim().toLowerCase())), Buffer.from(sha(expectedEmail)))
  return Boolean(stored) && Boolean(expectedEmail) && pwOk && emailOk
}

/* ---------- sessions ---------- */
export async function createSession(): Promise<string> {
  const token = crypto.randomBytes(32).toString('base64url')
  const h = sha(token)
  await kvSet(K.session(h), JSON.stringify({ email: adminEmail(), at: Date.now() }), SESSION_MAX_AGE)
  await setAdd(K.sessions, h)
  return token
}

/** The admin email for a valid session token, or null. Never throws. */
export async function sessionEmail(token: string | undefined): Promise<string | null> {
  if (!token || token.length > 100) return null
  try {
    const raw = await kvGet(K.session(sha(token)))
    if (!raw) return null
    return (JSON.parse(raw) as { email: string }).email
  } catch {
    return null
  }
}

export async function destroySession(token: string | undefined) {
  if (token) await kvDelete([K.session(sha(token))])
}

/** Log out everywhere, e.g. after a password reset. */
export async function destroyAllSessions() {
  const all = await setMembers(K.sessions)
  await kvDelete([...all.map(K.session), K.sessions])
}

/* ---------- reset tokens ---------- */
export async function createResetToken(): Promise<string> {
  const token = crypto.randomBytes(32).toString('base64url')
  await kvSet(K.reset(sha(token)), '1', RESET_TTL)
  return token
}

/** Single use: the token is removed in the same step it is checked. */
export async function consumeResetToken(token: string): Promise<boolean> {
  if (!token || token.length > 100) return false
  return (await kvTake(K.reset(sha(token)))) === '1'
}

export const cookieOptions = (maxAge = SESSION_MAX_AGE) => ({
  httpOnly: true,
  sameSite: 'strict' as const,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge,
})
