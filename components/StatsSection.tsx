import RevealWrapper from './RevealWrapper'

const STATS = [
  {
    num: '3',
    suf: 'x',
    label: 'Nopeampi kuin perinteinen toimisto',
    desc: 'Sivustosi valmis 3–5 viikossa, ei kuukausissa',
  },
  {
    num: '100',
    suf: '+',
    label: 'Projektia toimitettu',
    desc: 'Pk-yrityksille eri toimialoilta ympäri Suomen',
  },
  {
    num: '60',
    suf: '%',
    label: 'Kävijöistä mobiililla',
    desc: 'Sivustosi toimii moitteettomasti kaikilla laitteilla',
  },
  {
    num: '98',
    suf: '%',
    label: 'Asiakastyytyväisyys',
    desc: 'Emme luovuta ennen kuin olet täysin tyytyväinen',
  },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="stats-header">
            <div className="section-badge">003/ Numerot</div>
            <h2 className="stats-heading">
              Numerot puhuvat<br />puolestaan.
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">
                  {s.num}<span className="stat-suffix">{s.suf}</span>
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
