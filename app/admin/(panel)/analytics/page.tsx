import Link from 'next/link'
import { fetchGa4Data } from '@/lib/analytics'

export const dynamic = 'force-dynamic'

const PERIODS = [
  { label: '7 days', days: 7 },
  { label: '28 days', days: 28 },
  { label: '90 days', days: 90 },
]

function num(n: number) {
  return n.toLocaleString('en-GB')
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
    error = err instanceof Error ? err.message : 'Unknown error'
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
            Couldn’t load data: {error}
          </p>
          <p className="adm-empty" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Check that <code>GOOGLE_SERVICE_ACCOUNT_JSON</code> and{' '}
            <code>GOOGLE_GA4_PROPERTY_ID</code> are set correctly, and that
            the service account has been added to the GA4 property.
          </p>
        </div>
      ) : data ? (
        <>
          {/* Summary cards */}
          <div className="adm-cards adm-cards--6">
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.sessions)}</div>
              <div className="adm-card-label">Sessions</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.users)}</div>
              <div className="adm-card-label">Users</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.newUsers)}</div>
              <div className="adm-card-label">New users</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{num(data.summary.pageviews)}</div>
              <div className="adm-card-label">Page views</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{dur(data.summary.avgSessionDuration)}</div>
              <div className="adm-card-label">Avg. session duration</div>
            </div>
            <div className="adm-card">
              <div className="adm-card-num">{pct(data.summary.bounceRate)}</div>
              <div className="adm-card-label">Bounce rate</div>
            </div>
          </div>

          {/* Conversions */}
          {data.conversions.length > 0 && (
            <section className="adm-panel" style={{ marginBottom: '16px' }}>
              <div className="adm-panel-head">
                <h2>Conversion events</h2>
              </div>
              <div className="adm-tablewrap">
                <table className="adm-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th className="adm-num">Count</th>
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
                <h2>Conversion events</h2>
              </div>
              <p className="adm-empty">
                No conversion events in this period. Mark events as key events
                in GA4 (Admin → Events → Mark as key event).
              </p>
            </section>
          )}

          <div className="adm-grid2">
            {/* Top pages */}
            <section className="adm-panel">
              <div className="adm-panel-head">
                <h2>Top pages</h2>
              </div>
              {data.topPages.length === 0 ? (
                <p className="adm-empty">No data.</p>
              ) : (
                <div className="adm-tablewrap">
                  <table className="adm-table">
                    <thead>
                      <tr>
                        <th>Page</th>
                        <th className="adm-num">Views</th>
                        <th className="adm-num">Users</th>
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
                <h2>Traffic sources</h2>
              </div>
              {data.topSources.length === 0 ? (
                <p className="adm-empty">No data.</p>
              ) : (
                <div className="adm-tablewrap">
                  <table className="adm-table">
                    <thead>
                      <tr>
                        <th>Channel</th>
                        <th className="adm-num">Sessions</th>
                        <th className="adm-num">Users</th>
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
