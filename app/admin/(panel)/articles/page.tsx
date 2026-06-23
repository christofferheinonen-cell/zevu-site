import Link from 'next/link'
import { getAllPosts, getPublishDate } from '@/lib/posts'
import { articleStatus, fiDateTime, wordCount, STATUS_LABEL, STATUS_COLOR } from '@/lib/admin-format'
import { getOverrides } from '@/lib/articles'
import ArticleCalendar, { type CalArticle } from '@/components/admin/ArticleCalendar'

export const dynamic = 'force-dynamic'

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>
}) {
  const { view } = await searchParams
  const isCalendar = view === 'calendar'

  const now = new Date()
  const todayIso = now.toISOString().slice(0, 10)
  const [overrides, posts] = await Promise.all([getOverrides(), getAllPosts()])

  const rows = posts
    .map(p => ({
      slug: p.slug,
      title: p.title,
      cats: p.cats.join(', '),
      words: wordCount(p.content),
      read: p.read,
      status: articleStatus(p, now),
      publishAt: fiDateTime(getPublishDate(p)),
      sort: getPublishDate(p).getTime(),
      edited: Boolean(overrides[p.slug]),
    }))
    .sort((a, b) => b.sort - a.sort)

  const calArticles: CalArticle[] = posts.map(p => {
    const pd = getPublishDate(p)
    // Use Helsinki date for calendar placement so it matches Finnish dates
    const isoDate = pd.toLocaleDateString('sv-SE', { timeZone: 'Europe/Helsinki' }) // YYYY-MM-DD
    return {
      slug: p.slug,
      title: p.title,
      status: articleStatus(p, now),
      isoDate,
    }
  })

  // Default calendar month: if any scheduled articles exist, open on the nearest one; else current month
  const firstScheduled = calArticles
    .filter(a => a.status === 'scheduled' && a.isoDate >= todayIso)
    .sort((a, b) => a.isoDate.localeCompare(b.isoDate))[0]
  void firstScheduled // used via calArticles prop

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Artikkelit</h1>
          <p className="adm-sub">{rows.length} artikkelia · klikkaa muokataksesi ja esikatsellaksesi</p>
        </div>
        <div className="adm-head-actions">
          <div className="cal-view-toggle">
            <Link
              href="/admin/articles"
              className={`cal-view-btn${!isCalendar ? ' cal-view-btn--active' : ''}`}
            >
              ☰ Lista
            </Link>
            <Link
              href="/admin/articles?view=calendar"
              className={`cal-view-btn${isCalendar ? ' cal-view-btn--active' : ''}`}
            >
              📅 Kalenteri
            </Link>
          </div>
        </div>
      </header>

      {isCalendar ? (
        <ArticleCalendar articles={calArticles} />
      ) : (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Tila</th>
                <th>Julkaisu</th>
                <th>Otsikko</th>
                <th>Kategoria</th>
                <th className="adm-num">Sanat</th>
                <th className="adm-num">Lukuaika</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.slug}>
                  <td>
                    <span className="adm-badge" style={{ color: STATUS_COLOR[r.status], background: STATUS_COLOR[r.status] + '1a' }}>
                      {STATUS_LABEL[r.status]}
                    </span>
                  </td>
                  <td className="adm-nowrap">{r.publishAt}</td>
                  <td>
                    <Link href={`/admin/articles/${r.slug}`} className="adm-rowtitle">{r.title}</Link>
                    {r.edited && <span className="adm-edited">muokattu</span>}
                  </td>
                  <td>{r.cats}</td>
                  <td className="adm-num">{r.words}</td>
                  <td className="adm-num">{r.read} min</td>
                  <td className="adm-nowrap">
                    <Link href={`/admin/articles/${r.slug}`} className="adm-link">Muokkaa →</Link>
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
