import Link from 'next/link'
import { fetchSearchConsoleData, GscRow } from '@/lib/search-console'

export const dynamic = 'force-dynamic'

const PERIODS = [
  { label: '7 pv', days: 7 },
  { label: '28 pv', days: 28 },
  { label: '90 pv', days: 90 },
]

function pct(n: number) {
  return `${(n * 100).toFixed(1)} %`
}

function pos(n: number) {
  return n.toFixed(1)
}

function num(n: number) {
  return n.toLocaleString('fi-FI')
}

function shortUrl(url: string) {
  try {
    const u = new URL(url)
    return u.pathname === '/' ? u.hostname : u.pathname
  } catch {
    return url
  }
}

type Props = { searchParams: Promise<{ days?: string }> }

export default async function SearchConsolePage({ searchParams }: Props) {
  const { days: daysParam } = await searchParams
  const days = Number(daysParam ?? '28')
  const validDays = PERIODS.some(p => p.days === days) ? days : 28

  let data: Awaited<ReturnType<typeof fetchSearchConsoleData>> | null = null
  let error: string | null = null

  try {
    data = await fetchSearchConsoleData(validDays)
  } catch (err) {
    error = err instanceof Error ? err.message : 'Tuntematon virhe'
  }

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Google Search Console</h1>
          {data && (
            <p className="adm-sub">
              {data.startDate} – {data.endDate}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {PERIODS.map(p => (
            <Link
              key={p.days}
              href={`/admin/search-console?days=${p.days}`}
              className={`adm-btn ${p.days === validDays ? 'adm-btn--active' : 'adm-btn--ghost'}`}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </header>

      {error ? (
        <div className="adm-panel">
          <p className="adm-empty" style={{ color: '#dc2626' }}>
            Virhe ladattaessa dataa: {error}
          </p>
          <p className="adm-empty" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Varmista, että <code>GOOGLE_SERVICE_ACCOUNT_JSON</code> ja{' '}
            <code>GOOGLE_SEARCH_CONSOLE_SITE_URL</code> ovat asetettu oikein.
          </p>
        </div>
      ) : data ? (
        <>
          <div className="adm-cards">
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.clicks)}</div>
              <div className="adm-card-label">Klikkaukset</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.impressions)}</div>
              <div className="adm-card-label">Näyttökerrat</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{pct(data.summary.ctr)}</div>
              <div className="adm-card-label">Klikkausprosentti</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{pos(data.summary.position)}</div>
              <div className="adm-card-label">Keskisijoitus</div>
            </div>
          </div>

          <div className="adm-grid2">
            <section className="adm-panel">
              <div className="adm-panel-head">
                <h2>Top hakusanat</h2>
              </div>
              {data.queries.length === 0 ? (
                <p className="adm-empty">Ei dataa.</p>
              ) : (
                <div className="adm-tablewrap">
                  <table className="adm-table">
                    <thead>
                      <tr>
                        <th>Hakusana</th>
                        <th className="adm-num">Klik.</th>
                        <th className="adm-num">Näyt.</th>
                        <th className="adm-num">CTR</th>
                        <th className="adm-num">Sij.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.queries.map((row: GscRow, i: number) => (
                        <tr key={i}>
                          <td>{row.keys[0]}</td>
                          <td className="adm-num">{num(row.clicks)}</td>
                          <td className="adm-num">{num(row.impressions)}</td>
                          <td className="adm-num">{pct(row.ctr)}</td>
                          <td className="adm-num">{pos(row.position)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            <section className="adm-panel">
              <div className="adm-panel-head">
                <h2>Top sivut</h2>
              </div>
              {data.pages.length === 0 ? (
                <p className="adm-empty">Ei dataa.</p>
              ) : (
                <div className="adm-tablewrap">
                  <table className="adm-table">
                    <thead>
                      <tr>
                        <th>Sivu</th>
                        <th className="adm-num">Klik.</th>
                        <th className="adm-num">Näyt.</th>
                        <th className="adm-num">CTR</th>
                        <th className="adm-num">Sij.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.pages.map((row: GscRow, i: number) => (
                        <tr key={i}>
                          <td>
                            <a
                              href={row.keys[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="adm-link"
                              title={row.keys[0]}
                            >
                              {shortUrl(row.keys[0])}
                            </a>
                          </td>
                          <td className="adm-num">{num(row.clicks)}</td>
                          <td className="adm-num">{num(row.impressions)}</td>
                          <td className="adm-num">{pct(row.ctr)}</td>
                          <td className="adm-num">{pos(row.position)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        </>
      ) : null}
    </>
  )
}
