'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button type="button" className="nav-burger" aria-label="Valikko" onClick={() => setOpen(true)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && mounted && createPortal(
        <div className="m-menu">
          <div className="m-menu-top">
            <span className="m-menu-logo">Zevu</span>
            <button type="button" className="m-menu-icon-btn m-menu-close" aria-label="Sulje" onClick={() => setOpen(false)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="m-menu-body">
            <div className="m-menu-slide">
              <Link href="/#palvelut" className="m-menu-row" onClick={() => setOpen(false)}>Palvelut</Link>
              <Link href="/#referenssit" className="m-menu-row" onClick={() => setOpen(false)}>Referenssit</Link>
              <Link href="/#hinnat" className="m-menu-row" onClick={() => setOpen(false)}>Hinnat</Link>
              <Link href="/#faq" className="m-menu-row" onClick={() => setOpen(false)}>FAQ</Link>
            </div>
          </div>
          <div className="m-menu-foot">
            <Link href="/#ota-yhteytta" className="m-menu-cta" onClick={() => setOpen(false)}>Aloita projekti →</Link>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
