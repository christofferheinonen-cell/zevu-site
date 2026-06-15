import { getAllPosts, getListedPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RevealWrapper from '@/components/RevealWrapper'
import ArticleCta from '@/components/ArticleCta'
import JsonLd from '@/components/JsonLd'
import {
  buildMetadata,
  absoluteUrl,
  parseFiDate,
  SITE_NAME,
  CONTACT_EMAIL,
} from '@/lib/seo'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return buildMetadata({
    title: `${post.title} — Zevu`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
    images: post.image ? [post.image] : undefined,
    publishedTime: parseFiDate(post.date).toISOString(),
  })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Navigation only traverses listed posts; hidden posts get no prev/next.
  const listed = getListedPosts()
  const idx = listed.findIndex(p => p.slug === slug)
  const prev = idx > 0 ? listed[idx - 1] : undefined
  const next = idx >= 0 && idx < listed.length - 1 ? listed[idx + 1] : undefined

  const published = parseFiDate(post.date).toISOString()
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: published,
    dateModified: published,
    inLanguage: 'fi-FI',
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    ...(post.image ? { image: absoluteUrl(post.image) } : {}),
    author: { '@type': 'Organization', name: SITE_NAME, email: CONTACT_EMAIL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/icon') },
    },
    articleSection: post.cats,
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Etusivu', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Blogi', item: absoluteUrl('/blog') },
      { '@type': 'ListItem', position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  }

  return (
    <main>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      <div className="wrap">
        <RevealWrapper className="single-hero">
          <Link href="/blog" className="single-back">← Takaisin blogiin</Link>
          <div className="single-cats">
            {post.cats.map(c => <span key={c} className="single-cat">{c}</span>)}
          </div>
          <h1>{post.title}</h1>
          <div className="single-meta">
            <span><div className="single-author-dot">C</div><span>Christoffer</span></span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read} min lukuaika</span>
          </div>
        </RevealWrapper>

        <div className={`single-thumb ${post.grad}`}>
          {post.image ? (
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div className="single-thumb-placeholder">[ pääkuva — {post.cats[0].toLowerCase()} ]</div>
          )}
        </div>

        <div className="single-layout">
          <div className="single-main">
            <RevealWrapper className="single-content">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </RevealWrapper>

            <RevealWrapper className="post-nav">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="post-nav-item">
                  <div className="post-nav-dir">← Edellinen</div>
                  <div className="post-nav-title">{prev.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="post-nav-item next">
                  <div className="post-nav-dir">Seuraava →</div>
                  <div className="post-nav-title">{next.title}</div>
                </Link>
              ) : <div />}
            </RevealWrapper>
          </div>

          <ArticleCta />
        </div>
      </div>
    </main>
  )
}
