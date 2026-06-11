'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '@/lib/services'

const ICONS: Record<string, React.ReactNode> = {
  'meta-ads-manager': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  'mainokset': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  'raportointi': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" /><rect x="5" y="11" width="3.5" height="7" rx="1" /><rect x="10.25" y="7" width="3.5" height="11" rx="1" /><rect x="15.5" y="4" width="3.5" height="14" rx="1" />
    </svg>
  ),
  'pikseli': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" /><path d="M12 1v3M12 20v3M23 12h-3M4 12H1" />
    </svg>
  ),
}

export default function MetaMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setOpen(false) }, [pathname])

  function show() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  function hide() {
    closeTimer.current = setTimeout(() => setOpen(false), 80)
  }

  const isActive = SERVICES.some(s => pathname === `/${s.slug}`)

  return (
    <div className="nav-dd" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        className={`nav-link nav-dd-trigger${isActive ? ' active' : ''}${open ? ' open' : ''}`}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        Meta
        <svg className="nav-dd-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </button>

      <div className={`nav-dd-wrap${open ? ' open' : ''}`}>
        <div className="nav-dd-panel">
          <div className="nav-dd-head">
            <div className="nav-dd-head-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" /><path d="m9 12 2 2 4-4" /></svg>
            </div>
            <div>
              <div className="nav-dd-head-title">Meta-mainonta</div>
              <div className="nav-dd-head-sub">Kaikki mitä teemme Metan parissa — yhdessä paikassa.</div>
            </div>
          </div>
          <div className="nav-dd-grid">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/${s.slug}`} className="nav-dd-item" onClick={() => setOpen(false)}>
                <div className="nav-dd-item-icon">{ICONS[s.slug]}</div>
                <div>
                  <div className="nav-dd-item-title">{s.navLabel}</div>
                  <div className="nav-dd-item-desc">{s.navDesc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
