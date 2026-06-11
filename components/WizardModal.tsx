'use client'
import { useEffect } from 'react'
import WizardForm from './WizardForm'

export default function WizardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="cta-modal-overlay" onClick={onClose}>
      <div className="cta-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="cta-modal-close" onClick={onClose} aria-label="Sulje">×</button>
        <WizardForm compact />
      </div>
    </div>
  )
}
