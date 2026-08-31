import RevealWrapper from './RevealWrapper'

const PROJECTS = [
  {
    title: 'Heikkinen Kahvila',
    industry: 'Ravintola & Kahvila',
    tag: 'Verkkosivut',
    stat: '+89%',
    statLabel: 'lisää varauksia',
    bg: 'linear-gradient(145deg, #1A1040 0%, #2D1B69 50%, #1A0A3A 100%)',
    accent: '#A78BFA',
  },
  {
    title: 'Fysio Pohjola',
    industry: 'Terveys & Hyvinvointi',
    tag: 'Verkkovaraukset',
    stat: '+124%',
    statLabel: 'uusia asiakkaita',
    bg: 'linear-gradient(145deg, #052E16 0%, #064E3B 50%, #022C22 100%)',
    accent: '#34D399',
  },
  {
    title: 'Rakennusliike Saarinen',
    industry: 'Rakennusala',
    tag: 'Referenssisivu',
    stat: '3×',
    statLabel: 'enemmän tarjouspyyntöjä',
    bg: 'linear-gradient(145deg, #0C1A2E 0%, #1E3A5F 50%, #0A1520 100%)',
    accent: '#60A5FA',
    large: true,
  },
  {
    title: 'Lakitalo Mäkinen',
    industry: 'Lakipalvelut',
    tag: 'Verkkosivut',
    stat: '+67%',
    statLabel: 'yhteydenottoja',
    bg: 'linear-gradient(145deg, #2A0A0A 0%, #4A1C1C 50%, #1A0808 100%)',
    accent: '#FB923C',
  },
]

export default function PortfolioSection() {
  return (
    <section className="port-section" id="referenssit">
      <div className="wrap">
        <RevealWrapper>
          <div className="port-intro">
            <div className="eyebrow"><span className="eyebrow-dot" />Referenssit</div>
            <h2 className="port-heading">
              Oikeita tuloksia.<br />
              Oikeille yrityksille.
            </h2>
            <p className="section-sub">
              Olemme auttaneet kymmeniä suomalaisia pk-yrityksiä luomaan
              verkossa vahvan ensiaskeleen.
            </p>
          </div>
        </RevealWrapper>

        <div className="port-grid">
          {PROJECTS.map((p, i) => (
            <RevealWrapper key={p.title} delay={(i % 2) as 0 | 1}>
              <div className={`port-card${p.large ? ' port-card-wide' : ''}`}>
                <div className="port-bg" style={{ background: p.bg }}>
                  {/* Decorative grid lines */}
                  <div className="port-grid-lines">
                    {[0,1,2,3].map(n => <div key={n} className="pgl" />)}
                  </div>
                  {/* Abstract shapes */}
                  <div className="port-shape port-shape-a" style={{ background: p.accent + '22' }} />
                  <div className="port-shape port-shape-b" style={{ background: p.accent + '14' }} />
                  {/* Stat */}
                  <div className="port-stat">
                    <div className="port-stat-num" style={{ color: p.accent }}>{p.stat}</div>
                    <div className="port-stat-lbl">{p.statLabel}</div>
                  </div>
                </div>
                <div className="port-foot">
                  <div>
                    <div className="port-name">{p.title}</div>
                    <div className="port-ind">{p.industry}</div>
                  </div>
                  <span className="port-tag">{p.tag}</span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
