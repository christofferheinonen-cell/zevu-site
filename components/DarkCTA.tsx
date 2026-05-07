'use client'
import { useState, useRef } from 'react'
import RevealWrapper from './RevealWrapper'

export default function DarkCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const companyRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, boolean> = {}
    if (!nameRef.current?.value.trim()) errs.name = true
    const email = emailRef.current?.value.trim() ?? ''
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = true
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setTimeout(() => setSubmitted(true), 600)
  }

  return (
    <div className="dark-section" id="cta">
      <div className="wrap">
        <RevealWrapper className="section dark-inner">
          <div className="cta-grid">
            <div>
              <div className="eyebrow">Aloitetaan</div>
              <div className="section-h">Selvitetään miksi mainoksesi eivät toimi.</div>
              <p className="section-sub">Ilmainen analyysi. Ei sitoumuksia. Vain rehellinen arvio siitä, mitä kannattaa tehdä toisin.</p>
            </div>
            <div className="cta-form">
              {submitted ? (
                <div className="form-success show">✓ Kiitos! Vastaamme 24 tunnin sisällä.</div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className={`field${errors.name ? ' has-err' : ''}`}>
                    <label>Nimi</label>
                    <input ref={nameRef} type="text" placeholder="Etu- ja sukunimi" onChange={() => setErrors(e => ({ ...e, name: false }))} />
                    <div className="field-err">Anna nimesi.</div>
                  </div>
                  <div className={`field${errors.email ? ' has-err' : ''}`}>
                    <label>Sähköposti</label>
                    <input ref={emailRef} type="email" placeholder="sinä@yritys.fi" onChange={() => setErrors(e => ({ ...e, email: false }))} />
                    <div className="field-err">Anna kelvollinen sähköpostiosoite.</div>
                  </div>
                  <div className="field">
                    <label>Yritys</label>
                    <input ref={companyRef} type="text" placeholder="Yrityksesi nimi" />
                  </div>
                  <button type="submit" className="submit-btn">Pyydä ilmainen analyysi →</button>
                  <p className="form-note">Vastaamme 24 tunnin sisällä.</p>
                </form>
              )}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
