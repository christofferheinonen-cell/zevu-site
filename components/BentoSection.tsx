import RevealWrapper from './RevealWrapper'

const TIMELINE = [
  { week: 'Vko 1', label: 'Kartoitus', color: 'rgba(124,111,255,0.75)' },
  { week: 'Vko 2–3', label: 'Suunnittelu & kehitys', color: 'rgba(91,143,255,0.75)' },
  { week: 'Vko 4–5', label: 'Julkaisu ✓', color: 'rgba(74,222,128,0.85)' },
]

export default function BentoSection() {
  return (
    <section className="bento-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="bento-intro">
            <div className="eyebrow"><span className="eyebrow-dot" />Miksi Zevu</div>
            <h2 className="bento-heading">
              Rakennettu<br />menestymään.
            </h2>
            <p className="bento-sub">
              Jokainen yksityiskohta on suunniteltu siten, että sivustosi toimii
              liiketoimintasi kasvun moottorina.
            </p>
          </div>
        </RevealWrapper>

        <div className="bento-grid">
          {/* Wide: Nopea toimitusaika */}
          <RevealWrapper className="bento-wide" delay={0}>
            <div className="bento-card">
              <div className="bento-icon" style={{ background: 'rgba(124,111,255,0.1)' }}>⚡</div>
              <div className="bento-card-title">Nopea toimitusaika</div>
              <div className="bento-card-desc">
                Emme pidä sinua odottamassa. Projekti käynnistyy viikossa ja sivusto
                on valmis 3–5 viikossa — ei kuukausia.
              </div>
              <div className="bento-tl">
                {TIMELINE.map((step, i) => (
                  <div key={i} className="bento-tl-step">
                    <div className="bento-tl-bar" style={{ background: step.color }} />
                    <div className="bento-tl-week">{step.week}</div>
                    <div className="bento-tl-label">{step.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* SEO */}
          <RevealWrapper delay={1}>
            <div className="bento-card">
              <div className="bento-icon" style={{ background: 'rgba(74,222,128,0.1)' }}>🔍</div>
              <div className="bento-card-title">SEO-valmis</div>
              <div className="bento-card-desc">
                Rakennamme hakukonenäkyvyyden suoraan sivuston rakenteeseen — ei
                jälkikäteen lisättynä.
              </div>
            </div>
          </RevealWrapper>

          {/* Mobile */}
          <RevealWrapper delay={0}>
            <div className="bento-card">
              <div className="bento-icon" style={{ background: 'rgba(251,146,60,0.1)' }}>📱</div>
              <div className="bento-card-title">Mobiilioptimoidut</div>
              <div className="bento-card-desc">
                Yli 60 % kävijöistä tulee puhelimella. Sivustosi näyttää täydelliseltä
                kaikilla laitteilla.
              </div>
            </div>
          </RevealWrapper>

          {/* Design */}
          <RevealWrapper delay={1}>
            <div className="bento-card">
              <div className="bento-icon" style={{ background: 'rgba(124,111,255,0.1)' }}>🎨</div>
              <div className="bento-card-title">Räätälöity muotoilu</div>
              <div className="bento-card-desc">
                Ei valmispohjia. Jokainen sivusto suunnitellaan alusta alkaen brändiäsi
                varten.
              </div>
            </div>
          </RevealWrapper>

          {/* Support */}
          <RevealWrapper delay={2}>
            <div className="bento-card">
              <div className="bento-icon" style={{ background: 'rgba(91,143,255,0.1)' }}>🛡</div>
              <div className="bento-card-title">Jatkuva tuki</div>
              <div className="bento-card-desc">
                Julkaisun jälkeen emme katoa. Tuemme sinua aina kun tarvitset apua.
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
