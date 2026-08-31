import React from 'react'

function Badge({ children, green }: { children: React.ReactNode; green?: boolean }) {
  return (
    <div className={`wv-badge${green ? ' wv-badge-green' : ''}`}>
      <span className="wv-dot" />
      {children}
    </div>
  )
}

export function DesignVisual() {
  return (
    <div className="wv wv-dark">
      <Badge>Muotoilu valmis</Badge>
      <div className="wv-browser">
        <div className="wv-bar">
          <span className="wv-bd r" /><span className="wv-bd y" /><span className="wv-bd g" />
          <span className="wv-url">yritys.fi</span>
        </div>
        <div className="wv-page">
          <div className="wv-sitenav">
            <div className="wv-sitelogo" />
            <div className="wv-sitelinks"><div /><div /><div /></div>
            <div className="wv-sitebtn" />
          </div>
          <div className="wv-sitehero">
            <div className="wv-tag" />
            <div className="wv-h1" />
            <div className="wv-h2" />
            <div className="wv-ctas"><div /><div /></div>
          </div>
          <div className="wv-sitecards"><div /><div /><div /></div>
        </div>
      </div>
    </div>
  )
}

export function TechVisual() {
  return (
    <div className="wv wv-dark">
      <div className="wv-editor">
        <div className="wv-bar">
          <span className="wv-bd r" /><span className="wv-bd y" /><span className="wv-bd g" />
          <span className="wv-url" style={{ flex: 1, textAlign: 'left', marginLeft: 8 }}>page.tsx</span>
        </div>
        <div className="wv-code">
          <div className="wv-line"><span className="ec-ln">1</span><span className="ec-kw">import</span><span className="ec-st"> {`{ useState }`}</span><span className="ec-dim"> from </span><span className="ec-st">&apos;react&apos;</span></div>
          <div className="wv-line wv-blank"><span className="ec-ln">2</span></div>
          <div className="wv-line"><span className="ec-ln">3</span><span className="ec-kw">export function</span><span className="ec-fn"> Hero</span><span className="ec-dim">()</span><span className="ec-dim"> {'{'}</span></div>
          <div className="wv-line wv-ind"><span className="ec-ln">4</span><span className="ec-kw">  return</span><span className="ec-tg"> &lt;section</span><span className="ec-at"> speed</span><span className="ec-dim">=</span><span className="ec-nm">100</span><span className="ec-tg"> /&gt;</span></div>
          <div className="wv-line"><span className="ec-ln">5</span><span className="ec-dim">{'}'}</span></div>
        </div>
        <div className="wv-build">
          <span className="wv-buildok" />
          Build 1.2s · Lighthouse 100
        </div>
      </div>
    </div>
  )
}

export function SeoVisual() {
  return (
    <div className="wv wv-light">
      <Badge green>Sijoitus #1 Googlessa</Badge>
      <div className="wv-serp">
        <div className="wv-serp-lbl">Hakutulokset</div>
        <div className="wv-serp-card">
          <div className="wv-serp-url">yritys.fi</div>
          <div className="wv-serp-title" />
          <div className="wv-serp-desc" />
          <div className="wv-serp-desc wv-serp-short" />
        </div>
      </div>
      <div className="wv-chart">
        {[30, 38, 34, 52, 48, 68, 62, 88].map((h, i) => (
          <div
            key={i}
            className="wv-bar-col"
            style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }}
          />
        ))}
      </div>
    </div>
  )
}

const SWATCHES = ['#0A0A0A', '#FF4713', '#E8E8E4', '#7C7C7C', '#FFFFFF']

export function BrandVisual() {
  return (
    <div className="wv wv-cream">
      <div className="wv-brandkit">
        <div className="wv-swatches">
          {SWATCHES.map((c, i) => (
            <div
              key={i}
              className="wv-swatch"
              style={{
                background: c,
                border: c === '#FFFFFF' ? '1px solid #D8D8D4' : 'none',
              }}
            />
          ))}
        </div>
        <div className="wv-typerow">
          <div className="wv-bigaa">Aa</div>
          <div className="wv-weights">
            <div style={{ fontWeight: 400, fontSize: 11, color: 'rgba(10,10,10,0.4)' }}>Regular</div>
            <div style={{ fontWeight: 600, fontSize: 11, color: 'rgba(10,10,10,0.6)' }}>Semibold</div>
            <div style={{ fontWeight: 800, fontSize: 11, color: 'rgba(10,10,10,0.85)' }}>Bold</div>
          </div>
        </div>
        <div className="wv-logomock">
          <div className="wv-logomark" />
          <div className="wv-logotxt" />
        </div>
      </div>
      <Badge>Brändiohjeisto valmis</Badge>
    </div>
  )
}

const SHOP_ITEMS = ['#F0F0EC', '#FFE8E0', '#E8EDFF', '#E0F4E8']

export function ShopVisual() {
  return (
    <div className="wv wv-light">
      <div className="wv-shopgrid">
        {SHOP_ITEMS.map((bg, i) => (
          <div key={i} className="wv-shopitem">
            <div className="wv-shopimg" style={{ background: bg }} />
            <div className="wv-shopname" />
            <div className="wv-shopprice" />
          </div>
        ))}
      </div>
      <div className="wv-addcart">Lisää ostoskoriin</div>
    </div>
  )
}

const STATUS_ROWS = ['Verkkosivusto', 'Tietokanta', 'CDN & Varmuuskopiot', 'SSL-sertifikaatti']

export function MaintenanceVisual() {
  return (
    <div className="wv wv-dark">
      <div className="wv-status">
        <div className="wv-status-head">
          <span className="wv-status-title">Järjestelmän tila</span>
          <span className="wv-status-ok"><span className="wv-dot wv-dot-green" />Kaikki toimii</span>
        </div>
        {STATUS_ROWS.map((name) => (
          <div key={name} className="wv-status-row">
            <span className="wv-status-name">{name}</span>
            <span className="wv-status-chip">Kunnossa</span>
          </div>
        ))}
        <div className="wv-uptime">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="wv-upbar"
              style={{ opacity: i < 2 ? 0.25 : 1 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
