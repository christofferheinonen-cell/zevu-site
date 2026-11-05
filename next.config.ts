import type { NextConfig } from 'next'

// The old Finnish Meta-ads pages no longer exist; send any lingering links and
// search results to the new homepage instead of a 404.
const RETIRED = ['/mainokset', '/pikseli', '/meta-ads-manager', '/raportointi']

const SECURITY_HEADERS = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'" },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }]
  },
  async redirects() {
    return RETIRED.map(source => ({ source, destination: '/', permanent: true }))
  },
}

export default nextConfig
