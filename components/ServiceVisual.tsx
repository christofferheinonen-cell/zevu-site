const WindowTop = ({ title }: { title: string }) => (
  <div className="sv-top">
    <div className="sv-dots"><i /><i /><i /></div>
    <span className="sv-top-title">{title}</span>
  </div>
)

function AdsManagerVisual() {
  return (
    <div className="sv">
      <div className="sv-pill sv-pill-tr"><span className="pill-icon" style={{ background: '#EEF3FD' }}>📈</span>ROAS 4.8×</div>
      <div className="sv-panel">
        <WindowTop title="Ads Manager" />
        <div className="sv-am">
          <div className="sv-am-camp">
            <span className="sv-am-folder">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            </span>
            <span className="sv-am-name">Kesäkampanja · Myynti</span>
            <span className="sv-badge sv-badge-green"><span className="pill-dot" />Aktiivinen</span>
          </div>
          {[
            { name: 'Laaja yleisö', roas: '4.2×', w: '78%', d: '.35s' },
            { name: 'Uudelleenkohdennus', roas: '5.6×', w: '92%', d: '.5s' },
            { name: 'Samankaltaiset', roas: '3.4×', w: '60%', d: '.65s' },
          ].map(s => (
            <div className="sv-am-set" key={s.name}>
              <div className="sv-am-set-head">
                <span className="sv-mini-dot" />
                <span className="sv-am-set-name">Mainosjoukko · {s.name}</span>
                <span className="sv-am-roas">{s.roas}</span>
              </div>
              <div className="sv-bar"><div className="sv-bar-fill" style={{ ['--w' as string]: s.w, animationDelay: s.d }} /></div>
            </div>
          ))}
          <div className="sv-am-foot">
            <span>Budjetti 40 €/pv</span>
            <span className="sv-am-foot-strong">+142 % / kk</span>
          </div>
        </div>
      </div>
      <div className="sv-pill sv-pill-bl"><span className="pill-dot" />Optimointi käynnissä</div>
    </div>
  )
}

function CreativesVisual() {
  return (
    <div className="sv">
      <div className="sv-pill sv-pill-tr"><span className="pill-icon" style={{ background: '#DCFCE7' }}>↑</span>CTR 3.2 %</div>
      <div className="sv-creatives">
        <div className="sv-cr sv-cr-1">
          <div className="sv-cr-tag">Kuvamainos</div>
          <div className="sv-cr-img sv-cr-img-1"><span className="sv-cr-imglabel">Kivunlievitys kotona</span></div>
          <div className="sv-cr-cap"><div className="sv-cr-line" style={{ width: '72%' }} /><div className="sv-cr-line" style={{ width: '44%' }} /></div>
        </div>
        <div className="sv-cr sv-cr-2">
          <div className="sv-cr-tag">Videomainos</div>
          <div className="sv-cr-img sv-cr-img-2">
            <span className="sv-play"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
            <span className="sv-cr-time">0:08</span>
          </div>
          <div className="sv-cr-cap"><div className="sv-cr-line" style={{ width: '60%' }} /><div className="sv-cr-line" style={{ width: '50%' }} /></div>
        </div>
      </div>
      <div className="sv-pill sv-pill-bl"><span className="pill-dot" />Uusi mainos testissä</div>
    </div>
  )
}

function ReportingVisual() {
  return (
    <div className="sv">
      <div className="sv-pill sv-pill-tr"><span className="pill-icon" style={{ background: '#EEF3FD' }}>📊</span>+142 % / kk</div>
      <div className="sv-panel">
        <WindowTop title="Raportti" />
        <div className="sv-rep">
          <div className="sv-rep-tiles">
            {[['ROAS', '4.8×'], ['CTR', '3.2 %'], ['CPA', '8,40 €']].map(([l, v]) => (
              <div className="sv-tile" key={l}><div className="sv-tile-label">{l}</div><div className="sv-tile-val">{v}</div></div>
            ))}
          </div>
          <div className="sv-chart">
            <svg viewBox="0 0 280 110" preserveAspectRatio="none" className="sv-chart-svg">
              <defs>
                <linearGradient id="svArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="28" x2="280" y2="28" className="sv-grid" />
              <line x1="0" y1="58" x2="280" y2="58" className="sv-grid" />
              <line x1="0" y1="88" x2="280" y2="88" className="sv-grid" />
              <path d="M0,88 L40,80 L80,84 L120,60 L160,66 L200,40 L240,30 L280,14 L280,110 L0,110 Z" fill="url(#svArea)" className="sv-area" />
              <path d="M0,88 L40,80 L80,84 L120,60 L160,66 L200,40 L240,30 L280,14" pathLength={1} fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sv-line" />
            </svg>
          </div>
        </div>
      </div>
      <div className="sv-pill sv-pill-bl"><span className="pill-dot" />Päivittyy reaaliajassa</div>
    </div>
  )
}

