import RevealWrapper from './RevealWrapper'

const INDUSTRIES = [
  { emoji: '🏗️', label: 'Rakennusyritykset' },
  { emoji: '🍽️', label: 'Ravintolat & kahvilat' },
  { emoji: '✂️', label: 'Kampaamot & kauneushoitolat' },
  { emoji: '🦷', label: 'Hammaslääkärit & klinikat' },
  { emoji: '⚖️', label: 'Lakitoimistot' },
  { emoji: '🧹', label: 'Siivous & kiinteistöpalvelut' },
  { emoji: '🔧', label: 'Autokorjaamot & huolto' },
  { emoji: '📊', label: 'Tilitoimistot' },
  { emoji: '🧘', label: 'Terapia & hyvinvointi' },
  { emoji: '🏠', label: 'Sisustussuunnittelu' },
  { emoji: '📸', label: 'Valokuvaajat' },
  { emoji: '💪', label: 'Personal trainerit & salit' },
  { emoji: '🌿', label: 'Piha- & puutarhapalvelut' },
  { emoji: '🎓', label: 'Koulutus & valmennus' },
  { emoji: '🛠️', label: 'LVI & sähkötyöt' },
  { emoji: '🐾', label: 'Lemmikkipalvelut' },
]

// Duplicate for seamless loop
const ROW1 = [...INDUSTRIES.slice(0, 8), ...INDUSTRIES.slice(0, 8)]
const ROW2 = [...INDUSTRIES.slice(8), ...INDUSTRIES.slice(8)]

export default function TestimonialsSection() {
  return (
    <section className="industries-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="industries-intro">
            <div className="section-badge">005/ Keitä autamme</div>
            <h2 className="industries-heading">
              Toimii jokaiselle<br />palvelualalle.
            </h2>
            <p className="industries-sub">
              Rakensimme sivustoja kymmenille eri toimialoille — rakentamisesta terveydenhuoltoon.
              Jos myyt palvelua, teemme sivuston joka tuo sinulle asiakkaita.
            </p>
          </div>
        </RevealWrapper>
      </div>

      <div className="industries-marquee-wrap">
        <div className="industries-row industries-row-fwd">
          {ROW1.map((item, i) => (
            <div key={i} className="industry-chip">
              <span className="industry-emoji">{item.emoji}</span>
              <span className="industry-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="industries-row industries-row-rev">
          {ROW2.map((item, i) => (
            <div key={i} className="industry-chip">
              <span className="industry-emoji">{item.emoji}</span>
              <span className="industry-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
