import { notFound } from 'next/navigation'
import ArticleView from '@/components/site/views/ArticleView'
import { getContent } from '@/lib/content'
import { getAllArticles, getLiveArticle, getLiveArticles, translationOf } from '@/lib/articles/store'
import { articleState, effectiveMetaTitle } from '@/lib/articles/types'
import { blogPath } from '@/lib/articles/validate'
import { buildMetadata } from '@/lib/seo'

const c = getContent('es')

// Re-check periodically so scheduled articles go live without a redeploy.
export const revalidate = 300

export async function generateStaticParams() {
  return (await getLiveArticles('es')).map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = await getLiveArticle('es', (await params).slug)
  if (!a) return {}
  const t = translationOf(a, await getAllArticles())
  const tLive = t && articleState(t) === 'live' ? t : undefined
  const meta = buildMetadata({
    path: blogPath('es', a.slug),
    title: effectiveMetaTitle(a),
    description: a.metaDescription || a.excerpt,
    type: 'article',
    publishedTime: a.publishAt,
    locale: c.ogLocale,
    images: a.coverImage ? [a.coverImage] : undefined,
    languages: tLive
      ? { en: blogPath('en', tLive.slug), es: blogPath('es', a.slug) }
      : undefined,
  })
  return { ...meta, keywords: a.focusKeyword || undefined }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const a = await getLiveArticle('es', (await params).slug)
  if (!a) notFound()
  return <ArticleView locale="es" a={a} />
}
