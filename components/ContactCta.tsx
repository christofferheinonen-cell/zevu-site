'use client'
import { useRef, useState } from 'react'
import RevealWrapper from './RevealWrapper'

export default function ContactCta() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta-section" id="ota-yhteytta">
      <div className="cta-inner">
        <div className="wrap">
          <div className="cta-grid">
            {/* Copy */}
            <RevealWrapper>
              <div className="cta-copy">
                <div className="eyebrow"><span className="eyebrow-dot" />Otetaan yhteyttä</div>
                <h2 className="section-h">Aloitetaan projekti<br />yhdessä</h2>
                <p className="section-sub">
                  Kerro lyhyesti yrityksestäsi ja tavoitteistasi. Palaamme sinulle
                  yhden arkipäivän sisällä ilmaisella alkukartoituksella.
                </p>
                <div className="cta-trust" style={{ marginTop: 32 }}>
                  <div className="cta-trust-row">
                    <span className="cta-trust-icon">✅</span>
                    Ilmainen alkukartoitus — ei sitoumuksia
                  </div>
                  <div className="cta-trust-row">
                    <span className="cta-trust-icon">⚡</span>
                    Vastaus yhden arkipäivän sisällä
                  </div>
                  <div className="cta-trust-row">
                    <span className="cta-trust-icon">🇫🇮</span>
                    Suomalainen tiimi, suomenkielistä palvelua
                  </div>
                  <div className="cta-trust-row">
                    <span className="cta-trust-icon">🔒</span>
                    Tietosi pysyvät turvassa — ei myydä eteenpäin
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Form */}
            <RevealWrapper delay={1}>
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label">Nimi *</label>
                    <input name="name" className="cf-input" type="text" placeholder="Matti Meikäläinen" required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">Sähköposti *</label>
                    <input name="email" className="cf-input" type="email" placeholder="matti@yritys.fi" required />
                  </div>
                </div>
                <div className="cf-field">
                  <label className="cf-label">Yritys</label>
                  <input name="company" className="cf-input" type="text" placeholder="Yritys Oy" />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Mitä tarvitset? *</label>
                  <textarea
                    name="message" className="cf-textarea"
                    placeholder="Kerro lyhyesti: mitä yritys tekee, mitä haet sivustolta, onko jo olemassa oleva sivu?"
                    required
                  />
                </div>

                {status === 'success' ? (
                  <div className="cf-success show">
                    Kiitos yhteydenotostasi! 🎉 Palaamme sinulle yhden arkipäivän sisällä.
                  </div>
                ) : (
                  <>
                    <button type="submit" className="cf-submit" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Lähetetään…' : 'Lähetä viesti →'}
                    </button>
                    <p className="cf-note">Ei roskapostia. Vain projektistasi kiinnostuneet ihmiset.</p>
                    {status === 'error' && (
                      <p style={{ textAlign: 'center', fontSize: 13, color: '#FCA5A5', marginTop: 8 }}>
                        Jokin meni pieleen. Kokeile uudelleen tai kirjoita meille suoraan.
                      </p>
                    )}
                  </>
                )}
              </form>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
