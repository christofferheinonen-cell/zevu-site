import Link from 'next/link'
import { getAllPosts, getPublishDate } from '@/lib/posts'
import { getLeads } from '@/lib/leads'
import { articleStatus, fiDateTime } from '@/lib/admin-format'

export const dynamic = 'force-dynamic'

export default function AdminHome() {
  const now = new Date()
  const posts = getAllPosts()
  const counts = { published: 0, scheduled: 0, hidden: 0 }
  for (const p of posts) counts[articleStatus(p, now)]++

  const leads = getLeads().sort(
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
          <h1>Yleiskatsaus</h1>
          <p className="adm-sub">{fiDateTime(now)} · Suomen aikaa</p>
        </div>
      </header>

      <div className="adm-cards">
        <div className="adm-card">
          <div className="adm-card-num">{posts.length}</div>
          <div className="adm-card-label">Artikkelia yhteensä</div>
        </div>
        <div className="adm-card">
          <div className="adm-card-num" style={{ color: '#16a34a' }}>{counts.published}</div>
          <div className="adm-card-label">Julkaistu</div>
        </div>
        <div className="adm-card">
          <div className="adm-card-num" style={{ color: '#d97706' }}>{counts.scheduled}</div>
          <div className="adm-card-label">Ajastettu</div>
        </div>
        <div className="adm-card">
          <div className="adm-card-num">{leads.length}</div>
          <div className="adm-card-label">Yhteydenottoa</div>
        </div>
      </div>

      <div className="adm-grid2">
        <section className="adm-panel">
          <div className="adm-panel-head">
            <h2>Seuraavaksi julkaistavat</h2>
            <Link href="/admin/articles" className="adm-link">Kaikki artikkelit →</Link>
          </div>
          {upcoming.length === 0 ? (
            <p className="adm-empty">Ei ajastettuja artikkeleita.</p>
          ) : (
            <ul className="adm-list">
              {upcoming.map(({ p }) => (
                <li key={p.slug}>
                  <Link href={`/admin/articles/${p.slug}`} className="adm-list-title">{p.title}</Link>
                  <span className="adm-list-meta">{fiDateTime(getPublishDate(p))}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="adm-panel">
          <div className="adm-panel-head">
            <h2>Uusimmat yhteydenotot</h2>
            <Link href="/admin/leads" className="adm-link">Kaikki →</Link>
          </div>
          {leads.length === 0 ? (
            <p className="adm-empty">Ei vielä yhteydenottoja.</p>
          ) : (
            <ul className="adm-list">
              {leads.slice(0, 5).map(l => (
                <li key={l.id}>
                  <span className="adm-list-title">{l.name || l.email}</span>
                  <span className="adm-list-meta">{fiDateTime(new Date(l.createdAt))}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  )
}
