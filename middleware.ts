import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE, adminCreds, sessionToken } from '@/lib/auth'

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // The login page and login endpoint must stay reachable without a session.
  if (pathname === '/admin/login' || pathname === '/api/admin/login') {
    return NextResponse.next()
  }

  const { user, pass } = adminCreds()
  if (!user || !pass) {
    return new NextResponse(
      'Admin-tunnukset puuttuvat. Aseta ADMIN_USER ja ADMIN_PASSWORD ympäristömuuttujat.',
      { status: 500 }
    )
  }

  const expected = await sessionToken(user, pass)
  const token = req.cookies.get(SESSION_COOKIE)?.value
  if (token && token === expected) {
    return NextResponse.next()
  }

  // Unauthenticated API calls get a clean 401; page requests get redirected to
  // the branded login screen, preserving where they were headed.
  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const url = req.nextUrl.clone()
  url.pathname = '/admin/login'
  url.search = ''
  if (pathname !== '/admin') url.searchParams.set('next', pathname)
  return NextResponse.redirect(url)
}
