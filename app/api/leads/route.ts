import { NextRequest, NextResponse } from 'next/server'
import { appendLead, type Lead } from '@/lib/leads'
import { adminEmail, emailLayout, escapeHtml, sendEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp, hashId, sameOrigin } from '@/lib/request'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
const clean = (v: unknown, max: number) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max)

function notifyEmail(lead: Omit<Lead, 'id' | 'createdAt'>) {
  const rows: [string, string][] = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone / WhatsApp', lead.phone],
    ['Business', lead.company],
    ['Type', lead.industry],
    ['Page', lead.source],
  ]
  const table = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#6b6156;font-size:13px;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;font-size:15px">${escapeHtml(v)}</td></tr>`)
    .join('')
  const message = lead.message ? `<p style="margin:18px 0 0;padding:14px 16px;background:#f2ece1;border-radius:6px;white-space:pre-wrap;line-height:1.55">${escapeHtml(lead.message)}</p>` : ''
  return {
    subject: `New enquiry: ${lead.company || lead.name}${lead.industry ? ` (${lead.industry})` : ''}`,
    html: emailLayout('New enquiry', `<table style="border-collapse:collapse">${table}</table>${message}<p style="margin:22px 0 0;font-size:13px;color:#6b6156">Reply to this email to answer them directly.</p>`),
    text: [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), '', lead.message].join('\n'),
  }
}

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  const limit = await rateLimit('lead-ip', hashId(clientIp(req)), 5, 10 * 60)
  if (!limit.ok) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots learn nothing.
  if (clean(body.website_hp, 200)) return NextResponse.json({ ok: true })

  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 })
  }

  const lead = {
    source: clean(body.source, 300),
    company: clean(body.company, 200),
    industry: clean(body.industry, 60),
    runsAds: null,
    budget: '',
    satisfaction: null,
    name,
    email,
    phone: clean(body.phone, 50),
    message: clean(body.message, 4000),
  }

  // Store and email in parallel. The enquiry counts as received if either works,
  // so a database outage no longer loses enquiries (and vice versa).
  const mail = notifyEmail(lead)
  const to = adminEmail()
  const [stored, emailed] = await Promise.all([
    appendLead(lead).then(
      () => true,
      err => {
        console.error('[leads] failed to store lead:', err)
        return false
      }
    ),
    to ? sendEmail({ to, replyTo: email, ...mail }) : Promise.resolve(false),
  ])

  if (!stored && !emailed) {
    return NextResponse.json({ error: 'delivery_failed' }, { status: 503 })
  }
  return NextResponse.json({ ok: true })
}
