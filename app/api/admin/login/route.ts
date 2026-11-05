import { NextResponse } from 'next/server'
import { SESSION_COOKIE, cookieOptions, createSession, verifyCredentials } from '@/lib/auth'
import { rateLimit, resetRateLimit } from '@/lib/rate-limit'
import { clientIp, hashId, sameOrigin } from '@/lib/request'

const tooMany = (retryAfter: number) =>
  NextResponse.json({ error: 'rate_limited', retryAfter }, { status: 429, headers: { 'Retry-After': String(retryAfter) } })

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  let body: { email?: unknown; password?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }
  const email = String(body.email ?? '').slice(0, 200)
  const password = String(body.password ?? '').slice(0, 200)

  // 5 attempts per 15 minutes per IP, and 20 per hour for the account overall,
  // so neither one attacker nor a distributed guess can brute-force it.
  const ip = hashId(clientIp(req))
  const perIp = await rateLimit('login-ip', ip, 5, 15 * 60)
  if (!perIp.ok) return tooMany(perIp.retryAfter)
  const perAccount = await rateLimit('login-account', 'admin', 20, 60 * 60)
  if (!perAccount.ok) return tooMany(perAccount.retryAfter)

  let ok = false
  try {
    ok = await verifyCredentials(email, password)
  } catch (err) {
    console.error('[login] storage unavailable:', err)
    return NextResponse.json({ error: 'storage_unavailable' }, { status: 503 })
  }
  if (!ok) return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })

  await resetRateLimit('login-ip', ip)
  const token = await createSession()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, cookieOptions())
  return res
}
