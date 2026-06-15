import { absoluteUrl, parseFiDate } from '@/lib/seo'
import { getAllPosts } from '@/lib/posts'
import { SERVICES } from '@/lib/services'

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

export function GET() {
  const now = new Date()

  const entries: Entry[] = [
    { loc: absoluteUrl('/'), lastmod: now, changefreq: 'weekly', priority: 1 },
    { loc: absoluteUrl('/blog'), lastmod: now, changefreq: 'weekly', priority: 0.7 },
    ...SERVICES.map(service => ({
      loc: absoluteUrl(`/${service.slug}`),
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8,
    })),
    ...getAllPosts().map(post => ({
      loc: absoluteUrl(`/blog/${post.slug}`),
      lastmod: post.publishedTime ? new Date(post.publishedTime) : parseFiDate(post.date),
      changefreq: 'monthly',
      priority: 0.6,
    })),
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
