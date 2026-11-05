import Link from 'next/link'
import Button from '@/components/site/Button'
import Faq from '@/components/site/Faq'
import Lines from '@/components/site/Lines'
import ArticleCover from '@/components/site/ArticleCover'
import JsonLd from '@/components/JsonLd'
import { getContent, pathFor, type Locale } from '@/lib/content'
import { getLiveArticles } from '@/lib/articles/store'
import { readingTime, type Article } from '@/lib/articles/types'
import { withHeadingIds } from '@/lib/articles/render'
import { blogPath } from '@/lib/articles/validate'
import { SITE_NAME, absoluteUrl } from '@/lib/seo'
import { formatDate, sectorLabel } from './BlogIndexView'

export default async function ArticleView({ locale, a }: { locale: Locale; a: Article }) {
  const c = getContent(locale)
  const { html, toc } = withHeadingIds(a.body)
  const url = absoluteUrl(blogPath(locale, a.slug))
  const live = await getLiveArticles(locale)
  const related = [
    ...live.filter(x => x.id !== a.id && x.sector === a.sector),
    ...live.filter(x => x.id !== a.id && x.sector !== a.sector),
  ].slice(0, 3)
  const sectorPage = a.sector !== 'general' ? pathFor(locale, a.sector) : undefined
  const updatedLater = new Date(a.updatedAt).getTime() - new Date(a.publishAt).getTime() > 86400000

  const ld: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.metaDescription || a.excerpt,
      inLanguage: c.htmlLang,
      datePublished: a.publishAt,
      dateModified: updatedLater ? a.updatedAt : a.publishAt,
      mainEntityOfPage: url,
      url,
      image: a.coverImage ? absoluteUrl(a.coverImage) : `${url}/opengraph-image`,
      author: { '@type': 'Organization', name: a.author || SITE_NAME, url: absoluteUrl('/') },
      publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: absoluteUrl('/icon') } },
      keywords: a.focusKeyword || undefined,
      wordCount: html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Zevu', item: absoluteUrl(pathFor(locale, 'home')) },
        { '@type': 'ListItem', position: 2, name: c.blog.nav, item: absoluteUrl(pathFor(locale, 'blog')) },
        { '@type': 'ListItem', position: 3, name: a.title, item: url },
      ],
    },
  ]
  if (a.faqs.length) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: c.htmlLang,
      mainEntity: a.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }

  return (
    <article>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
      <header className="zv-ahero">
        <div className="zv-wrap">
          <div className="zv-ahero-top" data-rv="">
            <nav className="zv-crumbs" aria-label="Breadcrumb">
              <Link href={pathFor(locale, 'blog')}>{c.blog.nav}</Link> &nbsp;/&nbsp;{' '}
              {sectorPage ? <Link href={sectorPage}>{sectorLabel(locale, a.sector)}</Link> : sectorLabel(locale, a.sector)}
            </nav>
            <span className="zv-eyebrow">{sectorLabel(locale, a.sector)}</span>
          </div>
          <Lines as="h1" className="zv-display" lines={[a.title]} />
          <p className="zv-ahero-lede" data-rv="">{a.excerpt}</p>
          <div className="zv-meta" data-rv="">
            <span>{c.blog.by} {a.author || SITE_NAME}</span>
            <span>·</span>
            <span>{c.blog.published} <time dateTime={a.publishAt}>{formatDate(locale, a.publishAt)}</time></span>
            {updatedLater ? <><span>·</span><span>{c.blog.updated} <time dateTime={a.updatedAt}>{formatDate(locale, a.updatedAt)}</time></span></> : null}
            <span>·</span>
            <span>{c.blog.minRead(readingTime(a.body))}</span>
          </div>
          <div className="zv-ahero-cover" data-rv="">
            <ArticleCover a={a} label={sectorLabel(locale, a.sector)} />
          </div>
        </div>
      </header>

      <div className="zv-wrap zv-abody">
        {toc.length > 2 ? (
          <nav className="zv-toc" aria-label={c.blog.onThisPage}>
            <b>{c.blog.onThisPage}</b>
            <ol>{toc.map(t => <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>)}</ol>
          </nav>
        ) : <div />}
        <div>
          <div className="zv-prose" dangerouslySetInnerHTML={{ __html: html }} />
          <aside className="zv-acta" data-rv="">
            <div>
              <span className="zv-eyebrow">{c.blog.ctaEyebrow}</span>
              <p className="zv-h2">{c.blog.ctaTitle[0]} <em>{c.blog.ctaTitle[1]}</em></p>
              <p>{c.blog.ctaBody}</p>
            </div>
            <Button href={pathFor(locale, 'contact')} variant="light">{c.blog.cta}</Button>
          </aside>
        </div>
      </div>

      {a.faqs.length ? <Faq items={a.faqs} title={c.blog.faqTitle} eyebrow={c.faq.eyebrow} side={c.faq.side} /> : null}

      {related.length ? (
        <section className="zv-section" style={{ paddingTop: a.faqs.length ? 0 : undefined }} aria-labelledby="related-h">
          <div className="zv-wrap">
            <div className="zv-bhero-foot" style={{ marginTop: 0 }}>
              <h2 id="related-h" className="zv-h2">{c.blog.related}</h2>
              <Link href={pathFor(locale, 'blog')} className="zv-link">{c.blog.back} →</Link>
            </div>
            <div className="zv-cards">
              {related.map(r => (
                <Link key={r.id} href={blogPath(locale, r.slug)} className="zv-card">
                  <ArticleCover a={r} label={sectorLabel(locale, r.sector)} size="sm" />
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : <div style={{ height: 96 }} />}
    </article>
  )
}
