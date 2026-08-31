import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Left — copy */}
      <div>
        <div className="hero-kicker">
          <span className="kicker-dot" />
          Suomalainen verkkosivutoimisto
        </div>

        <h1>
          Verkkosivut, jotka{' '}
          <span className="accent">kasvattavat</span>{' '}
          liiketoimintaasi
        </h1>

        <p className="hero-sub">
          Suunnittelemme ja rakennamme modernit verkkosivut suomalaisille
          pk-yrityksille — nopeasti, ammattimaisesti ja tuloksiin keskittyen.
        </p>

        <div className="hero-btns">
          <Link href="/#ota-yhteytta" className="btn-accent">
            Aloita projekti →
          </Link>
          <Link href="/#referenssit" className="btn-ghost">
            Katso referenssit
          </Link>
        </div>
      </div>

      {/* Right — visual */}
      <div className="hero-visual">
        {/* Floating badge top-right */}
        <div className="hero-badge hb-1">
          <div className="hb-icon hb-icon-green">🚀</div>
          <div>
            <div className="hb-val">+147%</div>
            <div className="hb-label">Lisää asiakkaita</div>
          </div>
        </div>

        {/* Browser mockup */}
        <div className="hero-browser">
          <div className="hero-browser-bar">
            <div className="browser-dots">
              <span className="browser-dot bd-r" />
              <span className="browser-dot bd-y" />
              <span className="browser-dot bd-g" />
            </div>
            <div className="browser-url">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              yritys.fi
            </div>
          </div>
          <div className="hero-browser-content">
            <div className="site-nav-mock">
              <span className="site-nav-logo">Yritys</span>
              <div className="site-nav-links">
                <div className="site-nav-link" />
                <div className="site-nav-link" />
                <div className="site-nav-link" />
              </div>
              <div className="site-nav-btn" />
            </div>
            <div className="site-hero-mock">
              <div className="site-hero-tag" />
              <div className="site-hero-h" />
              <div className="site-hero-h2" />
              <div className="site-hero-p">
                <div className="site-hero-line" style={{ width: '100%' }} />
                <div className="site-hero-line" style={{ width: '85%' }} />
                <div className="site-hero-line" style={{ width: '70%' }} />
              </div>
              <div className="site-hero-btns">
                <div className="site-btn-p" />
                <div className="site-btn-s" />
              </div>
            </div>
            <div className="site-cards-mock">
              {[0, 1, 2].map(i => (
                <div className="site-card-m" key={i}>
                  <div className="site-card-icon" />
                  <div className="site-card-h" />
                  <div className="site-card-p" />
                  <div className="site-card-p" style={{ width: '75%' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badge bottom-left */}
        <div className="hero-badge hb-2">
          <div className="hb-icon hb-icon-purple">⚡</div>
          <div>
            <div className="hb-val">3–5 vk</div>
            <div className="hb-label">Toimitusaika</div>
          </div>
        </div>
      </div>
    </section>
  )
}
