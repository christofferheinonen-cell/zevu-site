import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RevealWrapper from '@/components/RevealWrapper'
import ArticleCta from '@/components/ArticleCta'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} — Zevu`, description: post.excerpt }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const posts = getAllPosts()
  const idx = posts.findIndex(p => p.slug === slug)
  const prev = posts[idx - 1]
  const next = posts[idx + 1]

  return (
    <main>
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
