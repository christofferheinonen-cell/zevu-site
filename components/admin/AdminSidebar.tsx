'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV = [
  { href: '/admin', label: 'Yleiskatsaus', exact: true, icon: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10' },
  { href: '/admin/articles', label: 'Artikkelit', icon: 'M4 5h16M4 12h16M4 19h10' },
  { href: '/admin/leads', label: 'Yhteydenotot', icon: 'M3 8l9 6 9-6M3 6h18v12H3z' },
  { href: '/admin/analytics', label: 'Analytics', icon: 'M3 3v18h18M7 16l4-4 4 4 4-8' },
  { href: '/admin/search-console', label: 'Hakukonsoli', icon: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' },
]

function NavIcon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

export default function AdminSidebar({ user }: { user: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function isActive(item: (typeof NAV)[number]) {
    return item.exact ? pathname === item.href : pathname.startsWith(item.href)
  }

  async function logout() {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
    router.refresh()
  }

  const navLinks = NAV.map(item => (
    <Link
      key={item.href}
      href={item.href}
      className={`adm-nav-link${isActive(item) ? ' active' : ''}`}
    >
      <NavIcon d={item.icon} />
      {item.label}
    </Link>
  ))

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="adm-sidebar">
        <div className="adm-brand">
          <span className="adm-brand-logo">Zevu</span>
          <span className="adm-brand-tag">Admin</span>
        </div>
        <nav className="adm-nav">{navLinks}</nav>
        <div className="adm-sidebar-foot">
          <Link href="/" target="_blank" className="adm-nav-link adm-nav-link--muted">
            <NavIcon d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" />
            Avaa sivusto
          </Link>
          <div className="adm-user" title={user}>{user}</div>
          <button type="button" className="adm-logout" onClick={logout} disabled={loggingOut}>
            {loggingOut ? 'Kirjaudutaan ulos…' : 'Kirjaudu ulos'}
          </button>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <header className="adm-topbar">
        <div className="adm-topbar-brand">
          <span className="adm-brand-logo">Zevu</span>
          <span className="adm-brand-tag">Admin</span>
        </div>
        <button
          className="adm-burger"
          aria-label="Avaa valikko"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div className="adm-drawer-overlay" onClick={() => setMobileOpen(false)} />
      )}
      <div className={`adm-drawer${mobileOpen ? ' adm-drawer--open' : ''}`}>
        <div className="adm-drawer-head">
          <div className="adm-brand">
            <span className="adm-brand-logo">Zevu</span>
            <span className="adm-brand-tag">Admin</span>
          </div>
          <button className="adm-drawer-close" aria-label="Sulje valikko" onClick={() => setMobileOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="adm-nav adm-nav--drawer">{navLinks}</nav>
        <div className="adm-sidebar-foot adm-sidebar-foot--drawer">
          <Link href="/" target="_blank" className="adm-nav-link adm-nav-link--muted" onClick={() => setMobileOpen(false)}>
            <NavIcon d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" />
            Avaa sivusto
          </Link>
          <div className="adm-user">{user}</div>
          <button type="button" className="adm-logout" onClick={logout} disabled={loggingOut}>
            {loggingOut ? 'Kirjaudutaan ulos…' : 'Kirjaudu ulos'}
          </button>
        </div>
      </div>
    </>
  )
}
