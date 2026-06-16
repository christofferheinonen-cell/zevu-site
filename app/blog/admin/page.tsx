import Link from 'next/link'
import { getAllPosts, getPublishDate, isPublished, type Post } from '@/lib/posts'

// Internal review page: not linked from the site nav and excluded from the
// sitemap. Re-check publish status periodically without a redeploy.
export const revalidate = 900

export const metadata = {
  title: 'Blogin julkaisukalenteri (sisäinen)',
  robots: { index: false, follow: false },
}

function wordCount(html: string): number {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
}

function formatDateTime(d: Date): string {
  return d.toLocaleString('fi-FI', {
    timeZone: 'Europe/Helsinki',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

type Status = 'published' | 'scheduled' | 'hidden'

function statusOf(post: Post, now: Date): Status {
  if (post.showOnBlog === false) return 'hidden'
  if (post.showOnBlog === true) return 'published'
  return isPublished(post, now) ? 'published' : 'scheduled'
}

const STATUS_LABEL: Record<Status, string> = {
  published: 'Julkaistu',
  scheduled: 'Ajastettu',
  hidden: 'Piilotettu',
}

const STATUS_COLOR: Record<Status, string> = {
  published: '#16a34a',
  scheduled: '#d97706',
  hidden: '#6b7280',
}

export default function BlogAdminPage() {
  const now = new Date()
  const rows = getAllPosts()
    .map(post => ({
      post,
      status: statusOf(post, now),
      publishAt: getPublishDate(post),
      words: wordCount(post.content),
    }))
    .sort((a, b) => a.publishAt.getTime() - b.publishAt.getTime())

  const counts = rows.reduce(
    (acc, r) => ({ ...acc, [r.status]: acc[r.status] + 1 }),
    { published: 0, scheduled: 0, hidden: 0 } as Record<Status, number>
  )

  return (
    <main style={{ padding: '48px', maxWidth: 1200, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>Blogin julkaisukalenteri</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>
        Sisäinen näkymä, ei linkitetty sivustolla eikä sitemapissa. Nykyhetki: {formatDateTime(now)} (Suomen aikaa).
      </p>
      <p style={{ marginBottom: 24, fontSize: 14 }}>
        <span style={{ color: STATUS_COLOR.published }}>● Julkaistu: {counts.published}</span>
        {'  '}
        <span style={{ color: STATUS_COLOR.scheduled }}>● Ajastettu: {counts.scheduled}</span>
        {'  '}
        <span style={{ color: STATUS_COLOR.hidden }}>● Piilotettu: {counts.hidden}</span>
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '8px 6px' }}>Tila</th>
            <th style={{ padding: '8px 6px' }}>Julkaisu (FI-aika)</th>
            <th style={{ padding: '8px 6px' }}>Otsikko</th>
            <th style={{ padding: '8px 6px' }}>Kategoria</th>
            <th style={{ padding: '8px 6px' }}>Sanat</th>
            <th style={{ padding: '8px 6px' }}>Lukuaika</th>
            <th style={{ padding: '8px 6px' }}>Avaa</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ post, status, publishAt, words }) => (
            <tr key={post.slug} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px 6px', color: STATUS_COLOR[status], fontWeight: 600 }}>
                {STATUS_LABEL[status]}
              </td>
              <td style={{ padding: '8px 6px', whiteSpace: 'nowrap' }}>{formatDateTime(publishAt)}</td>
              <td style={{ padding: '8px 6px' }}>{post.title}</td>
              <td style={{ padding: '8px 6px' }}>{post.cats.join(', ')}</td>
              <td style={{ padding: '8px 6px' }}>{words}</td>
              <td style={{ padding: '8px 6px' }}>{post.read} min</td>
              <td style={{ padding: '8px 6px' }}>
                <Link href={`/blog/${post.slug}`} target="_blank">
                  Lue →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
