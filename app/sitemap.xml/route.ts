import { absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

interface Entry {
  loc: string
  lastmod: Date
  changefreq: string
  priority: number
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const now = new Date()

  const entries: Entry[] = [
    { loc: absoluteUrl('/'), lastmod: now, changefreq: 'weekly', priority: 1 },
  ]

  const urls = entries
    .map(
      e => `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${e.lastmod.toISOString()}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
