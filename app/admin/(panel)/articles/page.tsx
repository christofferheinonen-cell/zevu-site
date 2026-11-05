import Link from 'next/link'
import { getArticleRows, type ArticleRow } from '@/lib/articles/admin'
import { CONTENT } from '@/lib/content'
import { adminDate, adminDateTime, scoreColor, STATE_COLOR, STATE_LABEL } from '@/lib/admin-format'

export const dynamic = 'force-dynamic'

const sectorName = (s: string) => (s === 'general' ? 'General' : CONTENT.en.sectors.find(x => x.key === s)?.label ?? s)

function Badge({ r }: { r: ArticleRow }) {
  const c = STATE_COLOR[r.state]
  return <span className="adm-badge" style={{ color: c, background: c + '1a' }}>{STATE_LABEL[r.state]}</span>
}

function Score({ n }: { n: number }) {
  return (
    <span className="adm-score" title={`SEO score ${n}/100`}>
      <span className="adm-score-bar"><i style={{ width: `${n}%`, background: scoreColor(n) }} /></span>
      <b style={{ color: scoreColor(n) }}>{n}</b>
    </span>
  )
}

export default async function ArticlesPage({ searchParams }: { searchParams: Promise<{ lang?: string; view?: string }> }) {
  const { lang, view } = await searchParams
  const all = await getArticleRows()
  const rows = lang === 'en' || lang === 'es' ? all.filter(r => r.a.locale === lang) : all
  const schedule = view === 'schedule'
  const q = (p: Record<string, string | undefined>) => {
    const s = new URLSearchParams(Object.entries({ lang, view, ...p }).filter(([, v]) => v) as [string, string][]).toString()
    return `/admin/articles${s ? `?${s}` : ''}`
  }
  const count = (l?: string) => (l ? all.filter(r => r.a.locale === l).length : all.length)

  // Schedule: everything not a draft, oldest first, grouped by month.
  const months = new Map<string, ArticleRow[]>()
  for (const r of [...rows].filter(r => r.state !== 'draft').sort((x, y) => x.a.publishAt.localeCompare(y.a.publishAt))) {
    const key = new Date(r.a.publishAt).toLocaleDateString('en-GB', { timeZone: 'Europe/Madrid', month: 'long', year: 'numeric' })
    months.set(key, [...(months.get(key) ?? []), r])
  }
  const drafts = rows.filter(r => r.state === 'draft')

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Articles</h1>
          <p className="adm-sub">{all.filter(r => r.state === 'live').length} live · {all.filter(r => r.state === 'scheduled').length} scheduled · {all.filter(r => r.state === 'draft').length} drafts</p>
        </div>
        <div className="adm-head-actions">
          <Link href="/admin/articles/new" className="adm-btn adm-btn--primary">New article</Link>
        </div>
      </header>

      <div className="adm-toolbar">
        <div className="cal-view-toggle" role="tablist" aria-label="Language">
          {[undefined, 'en', 'es'].map(l => (
            <Link key={l ?? 'all'} href={q({ lang: l })} className={`cal-view-btn${lang === l || (!l && !lang) ? ' cal-view-btn--active' : ''}`}>
              {l ? l.toUpperCase() : 'All'} <span className="adm-count">{count(l)}</span>
            </Link>
          ))}
        </div>
        <div className="cal-view-toggle" role="tablist" aria-label="View">
          <Link href={q({ view: undefined })} className={`cal-view-btn${!schedule ? ' cal-view-btn--active' : ''}`}>List</Link>
          <Link href={q({ view: 'schedule' })} className={`cal-view-btn${schedule ? ' cal-view-btn--active' : ''}`}>Schedule</Link>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="adm-panel"><p className="adm-empty">No articles yet. <Link href="/admin/articles/new" className="adm-link">Write the first one →</Link></p></div>
      ) : schedule ? (
        <div className="adm-schedule">
          {[...months.entries()].map(([m, items]) => (
            <section key={m} className="adm-panel">
              <div className="adm-panel-head"><h2>{m}</h2><span className="adm-list-meta">{items.length} articles</span></div>
              <ul className="adm-list">
                {items.map(r => (
                  <li key={r.a.id}>
                    <Link href={`/admin/articles/${r.a.id}`} className="adm-list-title"><span className="adm-lang">{r.a.locale}</span>{r.a.title}</Link>
                    <span className="adm-list-meta"><Badge r={r} /> &nbsp;{adminDateTime(new Date(r.a.publishAt))}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {drafts.length ? (
            <section className="adm-panel">
              <div className="adm-panel-head"><h2>Drafts</h2><span className="adm-list-meta">not scheduled</span></div>
              <ul className="adm-list">
                {drafts.map(r => (
                  <li key={r.a.id}>
                    <Link href={`/admin/articles/${r.a.id}`} className="adm-list-title"><span className="adm-lang">{r.a.locale}</span>{r.a.title}</Link>
                    <span className="adm-list-meta">updated {adminDate(new Date(r.a.updatedAt))}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Article</th>
                <th>Sector</th>
                <th>Status</th>
                <th>Publish date</th>
                <th>SEO</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.a.id}>
                  <td style={{ minWidth: 280 }}>
                    <Link href={`/admin/articles/${r.a.id}`} className="adm-rowtitle"><span className="adm-lang">{r.a.locale}</span>{r.a.title}</Link>
                    <div className="adm-rowsub">{r.a.focusKeyword ? `“${r.a.focusKeyword}”` : 'No focus keyword'}</div>
                  </td>
                  <td className="adm-nowrap">{sectorName(r.a.sector)}</td>
                  <td><Badge r={r} /></td>
                  <td className="adm-nowrap">{adminDate(new Date(r.a.publishAt))}</td>
                  <td><Score n={r.score} /></td>
                  <td className="adm-nowrap">
                    {r.translation ? (
                      <Link href={`/admin/articles/${r.translation.id}`} className="adm-link"><span className="adm-lang">{r.translation.locale}</span>Open</Link>
                    ) : (
                      <Link href={`/admin/articles/new?from=${r.a.id}`} className="adm-link">+ Add {r.a.locale === 'en' ? 'ES' : 'EN'}</Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
