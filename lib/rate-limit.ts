import 'server-only'
import { getRedis } from './redis'

/*
 * Fixed-window rate limiter. Uses Redis so limits hold across serverless
 * instances; falls back to per-instance memory if Redis is missing or down,
 * so a database outage never turns into "unlimited attempts".
 */

const memory = new Map<string, { count: number; reset: number }>()

function memoryHit(key: string, limit: number, windowSec: number) {
  const now = Date.now()
  const entry = memory.get(key)
  if (!entry || entry.reset <= now) {
    memory.set(key, { count: 1, reset: now + windowSec * 1000 })
    return { ok: true, remaining: limit - 1, retryAfter: 0 }
  }
  entry.count++
  if (memory.size > 5000) {
    for (const [k, v] of memory) if (v.reset <= now) memory.delete(k)
  }
  const ok = entry.count <= limit
  return { ok, remaining: Math.max(0, limit - entry.count), retryAfter: ok ? 0 : Math.ceil((entry.reset - now) / 1000) }
}

export async function rateLimit(name: string, id: string, limit: number, windowSec: number) {
  const key = `zevu:rl:${name}:${id}`
  const redis = getRedis()
  if (redis) {
    try {
      const count = await redis.incr(key)
      if (count === 1) await redis.expire(key, windowSec)
      const ok = count <= limit
      let retryAfter = 0
      if (!ok) retryAfter = Math.max(1, await redis.ttl(key))
      return { ok, remaining: Math.max(0, limit - count), retryAfter }
    } catch (err) {
      console.error('[rate-limit] redis unavailable, using memory:', err)
    }
  }
  return memoryHit(key, limit, windowSec)
}

/** Clear a limiter, e.g. after a successful login. */
export async function resetRateLimit(name: string, id: string) {
  const key = `zevu:rl:${name}:${id}`
  memory.delete(key)
  try {
    await getRedis()?.del(key)
  } catch {
    /* best effort */
  }
}
