import RevealWrapper from './RevealWrapper'

const SERVICES = [
  {
    id: 'design',
    visualClass: 'sv-design',
    iconClass: 'svc-icon-purple',
    icon: '🎨',
    title: 'Verkkosivusuunnittelu',
    desc: 'Räätälöidyt, modernit verkkosivut, jotka heijastavat brändiäsi ja houkuttelevat oikeat asiakkaat.',
    visual: (
      <div className="svc-design-mock">
        <div className="sdm-top" />
        <div className="sdm-body">
          <div className="sdm-row sdm-accent" />
          <div className="sdm-row" style={{ width: '80%' }} />
          <div className="sdm-row" style={{ width: '60%' }} />
          <div className="sdm-grid">
            <div className="sdm-block sdm-block-accent" />
            <div className="sdm-block" />
            <div className="sdm-block" />
            <div className="sdm-block sdm-block-accent" style={{ opacity: .6 }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'dev',
    visualClass: 'sv-dev',
    iconClass: 'svc-icon-blue',
    icon: '💻',
    title: 'Tekninen kehitys',
    desc: 'Nopeat, hakukoneoptimoidut sivut jotka toimivat moitteettomasti kaikilla laitteilla.',
    visual: (
      <div className="svc-code-mock">
        <div className="scm-top">
          <span className="scm-dot" /><span className="scm-dot" /><span className="scm-dot" />
        </div>
        <div className="scm-body">
          <div className="scm-line"><span className="scm-key">const</span> <span className="scm-fn">sivu</span> = {'{'}</div>
          <div className="scm-line">&nbsp;&nbsp;nimi: <span className="scm-str">&ldquo;Yritys&rdquo;</span>,</div>
          <div className="scm-line">&nbsp;&nbsp;nopeus: <span className="scm-num">100</span>,</div>
          <div className="scm-line">&nbsp;&nbsp;seo: <span className="scm-str">&ldquo;A+&rdquo;</span></div>
          <div className="scm-line">{'}'}</div>
        </div>
      </div>
    ),
  },
  {
    id: 'seo',
    visualClass: 'sv-seo',
    iconClass: 'svc-icon-green',
    icon: '📈',
    title: 'Hakukoneoptimointi',
    desc: 'Löydettävyys Googlesta oikeilla hakusanoilla. Enemmän kävijöitä, enemmän asiakkaita.',
    visual: (
      <div className="svc-chart-mock">
        <div className="schart-label">Google-näkyvyys</div>
        <div className="schart-val">+312%</div>
        <div className="schart-bars">
          <div className="schart-bar scb-lo" style={{ height: '25%' }} />
          <div className="schart-bar scb-lo" style={{ height: '35%' }} />
          <div className="schart-bar scb-mid" style={{ height: '45%' }} />
          <div className="schart-bar scb-mid" style={{ height: '55%' }} />
          <div className="schart-bar scb-hi" style={{ height: '70%' }} />
          <div className="schart-bar scb-hi" style={{ height: '80%' }} />
          <div className="schart-bar scb-peak" style={{ height: '100%' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'brand',
    visualClass: 'sv-brand',
    iconClass: 'svc-icon-orange',
    icon: '✨',
    title: 'Brändi-identiteetti',
    desc: 'Logo, väripaletti ja visuaalinen ilme, joka erottaa yrityksesi kilpailijoista.',
    visual: (
      <div className="svc-brand-mock">
        <div className="sbrand-logo">Z</div>
        <div className="sbrand-palette">
          <div className="sbrand-swatch" style={{ background: '#7C6FFF' }} />
          <div className="sbrand-swatch" style={{ background: '#EFEFF5' }} />
          <div className="sbrand-swatch" style={{ background: '#FB923C' }} />
          <div className="sbrand-swatch" style={{ background: '#4ADE80' }} />
          <div className="sbrand-swatch" style={{ background: '#0C0D17' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'ecom',
    visualClass: 'sv-dev',
    iconClass: 'svc-icon-blue',
    icon: '🛒',
    title: 'Verkkokauppa',
    desc: 'Myy tuotteitasi tai palveluitasi verkossa — selkeä, turvallinen ja konvertoiva verkkokauppa.',
    visual: (
      <div className="svc-code-mock">
        <div className="scm-top">
          <span className="scm-dot" /><span className="scm-dot" /><span className="scm-dot" />
        </div>
        <div className="scm-body">
          <div className="scm-line"><span className="scm-key">export</span> tuote = {'{'}</div>
          <div className="scm-line">&nbsp;&nbsp;hinta: <span className="scm-num">49.90</span>,</div>
          <div className="scm-line">&nbsp;&nbsp;maksu: <span className="scm-str">&ldquo;Stripe&rdquo;</span>,</div>
          <div className="scm-line">&nbsp;&nbsp;toimitus: <span className="scm-str">&ldquo;Posti&rdquo;</span></div>
          <div className="scm-line">{'}'}</div>
        </div>
      </div>
    ),
  },
  {
    id: 'maint',
    visualClass: 'sv-seo',
    iconClass: 'svc-icon-green',
    icon: '🔧',
    title: 'Ylläpito & tuki',
    desc: 'Huolehditaan sivustosi päivityksistä, tietoturvasta ja teknisestä toimivuudesta kuukausittain.',
    visual: (
      <div className="svc-chart-mock">
        <div className="schart-label">Käytettävyys</div>
        <div className="schart-val" style={{ color: 'var(--accent2)' }}>99.9%</div>
        <div className="schart-bars">
          {[100,100,100,100,99,100,100].map((h, i) => (
            <div key={i} className="schart-bar" style={{ height: `${h}%`, background: h === 99 ? 'rgba(91,143,255,0.4)' : 'rgba(91,143,255,0.8)' }} />
          ))}
        </div>
      </div>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section" id="palvelut">
      <div className="wrap">
        <RevealWrapper>
          <div className="services-intro">
            <div className="eyebrow"><span className="eyebrow-dot" />Palvelut</div>
            <h2 className="section-h">Kaikki mitä tarvitset<br />verkossa menestymiseen</h2>
            <p className="section-sub">
              Tarjoamme täyden palvelun verkkosivuratkaisuja — suunnittelusta kehitykseen ja ylläpitoon.
            </p>
          </div>
        </RevealWrapper>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <RevealWrapper key={s.id} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2}>
              <div className="svc-card">
                <div className={`svc-visual ${s.visualClass}`}>
                  {s.visual}
                </div>
                <div className="svc-text">
                  <div className={`svc-icon ${s.iconClass}`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
