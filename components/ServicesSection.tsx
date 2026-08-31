import RevealWrapper from './RevealWrapper'

const SERVICES = [
  {
    icon: '🎨',
    title: 'Verkkosivusuunnittelu',
    desc: 'Räätälöidyt, modernit sivut, jotka heijastavat brändiäsi ja houkuttelevat oikeat asiakkaat.',
  },
  {
    icon: '💻',
    title: 'Tekninen kehitys',
    desc: 'Nopeat, mobiiliyhteensopivat sivut jotka toimivat moitteettomasti kaikilla laitteilla.',
  },
  {
    icon: '📈',
    title: 'Hakukoneoptimointi',
    desc: 'Löydettävyys Googlesta oikeilla hakusanoilla — enemmän kävijöitä ja asiakkaita.',
  },
  {
    icon: '✨',
    title: 'Brändi-identiteetti',
    desc: 'Logo, väripaletti ja visuaalinen ilme, joka erottaa sinut kilpailijoista.',
  },
  {
    icon: '🛒',
    title: 'Verkkokauppa',
    desc: 'Myy tuotteitasi verkossa — selkeä, turvallinen ja konvertoiva verkkokauppa.',
  },
  {
    icon: '🔧',
    title: 'Ylläpito & tuki',
    desc: 'Kuukausittainen huolenpito: päivitykset, tietoturva ja tekninen tuki.',
  },
]

export default function ServicesSection() {
  return (
    <section className="svc-section" id="palvelut">
      <div className="wrap">
        <RevealWrapper>
          <div className="svc-intro">
            <div className="section-badge">001/ Palvelut</div>
            <h2 className="svc-heading">
              Kaikki mitä tarvitset<br />menestyäksesi verkossa.
            </h2>
            <p className="svc-sub">
              Täyden palvelun verkkosivuratkaisuja — suunnittelusta kehitykseen ja ylläpitoon.
            </p>
          </div>
        </RevealWrapper>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <RevealWrapper key={s.title} delay={(i % 3) as 0 | 1 | 2}>
              <div className="svc-card">
                <div className="svc-card-icon">{s.icon}</div>
                <div className="svc-card-title">{s.title}</div>
                <div className="svc-card-desc">{s.desc}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
