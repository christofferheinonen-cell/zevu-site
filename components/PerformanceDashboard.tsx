'use client'
import { useState } from 'react'
import RevealWrapper from './RevealWrapper'

const PERF_DATA: Record<string, {
  bar: string
  c1h: string; c1p: string; c1v: string; c1l: string
  c2h: string; c2p: string; c2v: string; c2l: string
  mh: string; mp: string
  chart: number[]
  s1v: string; s1l: string; s2v: string; s2l: string; s3v: string; s3l: string
}> = {
  kohdentaminen: {
    bar: 'Meta Business Suite — Kampanjanäkymä',
    c1h: 'Hyvinvointi-kampanja', c1p: 'Naiset 35–64 · Helsinki, Espoo, Vantaa', c1v: '12 400', c1l: 'tavoitettu tällä viikolla',
    c2h: 'Ravintola-kampanja', c2p: '25–55 v. · 5 km säde ravintolasta', c2v: '8 100', c2l: 'tavoitettu tällä viikolla',
    mh: 'Tavoittavuus kasvaa joka viikko.', mp: 'Optimoitu kohdentaminen tuo oikeat asiakkaat — ei pelkkiä klikkejä.',
    chart: [30, 40, 35, 52, 60, 75, 82, 90, 100],
    s1v: '26.2k', s1l: 'Tavoitettu / viikko', s2v: '€0.18', s2l: 'Hinta per klikkaus', s3v: '+142%', s3l: 'Kasvu / kk'
  },
  luova: {
    bar: 'Meta Business Suite — Luovat',
    c1h: 'Video — pystysuunta', c1p: '6 sek hook · tekstitykset', c1v: '4.8×', c1l: 'ROAS testijaksolla',
    c2h: 'Still-kuva — A/B', c2p: '3 variaatiota · 1 voittaja', c2v: '0.07€', c2l: 'CPC parhaalla',
    mh: 'Oikea kreatiivi tekee 80 % tuloksesta.', mp: 'Testaamme 3–5 variaatiota per ad set ja skaalaamme vain voittajia.',
    chart: [22, 38, 50, 45, 68, 72, 80, 95, 100],
    s1v: '5', s1l: 'Variaatiota / kampanja', s2v: '31%', s2l: 'Alempi CPA videolla', s3v: '1.7s', s3l: 'Hookin pituus'
  },
  budjetti: {
    bar: 'Meta Business Suite — Budjetti',
    c1h: 'Konversiokampanja', c1p: '70 % budjetista · paras tarjous', c1v: '700€', c1l: 'kuukausibudjetti',
    c2h: 'Uudelleenkohdentaminen', c2p: '20 % budjetista · 30 pv ikkuna', c2v: '200€', c2l: 'kuukausibudjetti',
    mh: 'Vähemmän on usein enemmän.', mp: '70/20/10-jako tuottaa keskimäärin 40 % parempaa tehoa pienellä budjetilla.',
    chart: [60, 55, 58, 62, 70, 68, 75, 72, 82],
    s1v: '10€', s1l: 'Min. päiväbudjetti / ad set', s2v: '7 pv', s2l: 'Oppimisjakso', s3v: '40%', s3l: 'Säästö ka.'
  },
  raportointi: {
    bar: 'Meta Business Suite — Raportit',
    c1h: 'Viikkoraportti', c1p: 'Toimitetaan joka maanantai', c1v: '52', c1l: 'raporttia / vuosi',
    c2h: 'Kuukausikatsaus', c2p: 'Strategiapuhelu mukana', c2v: '12', c2l: 'katsausta / vuosi',
    mh: 'Selkeät raportit. Ei numeroviidakkoa.', mp: 'Saat tietää mikä toimi, mikä ei, ja mitä teemme seuraavaksi — selvällä suomella.',
    chart: [40, 45, 48, 55, 60, 68, 76, 84, 92],
    s1v: '7 pv', s1l: 'Raportointiväli', s2v: '24h', s2l: 'Vastausaika', s3v: '100%', s3l: 'Läpinäkyvyys'
  }
}

const TABS = [
  { key: 'kohdentaminen', label: 'Kohdentaminen' },
  { key: 'luova', label: 'Luova suunnittelu' },
  { key: 'budjetti', label: 'Budjetointi' },
  { key: 'raportointi', label: 'Raportointi' },
]

function barClass(v: number) {
  if (v < 50) return 'big-bar bb-lo'
  if (v < 75) return 'big-bar bb-mid'
  return 'big-bar bb-hi'
}

export default function PerformanceDashboard() {
  const [active, setActive] = useState('kohdentaminen')
  const d = PERF_DATA[active]

  return (
    <div className="wrap">
      <RevealWrapper className="perf-section">
        <div className="perf-intro">
          <div className="eyebrow">Rakennettu tuloksille</div>
          <div className="section-h">Oikea viesti. Oikea ihminen. Oikeaan aikaan.</div>
          <p className="section-sub">Ei geneerisiä mainoksia. Jokaiselle asiakkaalle räätälöity lähestymistapa.</p>
        </div>
        <div className="perf-tabs-wrap">
          <div className="perf-tabs">
            {TABS.map(t => (
              <button
                key={t.key}
                className={`ptab${active === t.key ? ' active' : ''}`}
                onClick={() => setActive(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="perf-visual">
          <div className="perf-topbar">
            <div className="perf-dots">
              <div className="pd pd-r"></div>
              <div className="pd pd-y"></div>
              <div className="pd pd-g"></div>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--sub)', fontWeight: 500, marginLeft: '12px' }}>{d.bar}</span>
          </div>
          <div className="perf-body">
            <div>
              <div className="perf-card-sm">
                <h4>{d.c1h}</h4>
                <p>{d.c1p}</p>
                <div className="perf-metric">
                  <div className="perf-metric-val">{d.c1v}</div>
                  <div className="perf-metric-label">{d.c1l}</div>
                </div>
              </div>
              <div className="perf-card-sm">
                <h4>{d.c2h}</h4>
                <p>{d.c2p}</p>
                <div className="perf-metric">
                  <div className="perf-metric-val">{d.c2v}</div>
                  <div className="perf-metric-label">{d.c2l}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="perf-main-title">{d.mh}</div>
              <div className="perf-main-sub">{d.mp}</div>
              <div className="big-chart">
                {d.chart.map((v, i) => (
                  <div key={i} className={barClass(v)} style={{ height: `${v}%` }}></div>
                ))}
              </div>
              <div className="stat-row">
                <div className="stat-item"><div className="stat-item-val">{d.s1v}</div><div className="stat-item-label">{d.s1l}</div></div>
                <div className="stat-item"><div className="stat-item-val">{d.s2v}</div><div className="stat-item-label">{d.s2l}</div></div>
                <div className="stat-item"><div className="stat-item-val">{d.s3v}</div><div className="stat-item-label">{d.s3l}</div></div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
