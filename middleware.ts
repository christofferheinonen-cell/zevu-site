import { NextRequest, NextResponse } from 'next/server'

function unauthorized() {
  return new NextResponse('Kirjautuminen vaaditaan.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Zevu Admin"' },
  })
}

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER
  const pass = process.env.ADMIN_PASSWORD

  if (!user || !pass) {
    return new NextResponse(
      'Admin-tunnukset puuttuvat. Aseta ADMIN_USER ja ADMIN_PASSWORD ympäristömuuttujat.',
      { status: 500 }
    )
  }

  const auth = req.headers.get('authorization')
  if (!auth?.startsWith('Basic ')) return unauthorized()

  const decoded = atob(auth.slice(6))
  const sep = decoded.indexOf(':')
  if (sep === -1) return unauthorized()

  const u = decoded.slice(0, sep)
  const p = decoded.slice(sep + 1)
  if (u !== user || p !== pass) return unauthorized()

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
