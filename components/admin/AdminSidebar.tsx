'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/admin', label: 'Yleiskatsaus', exact: true, icon: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10' },
  { href: '/admin/articles', label: 'Artikkelit', icon: 'M4 5h16M4 12h16M4 19h10' },
  { href: '/admin/leads', label: 'Yhteydenotot', icon: 'M3 8l9 6 9-6M3 6h18v12H3z' },
  { href: '/admin/search-console', label: 'Hakukonsoli', icon: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' },
]

export default function AdminSidebar({ user }: { user: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  function isActive(item: (typeof NAV)[number]) {
    return item.exact ? pathname === item.href : pathname.startsWith(item.href)
  }

  async function logout() {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
    router.refresh()
  }

  return (
    <aside className="adm-sidebar">
      <div className="adm-brand">
        <span className="adm-brand-logo">Zevu</span>
        <span className="adm-brand-tag">Admin</span>
      </div>

      <nav className="adm-nav">
        {NAV.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`adm-nav-link${isActive(item) ? ' active' : ''}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="adm-sidebar-foot">
        <Link href="/" target="_blank" className="adm-nav-link adm-nav-link--muted">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" />
          </svg>
          Avaa sivusto
        </Link>
        <div className="adm-user" title={user}>{user}</div>
        <button type="button" className="adm-logout" onClick={logout} disabled={loggingOut}>
          {loggingOut ? 'Kirjaudutaan ulos…' : 'Kirjaudu ulos'}
        </button>
      </div>
    </aside>
  )
}
