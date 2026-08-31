import RevealWrapper from './RevealWrapper'

const TESTIMONIALS = [
  {
    quote: 'Zevu teki meille täsmälleen sellaisen sivuston kuin halusimme. Prosessi oli selkeä ja toimitus aikataulussa. Asiakkaita on tullut sivuston kautta jo ensimmäisenä kuukautena!',
    name: 'Tiina Heikkinen',
    company: 'Kahvila Aroma, Tampere',
    initials: 'TH',
    avatarClass: 'ta-purple',
  },
  {
    quote: 'Olen yrittänyt tehdä itse sivuja vuosia — turha stressi. Zevun kanssa sain ammattimaisen lopputuloksen kolmessa viikossa. Suosittelen lämpimästi.',
    name: 'Markku Virtanen',
    company: 'Putkipalvelu Virtanen Ky, Oulu',
    initials: 'MV',
    avatarClass: 'ta-green',
  },
  {
    quote: 'Uusi sivusto nosti meidät Googlen hakutuloksissa kolmeen kuukauteen. Yhteydenottoja on tullut huomattavasti enemmän ja laatu on parantunut.',
    name: 'Laura Mäkinen',
    company: 'Lakitalo Mäkinen, Helsinki',
    initials: 'LM',
    avatarClass: 'ta-blue',
  },
]

const STARS = Array.from({ length: 5 }, (_, i) => i)

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="testimonials-intro">
            <div className="eyebrow"><span className="eyebrow-dot" />Asiakaskokemukset</div>
            <h2 className="section-h">Mitä asiakkaamme sanovat</h2>
            <p className="section-sub">
              Olemme auttaneet yli 50 suomalaista yritystä rakentamaan verkkoläsnäolonsa.
            </p>
          </div>
        </RevealWrapper>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <RevealWrapper key={t.name} delay={i as 0 | 1 | 2}>
              <div className="testi-card">
                <div className="testi-stars">
                  {STARS.map(s => <span key={s} className="testi-star">★</span>)}
                </div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className={`testi-avatar ${t.avatarClass}`}>{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-company">{t.company}</div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
