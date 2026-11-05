import Link from 'next/link'
import Lines from '@/components/site/Lines'
import ArticleCover from '@/components/site/ArticleCover'
import JsonLd from '@/components/JsonLd'
import { getContent, pathFor, type Locale } from '@/lib/content'
import { getLiveArticles } from '@/lib/articles/store'
import { readingTime, type Article, type ArticleSector } from '@/lib/articles/types'
import { blogPath } from '@/lib/articles/validate'
import { absoluteUrl } from '@/lib/seo'

export function sectorLabel(locale: Locale, s: ArticleSector) {
  const c = getContent(locale)
  return s === 'general' ? c.blog.general : c.sectors.find(x => x.key === s)!.label
}

export function formatDate(locale: Locale, iso: string) {
  return new Date(iso).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-GB', { timeZone: 'Europe/Madrid', day: 'numeric', month: 'long', year: 'numeric' })
}

function Meta({ locale, a }: { locale: Locale; a: Article }) {
  const c = getContent(locale)
  return (
    <div className="zv-meta">
      <b>{sectorLabel(locale, a.sector)}</b>
      <span>{formatDate(locale, a.publishAt)}</span>
      <span>·</span>
      <span>{c.blog.minRead(readingTime(a.body))}</span>
    </div>
  )
}

export default async function BlogIndexView({ locale, sector }: { locale: Locale; sector?: string }) {
  const c = getContent(locale)
  const all = await getLiveArticles(locale)
  const filters: ArticleSector[] = ['restaurants', 'bars', 'coffee-shops', 'other-businesses', 'general']
  const available = filters.filter(f => all.some(a => a.sector === f))
  const active = available.includes(sector as ArticleSector) ? (sector as ArticleSector) : undefined
  const list = active ? all.filter(a => a.sector === active) : all
  const [first, ...rest] = list
  const base = pathFor(locale, 'blog')

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: c.blog.metaTitle,
    url: absoluteUrl(base),
    inLanguage: c.htmlLang,
    blogPost: all.slice(0, 20).map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: absoluteUrl(blogPath(locale, a.slug)),
      datePublished: a.publishAt,
    })),
  }

  return (
    <>
      <JsonLd data={ld} />
      <section className="zv-bhero" aria-labelledby="blog-h">
        <div className="zv-wrap">
          <span className="zv-eyebrow" data-rv="">{c.blog.eyebrow}</span>
          <Lines as="h1" id="blog-h" className="zv-display" lines={[c.blog.title[0], <em key="e">{c.blog.title[1]}</em>]} />
          <div className="zv-bhero-foot">
            <p className="zv-lede" data-rv="">{c.blog.lede}</p>
            {available.length > 1 ? (
              <nav className="zv-filters" aria-label={c.blog.all}>
                <Link href={base} className="zv-filter" aria-current={!active ? 'page' : undefined}>{c.blog.all}</Link>
                {available.map(f => (
                  <Link key={f} href={`${base}?sector=${f}`} className="zv-filter" aria-current={active === f ? 'page' : undefined}>
                    {sectorLabel(locale, f)}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>

          {!first ? (
            <p className="zv-empty">{c.blog.empty}</p>
          ) : (
            <>
              <Link href={blogPath(locale, first.slug)} className="zv-feature" data-rv="">
                <ArticleCover a={first} label={sectorLabel(locale, first.sector)} />
                <div>
                  <Meta locale={locale} a={first} />
                  <h2>{first.title}</h2>
                  <p>{first.excerpt}</p>
                  <span className="zv-link" style={{ marginTop: 24 }}>{c.blog.readArticle} →</span>
                </div>
              </Link>
              {rest.length ? (
                <div className="zv-cards">
                  {rest.map((a, i) => (
                    <Link key={a.id} href={blogPath(locale, a.slug)} className="zv-card" data-rv="" style={{ ['--d' as string]: (i % 3) * 90 }}>
                      <ArticleCover a={a} label={sectorLabel(locale, a.sector)} size="sm" />
                      <Meta locale={locale} a={a} />
                      <h3>{a.title}</h3>
                      <p>{a.excerpt}</p>
                    </Link>
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
      <div style={{ height: 'clamp(96px, 12vw, 160px)' }} />
    </>
  )
}
