'use client'
import { useState } from 'react'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const FAQS = [
  {
    q: 'Minkälaisille yrityksille Zevu sopii?',
    a: 'Zevu sopii suomalaisille pk-yrityksille, jotka haluavat saada enemmän irti Meta-mainonnasta. Toimimme erityisesti ravintola-, hyvinvointi-, kiinteistö- ja remonttialoilla.'
  },
  {
    q: 'Kuinka nopeasti näen tuloksia?',
    a: 'Ensimmäiset mainokset julkaistaan yleensä 1–2 viikon sisällä aloituksesta. Merkittäviä tuloksia nähdään tyypillisesti 4–6 viikon optimoinnin jälkeen.'
  },
  {
    q: 'Mitä ilmainen mainosanalyysi sisältää?',
    a: 'Käymme läpi nykyiset mainoksesi ja kerromme konkreettisesti, miksi ne eivät tuota toivottuja tuloksia. Saat selkeän arvion siitä, mitä kannattaa tehdä toisin — ilman sitoumuksia.'
  },
  {
    q: 'Tarvitsenko itse tehdä jotain?',
    a: 'Minimaalisen panoksen tarvitset: kerrot bisneksestäsi ja toimitat tarvittavat materiaalit. Me hoidamme kaiken suunnittelusta julkaisuun ja optimointiin.'
  }
]

export default function FaqAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <div className="wrap" id="faq">
      <RevealWrapper className="section">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">FAQ</div>
            <div className="section-h">Kysymyksiä?<br />Meillä on vastaukset.</div>
            <p className="section-sub" style={{ marginTop: '16px' }}>Etkö löydä vastausta? Ota yhteyttä suoraan.</p>
            <Link href="/#cta" className="btn-dark" style={{ marginTop: '28px', display: 'inline-flex' }}>Ota yhteyttä →</Link>
          </div>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq-q">
                  {faq.q}
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
