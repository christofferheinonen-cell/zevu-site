import 'server-only'
import crypto from 'node:crypto'

/** Best-effort client IP behind Vercel's proxy. */
export function clientIp(req: Request): string {
  const h = req.headers
  const fwd = h.get('x-forwarded-for')?.split(',')[0]?.trim()
  return h.get('x-real-ip') || fwd || 'unknown'
}

/** Hash identifiers before using them as storage keys (no raw IPs or emails in Redis keys). */
export function hashId(value: string): string {
  return crypto.createHash('sha256').update(value.toLowerCase().trim()).digest('hex').slice(0, 32)
}

/**
 * Reject cross-site state-changing requests (CSRF): the Origin (or Referer)
 * must match the host the request was sent to.
 */
export function sameOrigin(req: Request): boolean {
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host')
  const source = req.headers.get('origin') || req.headers.get('referer')
  if (!host || !source) return false
  try {
    return new URL(source).host === host
  } catch {
    return false
  }
}

export function safeEqual(a: string, b: string): boolean {
  const ha = crypto.createHash('sha256').update(a).digest()
  const hb = crypto.createHash('sha256').update(b).digest()
  return crypto.timingSafeEqual(ha, hb)
}
