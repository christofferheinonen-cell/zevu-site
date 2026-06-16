import Link from 'next/link'
import { getAllPosts, getPublishDate } from '@/lib/posts'
import { articleStatus, fiDateTime, wordCount, STATUS_LABEL, STATUS_COLOR } from '@/lib/admin-format'
import { getOverrides } from '@/lib/articles'

export const dynamic = 'force-dynamic'

export default function ArticlesPage() {
  const now = new Date()
  const overrides = getOverrides()
  const rows = getAllPosts()
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

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Artikkelit</h1>
          <p className="adm-sub">{rows.length} artikkelia · klikkaa muokataksesi ja esikatsellaksesi</p>
        </div>
      </header>

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
    </>
  )
}
