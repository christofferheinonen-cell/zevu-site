import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE, sessionEmail } from '@/lib/auth'

/*
 * Guards the admin. Runs on the Node.js runtime (Next.js proxy).
 * - Every /admin page and /api/admin endpoint needs a valid session, except
 *   the login and password-reset screens and their endpoints.
 * - State-changing admin requests must come from this site (CSRF check).
 * - Admin responses are never cached and never framed.
 */

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}

const PUBLIC_PAGES = new Set(['/admin/login', '/admin/forgot', '/admin/reset'])
const PUBLIC_API = new Set(['/api/admin/login', '/api/admin/logout', '/api/admin/password/forgot', '/api/admin/password/reset'])

function harden(res: NextResponse) {
  res.headers.set('Cache-Control', 'no-store')
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

function sameOrigin(req: NextRequest) {
  const source = req.headers.get('origin') || req.headers.get('referer')
  if (!source) return false
  try {
    return new URL(source).host === (req.headers.get('x-forwarded-host') || req.nextUrl.host)
  } catch {
    return false
  }
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isApi = pathname.startsWith('/api/')

  if (isApi && req.method !== 'GET' && req.method !== 'HEAD' && !sameOrigin(req)) {
    return harden(NextResponse.json({ error: 'forbidden' }, { status: 403 }))
  }

  if (PUBLIC_PAGES.has(pathname) || PUBLIC_API.has(pathname)) return harden(NextResponse.next())

  const email = await sessionEmail(req.cookies.get(SESSION_COOKIE)?.value)
  if (email) return harden(NextResponse.next())

  if (isApi) return harden(NextResponse.json({ error: 'unauthorized' }, { status: 401 }))

  const url = req.nextUrl.clone()
  url.pathname = '/admin/login'
  url.search = ''
  if (pathname !== '/admin') url.searchParams.set('next', pathname)
  return harden(NextResponse.redirect(url))
}
