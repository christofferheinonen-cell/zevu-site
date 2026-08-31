import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-outer">
      {/* Centered text block */}
      <div className="hero-top">
        <div className="hero-kicker">
          <span className="kicker-dot" />
          Suomalainen verkkosivutoimisto
        </div>
        <h1 className="hero-h1">
          Verkkosivut, jotka<br />
          kasvattavat<br />
          liiketoimintaasi.
        </h1>
        <p className="hero-tagline">
          Suunnittelemme ja rakennamme modernit verkkosivut pk-yrityksille —
          nopeasti, ammattimaisesti ja tuloksiin keskittyen.
        </p>
        <div className="hero-actions">
          <Link href="/#ota-yhteytta" className="btn-accent">Aloita projekti →</Link>
          <Link href="/#referenssit" className="btn-ghost">Katso referenssit</Link>
        </div>
      </div>

      {/* Full-width browser showcase */}
      <div className="hero-screen-outer">
        <div className="hero-badge hb-1">
          <div className="hb-icon hb-icon-green">📈</div>
          <div>
            <div className="hb-val">+147%</div>
            <div className="hb-label">Lisää asiakkaita</div>
          </div>
        </div>
        <div className="hero-badge hb-2">
          <div className="hb-icon hb-icon-purple">⚡</div>
          <div>
            <div className="hb-val">3–5 vk</div>
            <div className="hb-label">Toimitusaika</div>
          </div>
        </div>

        <div className="hero-screen">
          {/* Browser chrome */}
          <div className="hs-bar">
            <div className="hs-dots">
              <span className="hs-dot hs-r" /><span className="hs-dot hs-y" /><span className="hs-dot hs-g" />
            </div>
            <div className="hs-url">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/></svg>
              www.asiakkaansivu.fi
            </div>
          </div>

          {/* Simulated website */}
          <div className="hs-body">
            <div className="hs-sitenav">
              <div className="hs-sn-logo" />
              <div className="hs-sn-links"><div /><div /><div /></div>
              <div className="hs-sn-btn" />
            </div>
            <div className="hs-sitehero">
              <div className="hs-sh-tag" />
              <div className="hs-sh-h" />
              <div className="hs-sh-h hs-sh-hb" />
              <div className="hs-sh-lines">
                <div className="hs-sh-line" style={{ width: '100%' }} />
                <div className="hs-sh-line" style={{ width: '82%' }} />
                <div className="hs-sh-line" style={{ width: '67%' }} />
              </div>
              <div className="hs-sh-ctas">
                <div className="hs-sh-fill" />
                <div className="hs-sh-ghost" />
              </div>
            </div>
            <div className="hs-sitecards">
              {[
                'rgba(124,111,255,.5)',
                'rgba(74,222,128,.45)',
                'rgba(251,146,60,.45)',
                'rgba(91,143,255,.45)',
              ].map((c, i) => (
                <div key={i} className="hs-sc">
                  <div className="hs-sc-icon" style={{ background: c }} />
                  <div className="hs-sc-h" />
                  <div className="hs-sc-p" />
                  <div className="hs-sc-p" style={{ width: '72%' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
