import Link from 'next/link'
import { getAllPosts, getPublishDate } from '@/lib/posts'
import { getLeads } from '@/lib/leads'
import { articleStatus, adminDateTime } from '@/lib/admin-format'

export const dynamic = 'force-dynamic'

export default async function AdminHome() {
  const now = new Date()
  const posts = await getAllPosts()
  const counts = { published: 0, scheduled: 0, hidden: 0 }
  for (const p of posts) counts[articleStatus(p, now)]++

  const leads = (await getLeads()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  const upcoming = posts
    .map(p => ({ p, t: getPublishDate(p).getTime() }))
    .filter(({ p, t }) => p.showOnBlog !== false && t > now.getTime())
    .sort((a, b) => a.t - b.t)
    .slice(0, 5)

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Overview</h1>
          <p className="adm-sub">{adminDateTime(now)} · Finland time (blog schedule)</p>
        </div>
      </header>

      <div className="adm-cards">
        <div className="adm-card">
          <div className="adm-card-num">{posts.length}</div>
          <div className="adm-card-label">Articles in total</div>
        </div>
        <div className="adm-card">
          <div className="adm-card-num" style={{ color: '#3f7d4e' }}>{counts.published}</div>
          <div className="adm-card-label">Published</div>
        </div>
        <div className="adm-card">
          <div className="adm-card-num" style={{ color: '#b7791f' }}>{counts.scheduled}</div>
          <div className="adm-card-label">Scheduled</div>
        </div>
        <div className="adm-card">
          <div className="adm-card-num">{leads.length}</div>
          <div className="adm-card-label">Enquiries</div>
        </div>
      </div>

      <div className="adm-grid2">
        <section className="adm-panel">
          <div className="adm-panel-head">
            <h2>Publishing next</h2>
            <Link href="/admin/articles" className="adm-link">All articles →</Link>
          </div>
          {upcoming.length === 0 ? (
            <p className="adm-empty">No scheduled articles.</p>
          ) : (
            <ul className="adm-list">
              {upcoming.map(({ p }) => (
                <li key={p.slug}>
                  <Link href={`/admin/articles/${p.slug}`} className="adm-list-title">{p.title}</Link>
                  <span className="adm-list-meta">{adminDateTime(getPublishDate(p))}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="adm-panel">
          <div className="adm-panel-head">
            <h2>Latest enquiries</h2>
            <Link href="/admin/leads" className="adm-link">All →</Link>
          </div>
          {leads.length === 0 ? (
            <p className="adm-empty">No enquiries yet.</p>
          ) : (
            <ul className="adm-list">
              {leads.slice(0, 5).map(l => (
                <li key={l.id}>
                  <span className="adm-list-title">{l.name || l.email}</span>
                  <span className="adm-list-meta">{adminDateTime(new Date(l.createdAt))}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  )
}
