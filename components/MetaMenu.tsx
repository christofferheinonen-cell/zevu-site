'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '@/lib/services'
import { SERVICE_ICONS, META_SHIELD } from './serviceIcons'

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
            <div className="nav-dd-head-icon">{META_SHIELD}</div>
            <div>
              <div className="nav-dd-head-title">Meta-mainonta</div>
              <div className="nav-dd-head-sub">Kaikki mitä teemme Metan parissa — yhdessä paikassa.</div>
            </div>
          </div>
          <div className="nav-dd-grid">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/${s.slug}`} className="nav-dd-item" onClick={() => setOpen(false)}>
                <div className="nav-dd-item-icon">{SERVICE_ICONS[s.slug]}</div>
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
