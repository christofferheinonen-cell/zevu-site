import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const STEPS = [
  { num: '01', title: 'Kartoitus', desc: 'Tutustumme liiketoimintaasi ja tavoitteisiisi. Ilmainen alkukartoitus.' },
  { num: '02', title: 'Suunnittelu', desc: 'Luomme visuaalisen suunnitelman, joka vastaa brändiäsi.' },
  { num: '03', title: 'Kehitys', desc: 'Rakennamme nopean, mobiiliyhteensopivan ja optimoidun sivuston.' },
  { num: '04', title: 'Julkaisu', desc: 'Julkaisemme sivuston ja tuemme sinua tarpeen mukaan jatkossa.' },
]

export default function ProcessSection() {
  return (
    <section className="proc-section">
      <div className="wrap">
        <div className="proc-layout">
          {/* Left — copy */}
          <RevealWrapper>
            <div className="proc-left">
              <div className="eyebrow"><span className="eyebrow-dot" />Prosessi</div>
              <h2 className="proc-heading">
                Ideasta<br />
                valmiiseen<br />
                sivustoon.
              </h2>
              <p className="proc-sub">
                Selkeä prosessi, selkeät aikataulut.
                Tiedät aina missä mennään — alusta loppuun.
              </p>
              <Link href="/#ota-yhteytta" className="btn-accent" style={{ marginTop: 32, display: 'inline-flex' }}>
                Aloita projekti →
              </Link>
            </div>
          </RevealWrapper>

          {/* Right — steps + mockup */}
          <RevealWrapper delay={1}>
            <div className="proc-right">
              <div className="proc-steps">
                {STEPS.map(s => (
                  <div key={s.num} className="proc-step">
                    <div className="proc-step-num">{s.num}</div>
                    <div>
                      <div className="proc-step-title">{s.title}</div>
                      <div className="proc-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini browser mockup */}
              <div className="proc-mockup">
                <div className="proc-mock-bar">
                  <div className="pm-dots">
                    <span className="pm-d pm-r"/><span className="pm-d pm-y"/><span className="pm-d pm-g"/>
                  </div>
                  <div className="pm-url">yritys.fi</div>
                </div>
                <div className="proc-mock-body">
                  <div className="pm-sitenav">
                    <div className="pm-logo"/><div className="pm-navlinks"><div/><div/><div/></div><div className="pm-btn"/>
                  </div>
                  <div className="pm-hero">
                    <div className="pm-tag"/>
                    <div className="pm-h"/><div className="pm-h pm-hb"/>
                    <div className="pm-lines">
                      <div className="pm-line" style={{width:'100%'}}/><div className="pm-line" style={{width:'78%'}}/>
                    </div>
                    <div className="pm-ctas"><div className="pm-fill"/><div className="pm-ghost"/></div>
                  </div>
                  <div className="pm-cards">
                    {[0,1,2].map(i => (
                      <div key={i} className="pm-card">
                        <div className="pm-cicon" style={{background:['rgba(124,111,255,.5)','rgba(74,222,128,.4)','rgba(251,146,60,.4)'][i]}}/>
                        <div className="pm-ch"/><div className="pm-cp"/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
