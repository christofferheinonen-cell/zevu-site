import RevealWrapper from './RevealWrapper'

const PROJECTS = [
  {
    title: 'Heikkinen Kahvila',
    industry: 'Ravintola & Kahvila',
    tag: 'Verkkosivut',
    pvClass: 'pv-1',
    themeClass: 'p-purple',
  },
  {
    title: 'Fysio Pohjola',
    industry: 'Terveys & Hyvinvointi',
    tag: 'Verkkovaraukset',
    pvClass: 'pv-2',
    themeClass: 'p-green',
  },
  {
    title: 'Rakennusliike Saarinen',
    industry: 'Rakennusala',
    tag: 'Referenssisivu',
    pvClass: 'pv-3',
    themeClass: 'p-blue',
    large: true,
  },
  {
    title: 'Lakitalo Mäkinen',
    industry: 'Lakipalvelut',
    tag: 'Verkkosivut',
    pvClass: 'pv-4',
    themeClass: 'p-orange',
  },
]

function MiniSite({ theme }: { theme: string }) {
  return (
    <div className={`port-mini ${theme}`}>
      <div className="port-mini-nav">
        <div className="port-mini-logo" />
        <div className="port-mini-links">
          <div className="port-mini-link" />
          <div className="port-mini-link" />
          <div className="port-mini-link" />
        </div>
        <div className="port-mini-btn" />
      </div>
      <div className="port-mini-hero">
        <div className="port-mini-tag" />
        <div className="port-mini-h" />
        <div className="port-mini-h2" />
        <div className="port-mini-sub">
          <div className="port-mini-line" style={{ width: '100%' }} />
          <div className="port-mini-line" style={{ width: '85%' }} />
          <div className="port-mini-line" style={{ width: '70%' }} />
        </div>
        <div className="port-mini-btns">
          <div className="port-mini-cta" />
          <div className="port-mini-outline" />
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  return (
    <section className="portfolio-section" id="referenssit">
      <div className="wrap">
        <RevealWrapper>
          <div className="portfolio-intro">
            <div className="eyebrow"><span className="eyebrow-dot" />Referenssit</div>
            <h2 className="section-h">Sivustoja, joita olemme<br />ylpeitä tekemään</h2>
            <p className="section-sub">
              Olemme auttaneet kymmeniä suomalaisia pk-yrityksiä luomaan verkossa vahvan ensiaskeleen.
            </p>
          </div>
        </RevealWrapper>

        <div className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <RevealWrapper key={p.title} delay={(i % 2) as 0 | 1}>
              <div className={`portfolio-card${p.large ? ' large' : ''}`}>
                <div className={`port-visual ${p.pvClass}`}>
                  <MiniSite theme={p.themeClass} />
                </div>
                <div className="port-info">
                  <div>
                    <div className="port-title">{p.title}</div>
                    <div className="port-industry">{p.industry}</div>
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
