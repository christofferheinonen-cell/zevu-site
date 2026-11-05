import type { ConceptKey, SiteContent } from '@/lib/content'
import Tilt from './Tilt'
import { SpainTime } from './Clock'

function Oleaje() {
  return (
    <div className="c-ol">
      <div className="c-ol-nav">
        <span className="c-ol-logo">Oleaje</span>
        <nav><span>Carta</span><span>Bodega</span><span>Grupos</span><span>EN / ES</span></nav>
        <span className="c-ol-btn">Reservar</span>
      </div>
      <div className="c-ol-hero">
        <div>
          <div className="c-ol-h">Del mar,<br /><em>a la mesa.</em></div>
          <p className="c-ol-p">Fish from the morning boats, grilled over oak. Open Tuesday to Sunday, lunch and dinner.</p>
        </div>
        <div className="c-ol-arch"><div className="c-ol-sun" /><div className="c-ol-waves" /></div>
      </div>
      <div className="c-ol-strip">
        <b>Hoy</b>
        <span>Pulpo a la brasa <i>18</i></span>
        <span>Atún rojo <i>24</i></span>
        <span>Ortiguillas <i>12</i></span>
        <span>Arroz negro <i>21</i></span>
      </div>
    </div>
  )
}

function Nocturno() {
  return (
    <div className="c-no">
      <div className="c-no-nav"><span>Drinks</span><span><b>●</b> Open till 03:00</span><span>Book a table</span></div>
      <div className="c-no-main">
        <div>
          <div className="c-no-h">Noc<br /><span>turno</span></div>
          <div className="c-no-tonight"><i /> Tonight 22:00 · Vermut &amp; vinyl</div>
        </div>
        <div className="c-no-badge">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs><path id="c-no-c" d="M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0" /></defs>
            <text fontSize="9" letterSpacing="3" fontWeight="700" fill="#0f0d0c" fontFamily="system-ui, sans-serif">
              <textPath href="#c-no-c">HAPPY HOUR · 19:00–21:00 · </textPath>
            </text>
          </svg>
          <b>2×1</b>
        </div>
      </div>
      <div className="c-no-week">
        <div>Thu<b>Jazz trio</b></div>
        <div>Fri<b>DJ Lola</b></div>
        <div>Sat<b>Mezcal night</b></div>
        <div>Sun<b>Vermut 13h</b></div>
      </div>
    </div>
  )
}

