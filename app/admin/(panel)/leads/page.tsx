import { getLeads } from '@/lib/leads'
import { adminDateTime } from '@/lib/admin-format'

export const dynamic = 'force-dynamic'

export default async function LeadsPage() {
  const leads = (await getLeads()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <>
      <header className="adm-head">
        <div>
          <h1>Enquiries</h1>
          <p className="adm-sub">{leads.length} enquiries from the contact form</p>
        </div>
      </header>

      {leads.length === 0 ? (
        <div className="adm-panel">
          <p className="adm-empty">No enquiries yet. Contact form submissions will show up here.</p>
        </div>
      ) : (
        <div className="adm-tablewrap">
          <table className="adm-table leads-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Business</th>
                <th>Type</th>
                <th>Message</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(l => (
                <tr key={l.id}>
                  <td className="adm-nowrap">{adminDateTime(new Date(l.createdAt))}</td>
                  <td>{l.name || '—'}</td>
                  <td><a href={`mailto:${l.email}`} className="adm-link">{l.email}</a></td>
                  <td className="adm-nowrap">{l.phone || '—'}</td>
                  <td>{l.company || '—'}</td>
                  <td>{l.industry || '—'}</td>
                  <td style={{ minWidth: 240, whiteSpace: 'pre-wrap' }}>{l.message || '—'}</td>
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
