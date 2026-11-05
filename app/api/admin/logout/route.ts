import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { SESSION_COOKIE, cookieOptions, destroySession } from '@/lib/auth'

export async function POST() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value
  try {
    await destroySession(token)
  } catch (err) {
    console.error('[logout] could not remove session:', err)
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, '', cookieOptions(0))
  return res
}
