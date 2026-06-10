'use client'
import { useState } from 'react'

type Data = {
  company: string
  industry: string
  runsAds: 'yes' | 'no' | null
  budget: string
  satisfaction: number | null
  name: string
  email: string
  phone: string
}

const BUDGETS = ['alle 500 €', '500–2 000 €', '2 000–5 000 €', '5 000+ €']

export default function WizardForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1)
  const [dir, setDir] = useState<'next' | 'back'>('next')
  const [data, setData] = useState<Data>({
    company: '', industry: '', runsAds: null,
    budget: '', satisfaction: null,
    name: '', email: '', phone: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  function set<K extends keyof Data>(k: K, v: Data[K]) {
    setData(d => ({ ...d, [k]: v }))
    setErrors(e => ({ ...e, [k]: false }))
  }

  function goNext() {
    const errs: Record<string, boolean> = {}
    if (step === 1 && !data.company.trim()) errs.company = true
    if (step === 2 && !data.runsAds) errs.runsAds = true
    setErrors(errs)
    if (Object.keys(errs).length) return
    setDir('next')
    setStep(s => s + 1)
  }

  function goBack() {
    setDir('back')
    setStep(s => s - 1)
  }

  function handleSubmit() {
    const errs: Record<string, boolean> = {}
    if (!data.name.trim()) errs.name = true
    if (!data.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errs.email = true
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSubmitted(true)
  }

  const stepLabels = ['Yritys', 'Mainonta', 'Yhteystiedot']

  return (
    <div className="wizard-wrap">
      <div className={`wizard-header${compact ? ' wizard-header--compact' : ''}`}>
        {!compact && <div className="eyebrow">Aloitetaan</div>}
        <div className="section-h">Selvitetään miksi mainoksesi eivät toimi.</div>
        <p className="section-sub">Ilmainen analyysi. Ei sitoumuksia. Vain rehellinen arvio.</p>
      </div>

      {submitted ? (
        <div className="wizard-card wizard-success">
          <div className="wizard-success-icon">✓</div>
          <div className="wizard-success-title">Kiitos, {data.name.split(' ')[0]}!</div>
          <p>Olemme yhteydessä osoitteeseen <strong>{data.email}</strong> 24 tunnin sisällä.</p>
        </div>
      ) : (
        <div className="wizard-card">
          {/* Progress */}
          <div className="wizard-steps">
            <div className="wizard-steps-track">
              <div className="wizard-steps-fill" style={{ width: `${((step - 1) / 2) * 100}%` }} />
            </div>
            {stepLabels.map((label, i) => {
              const n = i + 1
              return (
                <div key={n} className={`wstep${step === n ? ' active' : ''}${step > n ? ' done' : ''}`}>
                  <div className="wstep-dot">{step > n ? '✓' : n}</div>
                  <div className="wstep-label">{label}</div>
                </div>
              )
            })}
          </div>

          {/* Slide */}
          <div className={`wizard-slide wslide-${dir}`} key={step}>
            {step === 1 && (
              <div className="wizard-fields">
                <div className={`wfield${errors.company ? ' err' : ''}`}>
                  <label>Yrityksen nimi <span className="req">*</span></label>
                  <input autoFocus={compact} type="text" placeholder="Esim. Acme Oy"
                    value={data.company} onChange={e => set('company', e.target.value)} />
                  <div className="wfield-err">Anna yrityksen nimi.</div>
                </div>
                <div className="wfield">
                  <label>Toimiala / mitä teette <span className="opt">vapaaehtoinen</span></label>
                  <input type="text" placeholder="Esim. verkkokauppa, palvelut, SaaS…"
                    value={data.industry} onChange={e => set('industry', e.target.value)} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="wizard-fields">
                <div className={`wfield${errors.runsAds ? ' err' : ''}`}>
                  <label>Pyörittekö tällä hetkellä Meta-mainoksia? <span className="req">*</span></label>
                  <div className="wchoices">
                    {(['yes', 'no'] as const).map(v => (
                      <button key={v} type="button"
                        className={`wchoice${data.runsAds === v ? ' selected' : ''}`}
                        onClick={() => {
                          set('runsAds', v)
                          if (v === 'no') setData(d => ({ ...d, runsAds: 'no', budget: '', satisfaction: null }))
                        }}>
                        {v === 'yes' ? 'Kyllä' : 'Ei'}
                      </button>
                    ))}
                  </div>
                  <div className="wfield-err">Valitse vaihtoehto.</div>
                </div>

                {data.runsAds === 'yes' && (
                  <>
                    <div className="wfield">
                      <label>Kuukausittainen mainosbudjetti <span className="opt">vapaaehtoinen</span></label>
                      <div className="wchoices wchoices--wrap">
                        {BUDGETS.map(v => (
                          <button key={v} type="button"
                            className={`wchoice${data.budget === v ? ' selected' : ''}`}
                            onClick={() => set('budget', data.budget === v ? '' : v)}>
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="wfield">
                      <label>Tyytyväisyys nykyisiin tuloksiin <span className="opt">1–5, vapaaehtoinen</span></label>
                      <div className="wrating">
                        {[1, 2, 3, 4, 5].map(n => (
                          <button key={n} type="button"
                            className={`wrating-btn${data.satisfaction === n ? ' selected' : ''}`}
                            onClick={() => set('satisfaction', data.satisfaction === n ? null : n)}>
                            {n}
                          </button>
                        ))}
                      </div>
                      <div className="wrating-labels">
                        <span>Erittäin tyytymätön</span>
                        <span>Erittäin tyytyväinen</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="wizard-fields">
                <div className={`wfield${errors.name ? ' err' : ''}`}>
                  <label>Nimi <span className="req">*</span></label>
                  <input autoFocus type="text" placeholder="Etu- ja sukunimi"
                    value={data.name} onChange={e => set('name', e.target.value)} />
                  <div className="wfield-err">Anna nimesi.</div>
                </div>
                <div className={`wfield${errors.email ? ' err' : ''}`}>
                  <label>Sähköposti <span className="req">*</span></label>
                  <input type="email" placeholder="sinä@yritys.fi"
                    value={data.email} onChange={e => set('email', e.target.value)} />
                  <div className="wfield-err">Anna kelvollinen sähköpostiosoite.</div>
                </div>
                <div className="wfield">
                  <label>Puhelinnumero <span className="opt">vapaaehtoinen</span></label>
                  <input type="tel" placeholder="+358 40 123 4567"
                    value={data.phone} onChange={e => set('phone', e.target.value)} />
                </div>
              </div>
            )}
          </div>

          {/* Nav */}
          <div className="wizard-nav">
            {step > 1
              ? <button type="button" className="wizard-back" onClick={goBack}>← Takaisin</button>
              : <div />
            }
            {step < 3
              ? <button type="button" className="wizard-next" onClick={goNext}>Seuraava →</button>
              : <button type="button" className="wizard-next" onClick={handleSubmit}>Pyydä analyysi →</button>
            }
          </div>
        </div>
      )}
    </div>
  )
}
