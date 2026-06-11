'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import WizardForm from './WizardForm'

export default function WizardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

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

  if (!open || !mounted) return null

  return createPortal(
    <div className="cta-modal-overlay" onClick={onClose}>
      <div className="cta-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="cta-modal-close" onClick={onClose} aria-label="Sulje">×</button>
        <WizardForm compact />
      </div>
    </div>,
    document.body,
  )
}
