'use client'
import { useState } from 'react'
import WizardModal from './WizardModal'

export default function ArticleCta() {
  const [open, setOpen] = useState(false)

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

      <WizardModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