function PixelVisual() {
  const events = [
    { name: 'PageView', meta: 'nyt' },
    { name: 'ViewContent', meta: '2 s' },
    { name: 'AddToCart', meta: '14 s' },
    { name: 'Purchase', badge: '+89 €' },
  ]
  return (
    <div className="sv">
      <div className="sv-pill sv-pill-tr"><span className="pill-dot" />CAPI yhdistetty</div>
      <div className="sv-panel">
        <WindowTop title="Tapahtumat" />
        <div className="sv-px">
          {events.map((e, i) => (
            <div className="sv-px-row" key={e.name} style={{ animationDelay: `${0.3 + i * 0.22}s` }}>
              <span className="sv-px-check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg>
              </span>
              <span className="sv-px-name">{e.name}</span>
              {e.badge ? <span className="sv-badge sv-badge-green">{e.badge}</span> : <span className="sv-px-meta">{e.meta}</span>}
            </div>
          ))}
          <div className="sv-px-flow">
            <span className="sv-px-node">Selain</span>
            <span className="sv-px-wire"><span className="sv-px-spark" /></span>
            <span className="sv-px-node">Pikseli</span>
            <span className="sv-px-wire"><span className="sv-px-spark" style={{ animationDelay: '.6s' }} /></span>
            <span className="sv-px-node sv-px-node-blue">Meta</span>
          </div>
        </div>
      </div>
      <div className="sv-pill sv-pill-bl"><span className="pill-icon" style={{ background: '#EEF3FD' }}>🎯</span>Mittaus 100 %</div>
    </div>
  )
}

function AbTestVisual() {
  return (
    <div className="sv">
      <div className="sv-panel">
        <WindowTop title="A/B-testi" />
        <div className="sv-ab">
          <div className="sv-ab-row">
            <span className="sv-ab-tag sv-ab-tag-win">Versio A<span className="sv-ab-check"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg></span></span>
            <div className="sv-bar"><div className="sv-bar-fill" style={{ ['--w' as string]: '90%', animationDelay: '.3s' }} /></div>
            <span className="sv-ab-val sv-ab-val-win">5.6×</span>
          </div>
          <div className="sv-ab-row">
            <span className="sv-ab-tag">Versio B</span>
            <div className="sv-bar"><div className="sv-bar-fill sv-bar-dim" style={{ ['--w' as string]: '52%', animationDelay: '.45s' }} /></div>
            <span className="sv-ab-val">3.4×</span>
          </div>
          <div className="sv-ab-row">
            <span className="sv-ab-tag">Versio C</span>
            <div className="sv-bar"><div className="sv-bar-fill sv-bar-dim" style={{ ['--w' as string]: '38%', animationDelay: '.6s' }} /></div>
            <span className="sv-ab-val">2.7×</span>
          </div>
          <div className="sv-ab-foot"><span className="sv-mini-dot" />Budjetti siirretty voittajalle</div>
        </div>
      </div>
    </div>
  )
}

function VariationGridVisual() {
  const items = [
    { win: true, m: '3.2 %', g: 'sv-th-1' },
    { win: false, m: '1.4 %', g: 'sv-th-2' },
    { win: false, m: '0.9 %', g: 'sv-th-3' },
    { win: false, m: '1.1 %', g: 'sv-th-4' },
  ]
  return (
    <div className="sv">
      <div className="sv-vargrid">
        {items.map((it, i) => (
          <div className={`sv-th ${it.g}${it.win ? ' sv-th-win' : ' sv-th-dim'}`} key={i}>
            {it.win && <span className="sv-th-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg>Voittaja</span>}
            <span className="sv-th-metric">CTR {it.m}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FunnelVisual() {
  const rows = [
    { label: 'Näytöt', val: '48 200', w: '100%', d: '.3s' },
    { label: 'Klikit', val: '1 540', w: '62%', d: '.45s' },
    { label: 'Ostot', val: '182', w: '28%', d: '.6s' },
  ]
  return (
    <div className="sv">
      <div className="sv-panel">
        <WindowTop title="Myyntisuppilo" />
        <div className="sv-funnel">
          {rows.map(r => (
            <div className="sv-funnel-row" key={r.label}>
              <span className="sv-funnel-label">{r.label}</span>
              <div className="sv-funnel-track">
                <div className="sv-funnel-bar" style={{ ['--w' as string]: r.w, animationDelay: r.d }}>
                  <span className="sv-funnel-val">{r.val}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="sv-funnel-foot"><span>Konversio</span><span className="sv-funnel-foot-strong">0,38 %</span></div>
        </div>
      </div>
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="sv">
      <div className="sv-panel">
        <WindowTop title="pixel.js" />
        <div className="sv-code">
          <div className="sv-code-line"><span className="c-mut">1</span><span className="c-key">fbq</span>(<span className="c-str">'init'</span>, <span className="c-num">1029…</span>)</div>
          <div className="sv-code-line"><span className="c-mut">2</span><span className="c-key">fbq</span>(<span className="c-str">'track'</span>, <span className="c-str">'PageView'</span>)</div>
          <div className="sv-code-line"><span className="c-mut">3</span><span className="c-key">fbq</span>(<span className="c-str">'track'</span>, <span className="c-str">'Purchase'</span>, &#123;</div>
          <div className="sv-code-line"><span className="c-mut">4</span>&nbsp;&nbsp;value: <span className="c-num">89.0</span>, currency: <span className="c-str">'EUR'</span></div>
          <div className="sv-code-line"><span className="c-mut">5</span>&#125;)</div>
        </div>
        <div className="sv-code-status">
          <span className="sv-px-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg></span>
          Pikseli havaittu · 4 tapahtumaa aktiivisena
        </div>
      </div>
    </div>
  )
}

export default function ServiceVisual({ slug, variant = 'a' }: { slug: string; variant?: 'a' | 'b' }) {
  if (variant === 'b') {
    switch (slug) {
      case 'meta-ads-manager': return <AbTestVisual />
      case 'mainokset': return <VariationGridVisual />
      case 'raportointi': return <FunnelVisual />
      case 'pikseli': return <CodeVisual />
      default: return null
    }
  }
  switch (slug) {
    case 'meta-ads-manager': return <AdsManagerVisual />
    case 'mainokset': return <CreativesVisual />
    case 'raportointi': return <ReportingVisual />
    case 'pikseli': return <PixelVisual />
    default: return null
  }
}
