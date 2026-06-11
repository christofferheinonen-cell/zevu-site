'use client'
import { useState } from 'react'
import WizardModal from './WizardModal'

export default function CtaButton({ label, className = 'btn-dark' }: { label: string; className?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>{label}</button>
      <WizardModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
