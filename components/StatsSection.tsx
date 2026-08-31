import RevealWrapper from './RevealWrapper'

const STATS = [
  {
    num: '3–5',
    suffix: ' vk',
    label: 'Toimitusaika',
    desc: 'Ideasta valmiiseen, toimivaan sivustoon',
  },
  {
    num: '100%',
    label: 'Tyytyväisyystakuu',
    desc: 'Emme luovuta ennen kuin olet tyytyväinen',
  },
  {
    num: '50+',
    label: 'Projektia toimitettu',
    desc: 'Pk-yrityksille eri toimialoilta',
  },
  {
    num: '10+',
    label: 'Toimialaa',
    desc: 'Ravintolat, terveys, rakentaminen ja muut',
  },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="stats-header">
            <div className="eyebrow stats-eyebrow">
              <span className="eyebrow-dot" />Miksi meiltä
            </div>
            <h2 className="stats-heading">
              Numerot, jotka<br />puhuvat puolestaan.
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">
                  {s.num}
                  {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
                </div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
