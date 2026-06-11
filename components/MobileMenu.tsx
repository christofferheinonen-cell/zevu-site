'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { SERVICES } from '@/lib/services'
import { SERVICE_ICONS, META_SHIELD } from './serviceIcons'
import WizardModal from './WizardModal'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<'root' | 'meta'>('root')
  const [cta, setCta] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])
  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  function close() { setOpen(false); setView('root') }
  function openCta() { setOpen(false); setView('root'); setCta(true) }

  const chevron = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  )

  return (
    <>
      <button type="button" className="nav-burger" aria-label="Valikko" onClick={() => setOpen(true)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
      </button>

      {open && mounted && createPortal(
        <div className="m-menu">
          <div className="m-menu-top">
            {view === 'meta' ? (
              <>
                <button type="button" className="m-menu-icon-btn" aria-label="Takaisin" onClick={() => setView('root')}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <span className="m-menu-title">Meta</span>
              </>
            ) : (
              <span className="m-menu-logo">Zevu</span>
            )}
            <button type="button" className="m-menu-icon-btn m-menu-close" aria-label="Sulje" onClick={close}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="m-menu-body" key={view}>
            {view === 'root' ? (
              <div className="m-menu-slide">
                <button type="button" className="m-menu-row" onClick={() => setView('meta')}>
                  <span>Meta</span>{chevron}
                </button>
                <Link href="/blog" className="m-menu-row">Blogi</Link>
                <Link href="/#faq" className="m-menu-row" onClick={close}>FAQ</Link>
              </div>
            ) : (
              <div className="m-menu-slide">
                <div className="m-menu-head">
                  <div className="m-menu-head-icon">{META_SHIELD}</div>
                  <div>
                    <div className="m-menu-head-title">Meta-mainonta</div>
                    <div className="m-menu-head-sub">Kaikki mitä teemme Metan parissa — yhdessä paikassa.</div>
                  </div>
                </div>
                <div className="m-menu-items">
                  {SERVICES.map(s => (
                    <Link key={s.slug} href={`/${s.slug}`} className="m-menu-item" onClick={close}>
                      <div className="m-menu-item-icon">{SERVICE_ICONS[s.slug]}</div>
                      <div>
                        <div className="m-menu-item-title">{s.navLabel}</div>
                        <div className="m-menu-item-desc">{s.navDesc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="m-menu-foot">
            <button type="button" className="m-menu-cta" onClick={openCta}>Pyydä analyysi →</button>
          </div>
        </div>,
        document.body,
      )}

      <WizardModal open={cta} onClose={() => setCta(false)} />
    </>
  )
}
