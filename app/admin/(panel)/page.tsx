import Link from 'next/link'
import { getLeads } from '@/lib/leads'
import { getArticleRows } from '@/lib/articles/admin'
import { adminDateTime, scoreColor } from '@/lib/admin-format'

export const dynamic = 'force-dynamic'

export default async function AdminHome() {
  const now = new Date()
  const rows = await getArticleRows()
  const leads = (await getLeads()).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  const live = (l: 'en' | 'es') => rows.filter(r => r.state === 'live' && r.a.locale === l).length
  const upcoming = rows
    .filter(r => r.state === 'scheduled')
    .sort((x, y) => x.a.publishAt.localeCompare(y.a.publishAt))
    .slice(0, 5)
  const attention = rows
    .filter(r => r.state !== 'draft' && (r.score < 70 || !r.translation))
    .sort((x, y) => x.score - y.score)
    .slice(0, 5)

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Overview</h1>
          <p className="adm-sub">{adminDateTime(now)} · Spain time</p>
        </div>
        <div className="adm-head-actions">
          <Link href="/admin/articles/new" className="adm-btn adm-btn--primary">New article</Link>
        </div>
      </header>

      <div className="adm-cards">
        <div className="adm-card"><div className="adm-card-num">{live('en')}</div><div className="adm-card-label">Live · English</div></div>
        <div className="adm-card"><div className="adm-card-num">{live('es')}</div><div className="adm-card-label">Live · Español</div></div>
        <div className="adm-card"><div className="adm-card-num" style={{ color: '#b7791f' }}>{rows.filter(r => r.state === 'scheduled').length}</div><div className="adm-card-label">Scheduled</div></div>
        <div className="adm-card"><div className="adm-card-num">{leads.length}</div><div className="adm-card-label">Enquiries</div></div>
      </div>

      <div className="adm-grid2">
        <section className="adm-panel">
          <div className="adm-panel-head"><h2>Publishing next</h2><Link href="/admin/articles?view=schedule" className="adm-link">Schedule →</Link></div>
          {upcoming.length === 0 ? (
            <p className="adm-empty">Nothing scheduled.</p>
          ) : (
            <ul className="adm-list">
              {upcoming.map(({ a }) => (
                <li key={a.id}>
                  <Link href={`/admin/articles/${a.id}`} className="adm-list-title"><span className="adm-lang">{a.locale}</span>{a.title}</Link>
                  <span className="adm-list-meta">{adminDateTime(new Date(a.publishAt))}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="adm-panel">
          <div className="adm-panel-head"><h2>Latest enquiries</h2><Link href="/admin/leads" className="adm-link">All →</Link></div>
          {leads.length === 0 ? (
            <p className="adm-empty">No enquiries yet.</p>
          ) : (
            <ul className="adm-list">
              {leads.slice(0, 5).map(l => (
                <li key={l.id}>
                  <span className="adm-list-title">{l.name || l.email}{l.company ? ` · ${l.company}` : ''}</span>
                  <span className="adm-list-meta">{adminDateTime(new Date(l.createdAt))}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="adm-panel" style={{ gridColumn: '1 / -1' }}>
          <div className="adm-panel-head"><h2>Needs attention</h2><Link href="/admin/articles" className="adm-link">All articles →</Link></div>
          {attention.length === 0 ? (
            <p className="adm-empty">Every published article scores 70+ and has its translation.</p>
          ) : (
            <ul className="adm-list">
              {attention.map(({ a, score, translation }) => (
                <li key={a.id}>
                  <Link href={`/admin/articles/${a.id}`} className="adm-list-title"><span className="adm-lang">{a.locale}</span>{a.title}</Link>
                  <span className="adm-list-meta">
                    <b style={{ color: scoreColor(score) }}>SEO {score}</b>
                    {!translation ? ` · no ${a.locale === 'en' ? 'Spanish' : 'English'} version` : ''}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  )
}
