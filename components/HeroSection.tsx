import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="wrap">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-kicker"><span className="kicker-dot"></span>Meta-mainonta</div>
          <h1>Mainoksesi<br />pyörivät.<br /><span className="muted">Asiakkaat<br />eivät tule.</span></h1>
          <p className="hero-sub">Meta mainonta, joka toimii. Ilman arvailua, geneerisiä kuvia tai tuhlattua budjettia.</p>
          <div className="hero-btns">
            <Link href="/#cta" className="btn-dark">Pyydä ilmainen analyysi →</Link>
            <Link href="/#prosessi" className="btn-outline">Miten toimii</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="float-pill fp-1">
            <div className="pill-icon" style={{ background: '#EEF3FD' }}>📈</div>
            ROAS 4.8× tällä viikolla
          </div>
          <div className="ad-stack">
            <div className="ad-card ac-main">
              <div className="ad-topbar">
                <div className="ad-avatar av-blue">TT</div>
                <div>
                  <div className="ad-page-name">Terveystekniikka</div>
                  <div className="ad-page-meta">Sponsoroitu · 🌐</div>
                </div>
                <div className="ad-sponsored">Mainos</div>
              </div>
              <div className="ad-image ai-wellness"><span className="ad-image-label">Kivunlievitys kotona</span></div>
              <div className="ad-body">
                <div className="ad-body-head">Tunnetko kipua joka päivä?</div>
                <div className="ad-body-sub">Lääkkeetön hoito kotona — turvallinen ja testattu.</div>
                <span className="ad-cta-btn cta-blue">Lue lisää →</span>
              </div>
            </div>
            <div className="ad-card ac-secondary">
              <div className="ad-topbar">
                <div className="ad-avatar av-slate">RK</div>
                <div>
                  <div className="ad-page-name">Ravintola Kulta</div>
                  <div className="ad-page-meta">Sponsoroitu · 🌐</div>
                </div>
                <div className="ad-sponsored">Mainos</div>
              </div>
              <div className="ad-image ai-resto"><span className="ad-image-label">Illallinen kahdelle</span></div>
              <div className="ad-body">
                <div className="ad-body-head">Pöytä varattu. Kokemus odottaa.</div>
                <div className="ad-body-sub">Varaa pöytäsi tänään — erikoistarjous viikonlopulle.</div>
                <span className="ad-cta-btn cta-dark">Varaa pöytä →</span>
              </div>
            </div>
          </div>
          <div className="float-pill fp-2">
            <span className="pill-dot"></span>Mainos julkaistu juuri nyt
          </div>
        </div>
      </div>
    </div>
  )
}
