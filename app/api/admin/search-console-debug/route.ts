import { NextResponse } from 'next/server'
import { createSign } from 'node:crypto'

function base64url(input: string | Buffer): string {
  const b64 = Buffer.isBuffer(input)
    ? input.toString('base64')
    : Buffer.from(input).toString('base64')
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export const runtime = 'nodejs'

export async function GET() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL

  if (!raw) return NextResponse.json({ error: 'GOOGLE_SERVICE_ACCOUNT_JSON not set' }, { status: 500 })
  if (!siteUrl) return NextResponse.json({ error: 'GOOGLE_SEARCH_CONSOLE_SITE_URL not set' }, { status: 500 })

  const sa = JSON.parse(raw) as { client_email: string; private_key: string }

  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = base64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }))
  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const sig = base64url(sign.sign(sa.private_key))
  const jwt = `${header}.${payload}.${sig}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  const tokenData = await tokenRes.json() as { access_token?: string; error?: string }
  if (!tokenData.access_token) {
    return NextResponse.json({ step: 'token', error: tokenData }, { status: 500 })
  }

  // List all verified sites the service account can see
  const sitesRes = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  })
  const sitesData = await sitesRes.json()

  // Try querying the configured site URL
  const queryRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${tokenData.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: '2026-01-01',
        endDate: '2026-06-17',
        dimensions: ['query'],
        rowLimit: 5,
      }),
    }
  )
  const queryData = await queryRes.json()

  return NextResponse.json({
    serviceAccountEmail: sa.client_email,
    configuredSiteUrl: siteUrl,
    sitesHttpStatus: sitesRes.status,
    verifiedSites: sitesData,
    queryHttpStatus: queryRes.status,
    queryResponse: queryData,
  })
}
