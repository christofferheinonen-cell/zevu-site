import 'server-only'
import { Resend } from 'resend'

/*
 * Transactional email via Resend.
 * RESEND_API_KEY  — secret, set in Vercel only.
 * RESEND_FROM     — sender, e.g. "Zevu <hello@zevu.cc>" once the domain is verified
 *                   in Resend. Until then Resend only delivers from onboarding@resend.dev
 *                   to the address the Resend account was created with.
 * ADMIN_EMAIL     — where enquiries and admin notices go; also the admin login.
 */

let client: Resend | null | undefined

function resend(): Resend | null {
  if (client !== undefined) return client
  const key = process.env.RESEND_API_KEY
  client = key ? new Resend(key) : null
  return client
}

export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL)
export const adminEmail = () => (process.env.ADMIN_EMAIL ?? '').trim().toLowerCase()
const from = () => process.env.RESEND_FROM || 'Zevu <onboarding@resend.dev>'

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}

export async function sendEmail(opts: { to: string; subject: string; html: string; text: string; replyTo?: string }): Promise<boolean> {
  const r = resend()
  if (!r) {
    console.error('[email] RESEND_API_KEY not set; email not sent:', opts.subject)
    return false
  }
  try {
    const { error } = await r.emails.send({ from: from(), to: opts.to, subject: opts.subject, html: opts.html, text: opts.text, replyTo: opts.replyTo })
    if (error) {
      console.error('[email] Resend rejected the message:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('[email] send failed:', err)
    return false
  }
}

/** Simple branded wrapper so every email looks like it comes from the same studio. */
export function emailLayout(title: string, bodyHtml: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f2ece1;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1a1612">
<div style="max-width:560px;margin:0 auto;padding:32px 20px">
<div style="font-family:Georgia,serif;font-style:italic;font-size:26px;letter-spacing:-1px;margin-bottom:20px">zevu<span style="color:#d4452a">.</span></div>
<div style="background:#fbf8f2;border:1px solid #ddd3c3;border-radius:6px;padding:28px">
<h1 style="font-family:Georgia,serif;font-weight:normal;font-size:24px;margin:0 0 16px">${escapeHtml(title)}</h1>
${bodyHtml}
</div></div></body></html>`
}
