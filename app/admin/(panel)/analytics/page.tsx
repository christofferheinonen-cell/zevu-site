import Link from 'next/link'
import { fetchGa4Data } from '@/lib/analytics'

export const dynamic = 'force-dynamic'

const PERIODS = [
  { label: '7 pv', days: 7 },
  { label: '28 pv', days: 28 },
  { label: '90 pv', days: 90 },
]

function num(n: number) {
  return n.toLocaleString('fi-FI')
}

function dur(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function pct(n: number) {
  return `${(n * 100).toFixed(1)} %`
}

type Props = { searchParams: Promise<{ days?: string }> }

export default async function AnalyticsPage({ searchParams }: Props) {
  const { days: daysParam } = await searchParams
  const days = Number(daysParam ?? '28')
  const validDays = PERIODS.some(p => p.days === days) ? days : 28

  let data: Awaited<ReturnType<typeof fetchGa4Data>> | null = null
  let error: string | null = null

  try {
    data = await fetchGa4Data(validDays)
  } catch (err) {
    error = err instanceof Error ? err.message : 'Tuntematon virhe'
  }

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Google Analytics</h1>
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
              href={`/admin/analytics?days=${p.days}`}
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
            <code>GOOGLE_GA4_PROPERTY_ID</code> ovat asetettu oikein, ja että
            palvelutili on lisätty GA4-propertyyn.
          </p>
        </div>
      ) : data ? (
        <>
          {/* Summary cards */}
          <div className="adm-cards adm-cards--6">
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.sessions)}</div>
              <div className="adm-card-label">Istunnot</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.users)}</div>
              <div className="adm-card-label">Käyttäjät</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.newUsers)}</div>
              <div className="adm-card-label">Uudet käyttäjät</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.pageviews)}</div>
              <div className="adm-card-label">Sivunäytöt</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{dur(data.summary.avgSessionDuration)}</div>
              <div className="adm-card-label">Kesk. istunnon kesto</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{pct(data.summary.bounceRate)}</div>
              <div className="adm-card-label">Välittömät poistumiset</div>
            </div>
          </div>

          {/* Conversions */}
          {data.conversions.length > 0 && (
            <section className="adm-panel" style={{ marginBottom: '16px' }}>
              <div className="adm-panel-head">
                <h2>Konversiotapahtumat</h2>
              </div>
              <div className="adm-tablewrap">
                <table className="adm-table">
                  <thead>
                    <tr>
                      <th>Tapahtuma</th>
                      <th className="adm-num">Määrä</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.conversions.map((c, i) => (
                      <tr key={i}>
                        <td><code>{c.name}</code></td>
                        <td className="adm-num">{num(c.count)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {data.conversions.length === 0 && (
            <section className="adm-panel" style={{ marginBottom: '16px' }}>
              <div className="adm-panel-head">
                <h2>Konversiotapahtumat</h2>
              </div>
              <p className="adm-empty">
                Ei konversiotapahtumia valitulla ajanjaksolla. Merkitse tapahtumat
                avaintapahtumiksi GA4:ssä (Admin → Events → Mark as key event).
              </p>
            </section>
          )}

          <div className="adm-grid2">
            {/* Top pages */}
            <section className="adm-panel">
              <div className="adm-panel-head">
                <h2>Top sivut</h2>
              </div>
              {data.topPages.length === 0 ? (
                <p className="adm-empty">Ei dataa.</p>
              ) : (
                <div className="adm-tablewrap">
                  <table className="adm-table">
                    <thead>
                      <tr>
                        <th>Sivu</th>
                        <th className="adm-num">Näytöt</th>
                        <th className="adm-num">Käyttäjät</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topPages.map((p, i) => (
                        <tr key={i}>
                          <td>
                            <a
                              href={`https://www.zevu.cc${p.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="adm-link"
                              title={p.path}
                            >
                              {p.path}
                            </a>
                          </td>
                          <td className="adm-num">{num(p.pageviews)}</td>
                          <td className="adm-num">{num(p.users)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* Traffic sources */}
            <section className="adm-panel">
              <div className="adm-panel-head">
                <h2>Liikenteen lähteet</h2>
              </div>
              {data.topSources.length === 0 ? (
                <p className="adm-empty">Ei dataa.</p>
              ) : (
                <div className="adm-tablewrap">
                  <table className="adm-table">
                    <thead>
                      <tr>
                        <th>Kanava</th>
                        <th className="adm-num">Istunnot</th>
                        <th className="adm-num">Käyttäjät</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topSources.map((s, i) => (
                        <tr key={i}>
                          <td>{s.source}</td>
                          <td className="adm-num">{num(s.sessions)}</td>
                          <td className="adm-num">{num(s.users)}</td>
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
