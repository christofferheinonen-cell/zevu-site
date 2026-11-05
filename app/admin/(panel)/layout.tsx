import AdminSidebar from '@/components/admin/AdminSidebar'
import { adminCreds } from '@/lib/auth'
import { articleStorageStatus } from '@/lib/articles/store'
import { getRedis } from '@/lib/redis'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Zevu Admin',
  robots: { index: false, follow: false },
}

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const { user } = adminCreds()
  const storage = getRedis() ? await articleStorageStatus() : { ok: true }
  return (
    <div className="adm-shell">
      <AdminSidebar user={user ?? 'admin'} />
      <div className="adm-main">
        {!storage.ok ? (
          <div className="adm-flash adm-flash--err" role="alert">
            <b>The database is unreachable.</b> New enquiries from the contact form can’t be stored, and article
            edits can’t be saved; the site is showing the articles built into the code. In Vercel, open the
            project’s Storage tab and connect a Redis (Upstash) database, then redeploy.
          </div>
        ) : null}
        {children}
      </div>
    </div>
  )
}
