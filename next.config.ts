import type { NextConfig } from 'next'

// The old Finnish Meta-ads pages no longer exist; send any lingering links and
// search results to the new homepage instead of a 404.
const RETIRED = ['/mainokset', '/pikseli', '/meta-ads-manager', '/raportointi']

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED.map(source => ({ source, destination: '/', permanent: true }))
  },
}

export default nextConfig
