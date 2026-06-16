import { getLeads } from '@/lib/leads'
import { fiDateTime } from '@/lib/admin-format'

export const dynamic = 'force-dynamic'

export default async function LeadsPage() {
  const leads = (await getLeads()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Yhteydenotot</h1>
          <p className="adm-sub">{leads.length} yhteydenottoa lomakkeen kautta</p>
        </div>
      </header>

      {leads.length === 0 ? (
        <div className="adm-panel">
          <p className="adm-empty">Ei vielä yhteydenottoja. Yhteydenottolomakkeen vastaukset näkyvät täällä.</p>
        </div>
      ) : (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Vastaanotettu</th>
                <th>Nimi</th>
                <th>Sähköposti</th>
                <th>Puhelin</th>
                <th>Yritys</th>
                <th>Toimiala</th>
                <th>Mainostaa?</th>
                <th>Budjetti</th>
                <th className="adm-num">Tyytyväisyys</th>
                <th>Lähde</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(l => (
                <tr key={l.id}>
                  <td className="adm-nowrap">{fiDateTime(new Date(l.createdAt))}</td>
                  <td>{l.name || '—'}</td>
                  <td><a href={`mailto:${l.email}`} className="adm-link">{l.email}</a></td>
                  <td className="adm-nowrap">{l.phone || '—'}</td>
                  <td>{l.company || '—'}</td>
                  <td>{l.industry || '—'}</td>
                  <td>{l.runsAds === 'yes' ? 'Kyllä' : l.runsAds === 'no' ? 'Ei' : '—'}</td>
                  <td className="adm-nowrap">{l.budget || '—'}</td>
                  <td className="adm-num">{l.satisfaction ?? '—'}</td>
                  <td className="adm-nowrap">{l.source || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
