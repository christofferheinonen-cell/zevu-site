import { createSign } from 'node:crypto'

function base64url(input: string | Buffer): string {
  const b64 = Buffer.isBuffer(input)
    ? input.toString('base64')
    : Buffer.from(input).toString('base64')
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

async function getAccessToken(): Promise<string> {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON not set')
  const sa = JSON.parse(raw) as { client_email: string; private_key: string }

  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  )

  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const sig = base64url(sign.sign(sa.private_key))
  const jwt = `${header}.${payload}.${sig}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })

  if (!res.ok) throw new Error(`GSC token error: ${await res.text()}`)
  const data = (await res.json()) as { access_token: string }
  return data.access_token
}

export type GscRow = {
  keys: string[]
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export type GscSummary = {
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export type GscData = {
  queries: GscRow[]
  pages: GscRow[]
  summary: GscSummary
  startDate: string
  endDate: string
}

function fmt(d: Date): string {
  return d.toISOString().slice(0, 10)
}

export async function fetchSearchConsoleData(days = 28): Promise<GscData> {
  const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL
  if (!siteUrl) throw new Error('GOOGLE_SEARCH_CONSOLE_SITE_URL not set')

  const token = await getAccessToken()
  const endDate = new Date()
  endDate.setDate(endDate.getDate() - 3) // GSC data has ~3 day delay
  const startDate = new Date(endDate)
  startDate.setDate(startDate.getDate() - days)

  const base = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
  const dateRange = { startDate: fmt(startDate), endDate: fmt(endDate) }

  const [qRes, pRes, totRes] = await Promise.all([
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...dateRange, dimensions: ['query'], rowLimit: 25 }),
    }),
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...dateRange, dimensions: ['page'], rowLimit: 25 }),
    }),
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...dateRange, rowLimit: 1 }),
    }),
  ])

  const [qData, pData, totData] = await Promise.all([
    qRes.json() as Promise<{ rows?: GscRow[] }>,
    pRes.json() as Promise<{ rows?: GscRow[] }>,
    totRes.json() as Promise<{ rows?: GscRow[] }>,
  ])

  const totRow = totData.rows?.[0]
  const summary: GscSummary = totRow
    ? {
        clicks: totRow.clicks,
        impressions: totRow.impressions,
        ctr: totRow.ctr,
        position: totRow.position,
      }
    : { clicks: 0, impressions: 0, ctr: 0, position: 0 }

  return {
    queries: qData.rows ?? [],
    pages: pData.rows ?? [],
    summary,
    startDate: fmt(startDate),
    endDate: fmt(endDate),
  }
}
