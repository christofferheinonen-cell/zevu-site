import { notFound } from 'next/navigation'
import ArticleEditor from '@/components/admin/ArticleEditor'
import { editorContext } from '@/lib/articles/admin'

export const dynamic = 'force-dynamic'

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ctx = await editorContext(id)
  if (!ctx.article) notFound()
  return <ArticleEditor initial={ctx.article} others={ctx.others} seed={ctx.seed} edited={ctx.edited} />
}
