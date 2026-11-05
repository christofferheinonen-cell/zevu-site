import type { ConceptKey } from '@/lib/site-content'
import { CONCEPTS } from '@/lib/site-content'
import Tilt from './Tilt'

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
  return (
    <div className="c-al">
      <div className="c-al-nav">
        <span className="c-al-logo">almendro</span>
        <span className="c-al-open"><i /> Open now · until 15:00</span>
      </div>
      <div className="c-al-grid">
        <div>
          <div className="c-al-h">Good coffee,<br /><em>slow</em> mornings.</div>
          <div className="c-al-btns"><span>Order ahead</span><span>See the menu</span></div>
        </div>
        <div className="c-al-cards">
          <div className="c-al-cup"><span>Flat white · 2.80</span></div>
          <div className="c-al-bean">Bean of the week<b>Huila, Colombia</b>Panela, orange, cacao nib.</div>
        </div>
      </div>
    </div>
  )
}

const RENDER: Record<ConceptKey, () => React.ReactElement> = { oleaje: Oleaje, nocturno: Nocturno, almendro: Almendro }

export function ConceptFrame({ k }: { k: ConceptKey }) {
  const c = CONCEPTS.find(x => x.key === k)!
  const Body = RENDER[k]
  return (
    <Tilt className="zv-frame">
      <div className="zv-frame-bar" aria-hidden="true">
        <span className="zv-frame-dots"><i /><i /><i /></span>
        <span className="zv-frame-url">{c.name.toLowerCase()} · concept</span>
      </div>
      <div className="zv-frame-body" role="img" aria-label={`Concept website for ${c.name}, a ${c.kind.toLowerCase()}`}>
        <Body />
      </div>
    </Tilt>
  )
}

const TAGS: Record<ConceptKey, string[]> = {
  oleaje: ['Bookings', 'Daily menu', 'EN / ES'],
  nocturno: ['Events calendar', 'Happy hour', 'Group bookings'],
  almendro: ['Live hours', 'Order ahead', 'Bean shop'],
}

export default function Concepts() {
  return (
    <div className="zv-concepts">
      {CONCEPTS.map((c, i) => (
        <article key={c.key} className="zv-concept">
          <div data-rv=""><ConceptFrame k={c.key} /></div>
          <div className="zv-concept-meta" data-rv="" style={{ ['--d' as string]: 150 }}>
            <span className="zv-label" style={{ color: 'var(--ink-3)' }}>0{i + 1} · Concept study</span>
            <h3 className="zv-h3">{c.name}</h3>
            <p><strong style={{ color: 'var(--ink)' }}>{c.kind}.</strong> {c.note}</p>
            <div className="zv-concept-tags">
              {TAGS[c.key].map(t => <span key={t} className="zv-tag">{t}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
