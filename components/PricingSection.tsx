import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const PLANS = [
  {
    name: 'Startti',
    price: '1 490',
    period: 'kertamaksu',
    desc: 'Ammattimainen verkkosivusto pienyrittäjälle tai toiminimelle.',
    features: [
      '1–3 sivua',
      'Mobiiliresponsiivinen',
      'Yhteydenottolomake',
      'Perus-SEO',
      'Nopeusoptimointi',
      '30 pv ilmainen tuki',
    ],
    cta: 'Aloita projekti',
    href: '/#ota-yhteytta',
    popular: false,
  },
  {
    name: 'Kasvu',
    price: '2 990',
    period: 'kertamaksu',
    desc: 'Täysimittainen sivusto kasvavalle yritykselle sisällönhallinnalla.',
    features: [
      '5–10 sivua',
      'CMS — päivitä itse sisältö',
      'Blogi tai uutiset',
      'Edistynyt SEO',
      'Google Analytics',
      'Yhteydenotto + chatbot',
      '60 pv ilmainen tuki',
    ],
    cta: 'Aloita projekti',
    href: '/#ota-yhteytta',
    popular: true,
  },
  {
    name: 'Pro',
    price: null,
    period: 'räätälöity',
    desc: 'Verkkokauppa, integraatiot tai suurempi kokonaisuus — sovitaan yhdessä.',
    features: [
      'Verkkokauppa / e-commerce',
      'Varaus- tai ajanvarausjärjestelmä',
      'Räätälöidyt integraatiot',
      'Monisivuinen portaali',
      'Tekninen arkkitehtuuri',
      'Jatkuva ylläpitosopimus',
    ],
    cta: 'Kysy tarjous',
    href: '/#ota-yhteytta',
    popular: false,
  },
]

const CHECK = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function PricingSection() {
  return (
    <section className="pricing-section" id="hinnat">
      <div className="wrap">
        <RevealWrapper>
          <div className="pricing-intro">
            <div className="section-badge">005/ Hinnat</div>
            <h2 className="section-h">Selkeät hinnat,<br />ei yllätyksiä</h2>
            <p className="section-sub">
              Kiinteät hinnat projekteille. Tiedät tarkalleen mitä maksat ja mitä saat.
            </p>
          </div>
        </RevealWrapper>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <RevealWrapper key={plan.name} delay={i as 0 | 1 | 2}>
              <div className={`price-card${plan.popular ? ' popular' : ''}`}>
                {plan.popular && <div className="price-popular-badge">Suosituin</div>}
                <div className="price-glow" />
                <div className="price-name">{plan.name}</div>

                {plan.price ? (
                  <div className="price-amount">
                    <sup>€</sup>{plan.price}
                  </div>
                ) : (
                  <div className="price-amount">
                    <span className="from-label">Alkaen</span>
                  </div>
                )}

                <div className="price-period">{plan.period}</div>
                <div className="price-desc">{plan.desc}</div>

                <ul className="price-features">
                  {plan.features.map(f => (
                    <li key={f}>
                      <span className="price-check">{CHECK}</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="price-cta">{plan.cta} →</Link>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <p className="pricing-note">
          Kaikki hinnat sisältävät ALV 0 %. Ylläpito alkaen 79 €/kk.
        </p>
      </div>
    </section>
  )
}
