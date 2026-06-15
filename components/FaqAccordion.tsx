'use client'
import { useState } from 'react'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'
import { HOME_FAQS as FAQS } from '@/lib/faq'

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
                  <div className="faq-icon" />
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
