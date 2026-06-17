import { createSign } from 'node:crypto'

function base64url(input: string | Buffer): string {
  const b64 = Buffer.isBuffer(input)
    ? input.toString('base64')
    : Buffer.from(input).toString('base64')
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

async function getAccessToken(scope: string): Promise<string> {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON not set')
  const sa = JSON.parse(raw) as { client_email: string; private_key: string }

  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope,
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

  if (!res.ok) throw new Error(`GA4 token error: ${await res.text()}`)
  const data = (await res.json()) as { access_token: string }
  return data.access_token
}

export type Ga4Row = Record<string, string>

export type Ga4Summary = {
  sessions: number
  users: number
  newUsers: number
  pageviews: number
  avgSessionDuration: number
  bounceRate: number
}

export type Ga4ConversionEvent = {
  name: string
  count: number
}

export type Ga4Data = {
  summary: Ga4Summary
  topPages: { path: string; pageviews: number; users: number }[]
  topSources: { source: string; sessions: number; users: number }[]
  conversions: Ga4ConversionEvent[]
  startDate: string
  endDate: string
}

function fmt(d: Date): string {
  return d.toISOString().slice(0, 10)
}

function metricVal(row: { metricValues: { value: string }[] }, idx: number): number {
  return Number(row.metricValues[idx]?.value ?? 0)
}

function dimVal(row: { dimensionValues: { value: string }[] }, idx: number): string {
  return row.dimensionValues[idx]?.value ?? ''
}

export async function fetchGa4Data(days = 28): Promise<Ga4Data> {
  const propertyId = process.env.GOOGLE_GA4_PROPERTY_ID
  if (!propertyId) throw new Error('GOOGLE_GA4_PROPERTY_ID not set')

  const token = await getAccessToken('https://www.googleapis.com/auth/analytics.readonly')

  const endDate = new Date()
  const startDate = new Date(endDate)
  startDate.setDate(startDate.getDate() - days)

  const base = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  const dateRange = { startDate: fmt(startDate), endDate: fmt(endDate) }

  const [summaryRes, pagesRes, sourcesRes, convRes] = await Promise.all([
    // Overall summary metrics
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        dateRanges: [dateRange],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'newUsers' },
          { name: 'screenPageViews' },
          { name: 'averageSessionDuration' },
          { name: 'bounceRate' },
        ],
      }),
    }),
    // Top pages
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 20,
      }),
    }),
    // Traffic sources
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10,
      }),
    }),
    // Conversion events
    fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'isKeyEvent',
            stringFilter: { value: 'true' },
          },
        },
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
        limit: 20,
      }),
    }),
  ])

  const [summaryData, pagesData, sourcesData, convData] = await Promise.all([
    summaryRes.json() as Promise<{ rows?: { metricValues: { value: string }[] }[] }>,
    pagesRes.json() as Promise<{ rows?: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }[] }>,
    sourcesRes.json() as Promise<{ rows?: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }[] }>,
    convRes.json() as Promise<{ rows?: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }[] }>,
  ])

  const sr = summaryData.rows?.[0]
  const summary: Ga4Summary = sr
    ? {
        sessions: metricVal(sr, 0),
        users: metricVal(sr, 1),
        newUsers: metricVal(sr, 2),
        pageviews: metricVal(sr, 3),
        avgSessionDuration: metricVal(sr, 4),
        bounceRate: metricVal(sr, 5),
      }
    : { sessions: 0, users: 0, newUsers: 0, pageviews: 0, avgSessionDuration: 0, bounceRate: 0 }

  const topPages = (pagesData.rows ?? []).map(r => ({
    path: dimVal(r, 0),
    pageviews: metricVal(r, 0),
    users: metricVal(r, 1),
  }))

  const topSources = (sourcesData.rows ?? []).map(r => ({
    source: dimVal(r, 0),
    sessions: metricVal(r, 0),
    users: metricVal(r, 1),
  }))

  const conversions = (convData.rows ?? []).map(r => ({
    name: dimVal(r, 0),
    count: metricVal(r, 0),
  }))

  return {
    summary,
    topPages,
    topSources,
    conversions,
    startDate: fmt(startDate),
    endDate: fmt(endDate),
  }
}
