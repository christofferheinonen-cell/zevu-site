import ArticleEditor from '@/components/admin/ArticleEditor'
import { editorContext } from '@/lib/articles/admin'
import type { Article } from '@/lib/articles/types'

export const dynamic = 'force-dynamic'

export default async function NewArticlePage({ searchParams }: { searchParams: Promise<{ from?: string; lang?: string }> }) {
  const { from, lang } = await searchParams
  const source = from ? (await editorContext(from)).article : undefined
  const ctx = await editorContext()
  const locale = source ? (source.locale === 'en' ? 'es' : 'en') : lang === 'es' ? 'es' : 'en'
  const blank: Article = {
    id: '',
    locale,
    slug: '',
    group: source?.group ?? '',
    title: '',
    metaTitle: '',
    metaDescription: '',
    focusKeyword: '',
    excerpt: '',
    sector: source?.sector ?? 'general',
    coverImage: source?.coverImage ?? '',
    coverAlt: '',
    body: '',
    faqs: [],
    status: 'draft',
    publishAt: source?.publishAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: source?.author ?? 'Zevu',
  }
  return <ArticleEditor initial={blank} others={ctx.others} seed={false} edited={false} translatingFrom={source ? { id: source.id, title: source.title, locale: source.locale } : undefined} />
}
