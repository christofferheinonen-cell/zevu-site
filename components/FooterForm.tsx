'use client'
import { useState } from 'react'

export default function FooterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [err, setErr] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr(true)
      return
    }
    setErr(false)
    if (typeof window !== 'undefined' && typeof (window as Window & { gtag?: Function }).gtag === 'function') {
      ;(window as Window & { gtag: Function }).gtag('event', 'generate_lead', {
        event_category: 'lead',
        event_label: 'footer_form',
      })
    }
    setSubmitted(true)
  }

  if (submitted) {
    return <div className="form-success show">✓ Kiitos! Olemme yhteydessä pian.</div>
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit} noValidate>
      <div className={`field${err ? ' has-err' : ''}`}>
        <label>Sähköposti</label>
        <input
          type="email"
          placeholder="sinä@yritys.fi"
          value={email}
          onChange={e => { setEmail(e.target.value); setErr(false) }}
        />
        <div className="field-err">Anna kelvollinen sähköpostiosoite.</div>
      </div>
      <button type="submit" className="submit-btn">Lähetä →</button>
    </form>
  )
}
