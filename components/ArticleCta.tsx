'use client'
import { useEffect, useState } from 'react'
import WizardForm from './WizardForm'

export default function ArticleCta() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <aside className="single-sidebar">
        <div className="single-cta-card">
          <div className="single-cta-card-inner">
            <h3>Haluatko parempia tuloksia Meta-mainonnalla?</h3>
            <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
            <button type="button" className="btn-dark single-cta-card-btn" onClick={() => setOpen(true)}>
              Pyydä analyysi →
            </button>
          </div>
        </div>
      </aside>

      <div className="single-cta-pill">
        <span>Haluatko parempia tuloksia?</span>
        <button type="button" className="single-cta-pill-btn" onClick={() => setOpen(true)}>
          Pyydä analyysi →
        </button>
      </div>

      {open && (
        <div className="cta-modal-overlay" onClick={() => setOpen(false)}>
          <div className="cta-modal" onClick={e => e.stopPropagation()}>
            <button type="button" className="cta-modal-close" onClick={() => setOpen(false)} aria-label="Sulje">×</button>
            <WizardForm compact />
          </div>
        </div>
      )}
    </>
  )
}
