import RevealWrapper from './RevealWrapper'

const FEATURES = [
  'Räätälöity design',
  'Nopea toimitusaika (3–5 vk)',
  'SEO-optimoitu rakenne',
  'Mobiiliyhteensopiva',
  'Jatkuva tuki & ylläpito',
  'Kiinteä hinta etukäteen',
  'Ammattimainen laatu',
]

type Col = {
  key: string
  name: string
  badge: string
  featured?: boolean
  values: boolean[]
}

const COLS: Col[] = [
  {
    key: 'agency',
    name: 'Muut toimistot',
    badge: 'Vaihtoehto 1',
    values: [true, false, true, true, false, false, true],
  },
  {
    key: 'zevu',
    name: 'Zevu',
    badge: 'Suosittelemme',
    featured: true,
    values: [true, true, true, true, true, true, true],
  },
]

export default function ComparisonSection() {
  return (
    <section className="cmp-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="cmp-intro">
            <div className="section-badge">004/ Miksi Zevu</div>
            <h2 className="cmp-heading">
              Miksi valita Zevu?
            </h2>
            <p className="cmp-sub">
              Vertaa — katso miksi satoja suomalaisia pk-yrityksiä valitsee
              meidät muiden toimistojen sijaan.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="cmp-outer">
            <div className="cmp-table">
              {/* Feature label column */}
              <div className="cmp-col">
                <div className="cmp-col-head" style={{ background: 'var(--bg)' }}>
                  <div className="cmp-col-name" style={{ color: 'var(--sub2)' }}>Ominaisuus</div>
                </div>
                {FEATURES.map((f) => (
                  <div key={f} className="cmp-cell cmp-cell-label">{f}</div>
                ))}
              </div>

              {/* Data columns */}
              {COLS.map((col) => (
                <div key={col.key} className={`cmp-col${col.featured ? ' cmp-col-feat' : ''}`}>
                  <div className="cmp-col-head">
                    <div className="cmp-col-badge">{col.badge}</div>
                    <div className="cmp-col-name">{col.name}</div>
                  </div>
                  {col.values.map((yes, i) => (
                    <div key={i} className={`cmp-cell${col.featured ? ' cmp-cell-feat' : ''}`}>
                      <span className={`cmp-check ${yes ? (col.featured ? 'cmp-yes-feat' : 'cmp-yes') : 'cmp-no'}`}>
                        {yes ? '✓' : '✕'}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
