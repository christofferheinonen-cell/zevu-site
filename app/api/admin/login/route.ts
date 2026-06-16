import { NextResponse } from 'next/server'
import { SESSION_COOKIE, SESSION_MAX_AGE, adminCreds, sessionToken } from '@/lib/auth'

export async function POST(req: Request) {
  let body: { username?: string; password?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const { user, pass } = adminCreds()
  if (!user || !pass) {
    return NextResponse.json({ error: 'not_configured' }, { status: 500 })
  }

  if (body.username !== user || body.password !== pass) {
    return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 })
  }

  const token = await sessionToken(user, pass)
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_MAX_AGE,
  })
  return res
}