function Almendro() {
  const board = [
    { t: '07:30', what: 'Doors open', status: 'On time' },
    { t: '08:00', what: 'Croissants, out of the oven', status: 'Boarding' },
    { t: '09:30', what: 'Banana bread', status: 'On time' },
    { t: '11:00', what: 'Pour-over: Huila, Colombia', status: 'Delayed 5′' },
    { t: '15:00', what: 'Last call', status: 'Final' },
  ]
  return (
    <div className="c-al">
      <div className="c-al-top">
        <span className="c-al-logo">almendro<i>®</i></span>
        <span>Coffee &amp; departures</span>
        <span>Calle del Olmo 12</span>
      </div>
      <div className="c-al-main">
        <div className="c-al-clock">
          <span className="c-al-now">Now serving</span>
          <span className="c-al-time" data-t="08:47"><SpainTime /></span>
          <span className="c-al-dot" aria-hidden="true" />
        </div>
        <div className="c-al-board">
          <div className="c-al-row c-al-head"><span>Time</span><span>Departure</span><span>Status</span></div>
          {board.map(r => (
            <div key={r.t} className="c-al-row">
              <span>{r.t}</span>
              <span>{r.what}</span>
              <span className={r.status === 'Boarding' ? 'is-hot' : ''}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="c-al-foot"><span>Order ahead →</span><span>Oat milk, no extra charge</span></div>
    </div>
  )
}

function Raiz() {
  const wines = [
    { n: 'Xarel·lo brisat', r: 'Penedès', m: [3, 4, 1] },
    { n: 'Garnacha de pie franco', r: 'Gredos', m: [4, 2, 0] },
    { n: 'Ancestral rosado', r: 'Jumilla', m: [2, 3, 5] },
  ]
  return (
    <div className="c-rz">
      <div className="c-rz-side" aria-hidden="true">RAÍZ</div>
      <div className="c-rz-stain" aria-hidden="true" />
      <div className="c-rz-body">
        <div className="c-rz-top"><span>Vino natural · Barrio</span><span>Abierto 18–01</span></div>
        <div className="c-rz-label">
          <span className="c-rz-small">Cosecha 2026 · Embotellado en origen</span>
          <div className="c-rz-h">Wine with<br /><em>dirt</em> on it.</div>
          <span className="c-rz-small">No sulphites added · Lots of opinions</span>
        </div>
        <div className="c-rz-list">
          <div className="c-rz-key"><span /><span>Body</span><span>Funk</span><span>Fizz</span></div>
          {wines.map(w => (
            <div key={w.n} className="c-rz-wine">
              <span><b>{w.n}</b> {w.r}</span>
              {w.m.map((v, i) => (
                <span key={i} className="c-rz-meter">{[0, 1, 2, 3, 4].map(d => <i key={d} className={d < v ? 'on' : ''} />)}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OlaOla() {
  return (
    <div className="c-oo">
      <div className="c-oo-sun" aria-hidden="true" />
      <div className="c-oo-top">
        <span className="c-oo-logo">ola ola</span>
        <span className="c-oo-pill">☀ Sunset in 2h 14m</span>
      </div>
      <div className="c-oo-h">Feet in<br />the sand,<br />drink in<br />the hand.</div>
      <div className="c-oo-cards">
        <div><b>12</b>sunbeds free</div>
        <div><b>28°</b>water 22°</div>
        <div><b>DJ</b>from 19:00</div>
      </div>
    </div>
  )
}

function Mies() {
  const loaves = [
    { n: 'Hogaza de centeno', p: '6.50', out: false },
    { n: 'Pan de cristal', p: '4.20', out: true },
    { n: 'Ensaimada', p: '3.10', out: false },
    { n: 'Barra de masa madre', p: '2.40', out: true },
  ]
  return (
    <div className="c-mi">
      <div className="c-mi-top"><span className="c-mi-logo">MIES</span><span>Horno de leña · desde 05:00</span></div>
      <div className="c-mi-main">
        <div className="c-mi-count">
          <span className="c-mi-big">14</span>
          <span className="c-mi-cap">loaves left<br />today</span>
          <span className="c-mi-stamp">Recién<br />hecho</span>
        </div>
        <div className="c-mi-grid">
          {loaves.map((l, i) => (
            <div key={l.n} className={`c-mi-loaf${l.out ? ' is-out' : ''}`}>
              <span className={`c-mi-bread c-mi-b${i}`} aria-hidden="true" />
              <span className="c-mi-name">{l.n}</span>
              <span className="c-mi-price">€{l.p}</span>
              {l.out ? <span className="c-mi-sold">Agotado</span> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const RENDER: Record<ConceptKey, () => React.ReactElement> = { oleaje: Oleaje, nocturno: Nocturno, almendro: Almendro, raiz: Raiz, olaola: OlaOla, mies: Mies }

export function ConceptFrame({ k, c }: { k: ConceptKey; c: SiteContent }) {
  const concept = c.concepts.find(x => x.key === k)!
  const Body = RENDER[k]
  return (
    <Tilt className="zv-frame">
      <div className="zv-frame-bar" aria-hidden="true">
        <span className="zv-frame-dots"><i /><i /><i /></span>
        <span className="zv-frame-url">{concept.name.toLowerCase()} · {c.workSection.conceptLabel}</span>
      </div>
      <div className="zv-frame-body" role="img" aria-label={c.workSection.frameAria(concept.name, concept.kind)}>
        <Body />
      </div>
    </Tilt>
  )
}

export default function Concepts({ c }: { c: SiteContent }) {
  return (
    <div className="zv-concepts">
      {c.concepts.map((x, i) => (
        <article key={x.key} className={`zv-concept zv-concept--${i}`}>
          <div data-rv=""><ConceptFrame k={x.key} c={c} /></div>
          <div className="zv-concept-meta" data-rv="" style={{ ['--d' as string]: 120 }}>
            <div className="zv-concept-line">
              <span className="zv-label">0{i + 1}</span>
              <h3 className="zv-h3">{x.name}</h3>
              <span className="zv-concept-kind">{x.kind}</span>
            </div>
            <p>{x.note}</p>
            <div className="zv-concept-tags">
              {x.tags.map(t => <span key={t} className="zv-tag">{t}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
