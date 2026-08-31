'use client'
import { useState } from 'react'
import RevealWrapper from './RevealWrapper'

const FAQS = [
  {
    q: 'Kuinka kauan projekti kestää?',
    a: 'Tyypillinen verkkosivuprojekti valmistuu 3–5 viikossa. Laajemmat projektit, kuten verkkokaupat, voivat kestää 6–8 viikkoa. Saat tarkan aikataulun heti projektin alussa.',
  },
  {
    q: 'Mitä projekti maksaa kokonaisuudessaan?',
    a: 'Hinnat alkavat 1 490 eurosta. Tarkat hinnat löytyvät hinnoittelusivulta. Saat tarjouksen aina ennen projektin aloittamista — ei yllätyksiä laskussa.',
  },
  {
    q: 'Voinko päivittää sivustoa itse?',
    a: 'Kyllä! Kasvu- ja Pro-paketeissa rakennamme helppokäyttöisen sisällönhallintajärjestelmän (CMS), jolla voit itse lisätä tekstejä, kuvia ja blogijulkaisuja ilman teknistä osaamista.',
  },
  {
    q: 'Mitä tapahtuu projektin jälkeen?',
    a: 'Kaikki paketit sisältävät ilmaisen tuen ensimmäisten viikkojen ajan. Jatkuva ylläpitosopimus on saatavilla alkaen 79 €/kk — se kattaa päivitykset, tietoturvan ja teknisen tuen.',
  },
  {
    q: 'Onko minulla oltava sisältö valmiina?',
    a: 'Ei tarvitse. Autamme sinua tekstien suunnittelussa ja voimme kirjoittaa sivuston sisällön myös puolestasi lisämaksusta. Tarvitset vain perustiedot yrityksestäsi.',
  },
  {
    q: 'Näkyykö sivustoni Googlessa?',
    a: 'Kaikki sivustomme rakennetaan hakukoneoptimointia silmällä pitäen. Kasvu- ja Pro-paketeissa tehdään kattava SEO-työ, joka parantaa näkyvyyttäsi ajan myötä.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <RevealWrapper>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" />FAQ</div>
              <h2 className="section-h">Usein kysytyt<br />kysymykset</h2>
              <p className="section-sub">
                Ei löydy vastausta? Kirjoita meille ja vastataan mielellään.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={1}>
            <div>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item${open === i ? ' open' : ''}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="faq-q">
                    <span>{faq.q}</span>
                    <span className="faq-icon" />
                  </div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
