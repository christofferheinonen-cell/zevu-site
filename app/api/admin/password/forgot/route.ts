import { NextResponse } from 'next/server'
import { RESET_TTL_MINUTES, createResetToken } from '@/lib/auth'
import { adminEmail, emailLayout, escapeHtml, sendEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp, hashId, safeEqual, sameOrigin } from '@/lib/request'
import { SITE_URL } from '@/lib/seo'

/**
 * The only way to set or reset the admin password: a single-use link sent to
 * ADMIN_EMAIL. Always answers the same way, so it can't be used to discover
 * the admin address.
 */
export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  let body: { email?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }
  const email = String(body.email ?? '').trim().toLowerCase().slice(0, 200)

  const ip = await rateLimit('forgot-ip', hashId(clientIp(req)), 3, 60 * 60)
  const account = await rateLimit('forgot-account', 'admin', 5, 60 * 60)
  if (!ip.ok || !account.ok) {
    const retryAfter = Math.max(ip.retryAfter, account.retryAfter)
    return NextResponse.json({ error: 'rate_limited', retryAfter }, { status: 429, headers: { 'Retry-After': String(retryAfter) } })
  }

  const admin = adminEmail()
  if (admin && email && safeEqual(email, admin)) {
    try {
      const token = await createResetToken()
      const link = `${SITE_URL}/admin/reset?token=${encodeURIComponent(token)}`
      // Local development without email: print the link to the server console. Never in production.
      if (process.env.NODE_ENV !== 'production' && !process.env.RESEND_API_KEY) console.info('[forgot] dev reset link:', link)
      await sendEmail({
        to: admin,
        subject: 'Set your Zevu admin password',
        text: `Someone asked to set the password for the Zevu admin.\n\nUse this link within ${RESET_TTL_MINUTES} minutes. It works once:\n${link}\n\nIf this wasn't you, ignore this email. Your current password still works.`,
        html: emailLayout(
          'Set your admin password',
          `<p style="line-height:1.6">Someone asked to set the password for the Zevu admin. Use the button within ${RESET_TTL_MINUTES} minutes. It works once.</p>
<p style="margin:24px 0"><a href="${escapeHtml(link)}" style="background:#1a1612;color:#fbf8f2;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:600">Set password</a></p>
<p style="line-height:1.6;color:#6b6156;font-size:14px">If this wasn’t you, ignore this email. Your current password still works.</p>`
        ),
      })
    } catch (err) {
      console.error('[forgot] could not create reset link:', err)
    }
  }
  return NextResponse.json({ ok: true })
}
