import BlogIndexView from '@/components/site/views/BlogIndexView'
import { alternatesFor, getContent, pathFor } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

const c = getContent('en')

export const metadata = buildMetadata({
  path: pathFor('en', 'blog'),
  title: c.blog.metaTitle,
  description: c.blog.metaDescription,
  locale: c.ogLocale,
  languages: alternatesFor('blog'),
})

export default async function Page({ searchParams }: { searchParams: Promise<{ sector?: string }> }) {
  const { sector } = await searchParams
  return <BlogIndexView locale="en" sector={sector} />
}
