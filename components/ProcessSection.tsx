'use client'
import { useState } from 'react'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const STEPS = [
  {
    period: 'Päivä 1–2',
    title: 'Kartoitus',
    desc: 'Tutustumme liiketoimintaasi, tavoitteisiisi ja kilpailijoihin. Alkukartoitus on maksuton — ei sitoumuksia.',
    bullets: ['Ilmainen alkukeskustelu', 'Tavoitteet ja kohderyhmä', 'Aikataulu ja budjetti'],
    duration: '2 pv',
  },
  {
    period: 'Päivä 3–5',
    title: 'Suunnittelu',
    desc: 'Luomme visuaalisen suunnitelman ja wireframet. Hyväksyt ennen kuin koodia kirjoitetaan riviäkään.',
    bullets: ['Sivustorakenne ja kartta', 'Visuaaliset luonnokset', 'Brändi ja typografia'],
    duration: '3 pv',
  },
  {
    period: 'Päivä 6–10',
    title: 'Kehitys',
    desc: 'Rakennamme sivuston nopeasti. Näet edistymisen reaaliajassa ja palautteesi otetaan huomioon välittömästi.',
    bullets: ['Next.js + mobiiliresponsiivisuus', 'SEO ja latausnopeus', 'CMS sisällönhallintaan'],
    duration: '5 pv',
  },
  {
    period: 'Päivä 11–14',
    title: 'Julkaisu',
    desc: 'Sivusto testataan, julkaistaan ja opit hallitsemaan sitä itse. Olemme tukenasi vielä pitkään.',
    bullets: ['Käyttöönotto ja koulutus', 'Analytics ja seuranta', '30 pv ilmainen tuki'],
    duration: '4 pv',
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <section className="proc-section" id="prosessi">
      <div className="wrap">
        <RevealWrapper>
          <div className="proc-intro">
            <div className="section-badge">002/ Prosessi</div>
            <h2 className="proc-heading">Ideasta valmiiseen<br />sivustoon kahdessa viikossa.</h2>
            <p className="proc-sub">Selkeä prosessi, selkeät aikataulut. Tiedät aina missä mennään.</p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div>
            <div className="proc-tabs">
              {STEPS.map((s, i) => (
                <button
                  key={s.title}
                  className={`proc-tab${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="proc-tab-period">{s.period}</span>
                  <span className="proc-tab-label">{s.title}</span>
                </button>
              ))}
            </div>

            <div className="proc-panel">
              <div>
                <div className="proc-panel-period">{step.period}</div>
                <div className="proc-panel-title">{step.title}</div>
                <div className="proc-panel-desc">{step.desc}</div>
                <ul className="proc-bullets">
                  {step.bullets.map(b => (
                    <li key={b} className="proc-bullet">{b}</li>
                  ))}
                </ul>
              </div>
              <div className="proc-sidebar">
                <div className="proc-duration-card">
                  <div className="proc-duration-num">{step.duration}</div>
                  <div className="proc-duration-label">Vaiheen kesto</div>
                </div>
                <div className="proc-total-card">
                  <div className="proc-total-badge">Kokonaiskesto</div>
                  <div className="proc-total-value">2 viikkoa</div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <div className="proc-cta">
          <Link href="/#ota-yhteytta" className="btn-accent" style={{ marginTop: 0 }}>
            Aloita projekti →
          </Link>
        </div>
      </div>
    </section>
  )
}
