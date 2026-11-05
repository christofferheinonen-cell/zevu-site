import { absoluteUrl } from '@/lib/seo'
import { CONTENT, pathFor } from '@/lib/content'
import { getAllArticles } from '@/lib/articles/store'
import { articleState } from '@/lib/articles/types'
import { blogPath } from '@/lib/articles/validate'

// Rebuilt hourly so new and scheduled articles appear without a redeploy.
export const revalidate = 3600

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

  const pages = ['home', ...CONTENT.en.sectors.map(s => s.key), 'blog', 'contact'] as const
  const priority = (p: string) => (p === 'home' ? 1 : p === 'contact' ? 0.5 : 0.8)
  const entries: Entry[] = (['en', 'es'] as const).flatMap(locale =>
    pages.map(p => ({
      loc: absoluteUrl(pathFor(locale, p)),
      lastmod: now,
      changefreq: p === 'contact' ? 'yearly' : 'monthly',
      priority: priority(p),
    }))
  )
  const articles = (await getAllArticles()).filter(a => articleState(a, now) === 'live')
  for (const a of articles) {
    entries.push({ loc: absoluteUrl(blogPath(a.locale, a.slug)), lastmod: new Date(a.updatedAt), changefreq: 'monthly', priority: 0.7 })
  }

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
