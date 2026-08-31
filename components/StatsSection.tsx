import RevealWrapper from './RevealWrapper'

const STATS = [
  {
    num: '73',
    suf: '%',
    label: 'Luotettavuus rakennetaan verkossa',
    desc: 'Käyttäjistä arvioi yrityksen uskottavuuden verkkosivuston perusteella — ei mainoksilla.',
  },
  {
    num: '53',
    suf: '%',
    label: 'Hitaalta sivulta poistutaan',
    desc: 'Yli puolet kävijöistä hylkää sivun, jos se lataa yli kolme sekuntia.',
  },
  {
    num: '3',
    suf: '×',
    label: 'Enemmän liidejä optimoiduilla sivuilla',
    desc: 'Hyvin suunniteltu sivusto tuottaa moninkertaisesti enemmän yhteydenottoja.',
  },
  {
    num: '94',
    suf: '%',
    label: 'Ensivaikutelmista on visuaalisia',
    desc: 'Potentiaalinen asiakas muodostaa mielipiteensä sivustosta sekunteissa.',
  },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="stats-header">
            <div className="section-badge">003/ Miksi sivusto merkitsee</div>
            <h2 className="stats-heading">
              Hyvä sivusto on<br />paras myyntimies.
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
