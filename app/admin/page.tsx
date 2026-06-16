import { getAllPosts, getPublishDate, isPublished } from '@/lib/posts'
import { getLeads } from '@/lib/leads'
import AdminDashboard, { ArticleRow, LeadRow } from '@/components/AdminDashboard'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Zevu Admin',
  robots: { index: false, follow: false },
}

function wordCount(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text ? text.split(' ').length : 0
}

function fiDate(d: Date): string {
  return d.toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki', dateStyle: 'medium', timeStyle: 'short' })
}

export default function AdminPage() {
  const now = new Date()

  const articles: ArticleRow[] = getAllPosts()
    .map(p => {
      const publishDate = getPublishDate(p)
      const status: ArticleRow['status'] =
        p.showOnBlog === false ? 'hidden'
        : p.showOnBlog === true ? 'published'
        : isPublished(p, now) ? 'published' : 'scheduled'
      return {
        slug: p.slug,
        title: p.title,
        cats: p.cats.join(', '),
        words: wordCount(p.content),
        read: p.read,
        status,
        publishAt: fiDate(publishDate),
        _sort: publishDate.getTime(),
      }
    })
    .sort((a, b) => b._sort - a._sort)
    .map(({ _sort, ...rest }) => rest)

  const leads: LeadRow[] = getLeads()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map(l => ({
      id: l.id,
      createdAt: fiDate(new Date(l.createdAt)),
      name: l.name,
      email: l.email,
      phone: l.phone,
      company: l.company,
      industry: l.industry,
      runsAds: l.runsAds === 'yes' ? 'Kyllä' : l.runsAds === 'no' ? 'Ei' : '',
      budget: l.budget,
      satisfaction: l.satisfaction ? String(l.satisfaction) : '',
      source: l.source,
    }))

  return <AdminDashboard articles={articles} leads={leads} now={fiDate(now)} />
}
