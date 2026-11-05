import { NextResponse } from 'next/server'
import { PASSWORD_MIN, consumeResetToken, destroyAllSessions, setPassword } from '@/lib/auth'
import { adminEmail, emailLayout, sendEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp, hashId, sameOrigin } from '@/lib/request'

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  const limit = await rateLimit('reset-ip', hashId(clientIp(req)), 10, 60 * 60)
  if (!limit.ok) return NextResponse.json({ error: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } })

  let body: { token?: unknown; password?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }
  const token = String(body.token ?? '')
  const password = String(body.password ?? '')

  // Validate before spending the token, so a typo doesn't burn the link.
  if (password.length < PASSWORD_MIN || password.length > 200) return NextResponse.json({ error: 'weak_password' }, { status: 400 })
  if (password.trim().toLowerCase() === adminEmail()) return NextResponse.json({ error: 'weak_password' }, { status: 400 })

  try {
    if (!(await consumeResetToken(token))) return NextResponse.json({ error: 'invalid_token' }, { status: 400 })
    await setPassword(password)
    await destroyAllSessions()
  } catch (err) {
    console.error('[reset] storage unavailable:', err)
    return NextResponse.json({ error: 'storage_unavailable' }, { status: 503 })
  }

  const admin = adminEmail()
  if (admin) {
    await sendEmail({
      to: admin,
      subject: 'Your Zevu admin password was changed',
      text: 'The password for the Zevu admin was just changed, and every device was logged out. If this wasn’t you, request a new reset link right away.',
      html: emailLayout(
        'Password changed',
        '<p style="line-height:1.6">The password for the Zevu admin was just changed, and every device was logged out.</p><p style="line-height:1.6;color:#6b6156;font-size:14px">If this wasn’t you, request a new reset link from the login page right away.</p>'
      ),
    })
  }
  return NextResponse.json({ ok: true })
}
