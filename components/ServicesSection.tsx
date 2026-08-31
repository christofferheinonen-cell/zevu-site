import RevealWrapper from './RevealWrapper'

const SERVICES = [
  {
    num: '01',
    icon: '🎨',
    title: 'Verkkosivusuunnittelu',
    desc: 'Räätälöidyt, modernit sivut, jotka heijastavat brändiäsi ja houkuttelevat oikeat asiakkaat.',
  },
  {
    num: '02',
    icon: '💻',
    title: 'Tekninen kehitys',
    desc: 'Nopeat, mobiiliyhteensopivat sivut jotka toimivat moitteettomasti kaikilla laitteilla.',
  },
  {
    num: '03',
    icon: '📈',
    title: 'Hakukoneoptimointi',
    desc: 'Löydettävyys Googlesta oikeilla hakusanoilla — enemmän kävijöitä ja asiakkaita.',
  },
  {
    num: '04',
    icon: '✨',
    title: 'Brändi-identiteetti',
    desc: 'Logo, väripaletti ja visuaalinen ilme, joka erottaa sinut kilpailijoista.',
  },
  {
    num: '05',
    icon: '🛒',
    title: 'Verkkokauppa',
    desc: 'Myy tuotteitasi verkossa — selkeä, turvallinen ja konvertoiva verkkokauppa.',
  },
  {
    num: '06',
    icon: '🔧',
    title: 'Ylläpito & tuki',
    desc: 'Kuukausittainen huolenpito: päivitykset, tietoturva ja tekninen tuki.',
  },
]

export default function ServicesSection() {
  return (
    <section className="svc-section" id="palvelut">
      <div className="wrap">
        <div className="svc-layout">
          {/* Left — sticky heading */}
          <RevealWrapper>
            <div className="svc-left">
              <div className="eyebrow"><span className="eyebrow-dot" />Palvelut</div>
              <h2 className="svc-heading">
                Kaikki mitä<br />
                tarvitset<br />
                menestyäksesi<br />
                verkossa.
              </h2>
              <p className="svc-sub">
                Täyden palvelun verkkosivuratkaisuja — suunnittelusta kehitykseen ja ylläpitoon.
              </p>
            </div>
          </RevealWrapper>

          {/* Right — service list */}
          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <RevealWrapper key={s.num} delay={(i % 2) as 0 | 1}>
                <div className="svc-item">
                  <span className="svc-item-num">{s.num}</span>
                  <div className="svc-item-icon">{s.icon}</div>
                  <div className="svc-item-body">
                    <div className="svc-item-title">{s.title}</div>
                    <div className="svc-item-desc">{s.desc}</div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
