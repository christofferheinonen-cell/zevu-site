import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'
import { getOverride } from '@/lib/articles'
import ArticleEditor from '@/components/admin/ArticleEditor'

export const dynamic = 'force-dynamic'

export default async function EditArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const override = await getOverride(slug)

  return (
    <ArticleEditor
      slug={post.slug}
      isEdited={Boolean(override)}
      updatedAt={override?.updatedAt ?? null}
      initial={{
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        cats: post.cats.join(', '),
        read: post.read,
        date: post.date,
        publishedTime: post.publishedTime ?? '',
        showOnBlog: post.showOnBlog === true ? 'show' : post.showOnBlog === false ? 'hide' : 'auto',
      }}
    />
  )
}
