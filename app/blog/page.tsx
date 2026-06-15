import { getListedPosts } from '@/lib/posts'
import BlogList from '@/components/BlogList'
import RevealWrapper from '@/components/RevealWrapper'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Blogi — Meta-mainonnan parhaat käytännöt | Zevu',
  description:
    'Vinkkejä, strategioita ja tapaustutkimuksia Meta-mainonnasta suomalaisille yrittäjille.',
})

export default function BlogPage() {
  const posts = getListedPosts()
  return (
    <main>
      <div className="wrap">
        <RevealWrapper className="blog-hero">
          <div className="eyebrow">Blogi</div>
          <h1>Meta-mainonnan<br />parhaat käytännöt.</h1>
          <p>Vinkkejä, strategioita ja tapaustutkimuksia suomalaisille yrittäjille.</p>
        </RevealWrapper>
        <BlogList posts={posts} />
      </div>
    </main>
  )
}
