import { NextRequest, NextResponse } from 'next/server'
import { appendLead } from '@/lib/leads'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim().slice(0, 200)
  const email = String(body.email ?? '').trim().slice(0, 200)
  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 })
  }

  const runsAds = body.runsAds === 'yes' || body.runsAds === 'no' ? body.runsAds : null
  const satisfaction =
    typeof body.satisfaction === 'number' && body.satisfaction >= 1 && body.satisfaction <= 5
      ? body.satisfaction
      : null

  try {
    const lead = await appendLead({
      source: String(body.source ?? '').trim().slice(0, 300),
      company: String(body.company ?? '').trim().slice(0, 200),
      industry: String(body.industry ?? '').trim().slice(0, 200),
      runsAds,
      budget: String(body.budget ?? '').trim().slice(0, 100),
      satisfaction,
      name,
      email,
      phone: String(body.phone ?? '').trim().slice(0, 50),
    })
    return NextResponse.json({ ok: true, id: lead.id })
  } catch (err) {
    // Surface the real cause in the Vercel function logs (e.g. a read-only
    // filesystem write when no Redis/KV store is configured).
    console.error('[leads] failed to store lead:', err)
    return NextResponse.json({ error: 'storage_failed' }, { status: 500 })
  }
}
