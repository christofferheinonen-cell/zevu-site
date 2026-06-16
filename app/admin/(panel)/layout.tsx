import AdminSidebar from '@/components/admin/AdminSidebar'
import { adminCreds } from '@/lib/auth'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Zevu Admin',
  robots: { index: false, follow: false },
}

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  const { user } = adminCreds()
  return (
    <div className="adm-shell">
      <AdminSidebar user={user ?? 'admin'} />
      <div className="adm-main">{children}</div>
    </div>
  )
}
