import { DesignVisual, TechVisual, SeoVisual, BrandVisual, MaintenanceVisual } from './WebServiceVisuals'
import RevealWrapper from './RevealWrapper'

const IconPencil = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const IconCode = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)
const IconSearch = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const SERVICES = [
  {
    Visual: DesignVisual,
    Icon: IconPencil,
    title: 'Verkkosivusuunnittelu',
    desc: 'Räätälöidyt, modernit sivut jotka heijastavat brändiäsi ja houkuttelevat oikeat asiakkaat.',
  },
  {
    Visual: TechVisual,
    Icon: IconCode,
    title: 'Tekninen kehitys',
    desc: 'Nopeat, mobiiliyhteensopivat sivut jotka toimivat moitteettomasti kaikilla laitteilla.',
  },
  {
    Visual: SeoVisual,
    Icon: IconSearch,
    title: 'Hakukoneoptimointi',
    desc: 'Löydettävyys Googlesta oikeilla hakusanoilla — enemmän kävijöitä ja asiakkaita.',
  },
  {
    Visual: BrandVisual,
    Icon: IconStar,
    title: 'Brändi-identiteetti',
    desc: 'Logo, väripaletti ja visuaalinen ilme joka erottaa sinut kilpailijoista.',
  },
  {
    Visual: MaintenanceVisual,
    Icon: IconShield,
    title: 'Ylläpito & tuki',
    desc: 'Kuukausittainen huolenpito: päivitykset, tietoturva ja tekninen tuki.',
  },
]

export default function ServicesSection() {
  return (
    <section className="svc-section" id="palvelut">
      <div className="wrap">
        <RevealWrapper>
          <div className="svc-intro">
            <div className="section-badge">001/ Palvelut</div>
            <h2 className="svc-heading">Kaikki mitä tarvitset<br />menestyäksesi verkossa.</h2>
            <p className="svc-sub">Täyden palvelun verkkosivuratkaisuja — suunnittelusta kehitykseen ja ylläpitoon.</p>
          </div>
        </RevealWrapper>

        <div className="svc-stack">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="svc-stack-card" style={{ zIndex: i + 1 }}>
              <div className="svc-card-visual"><s.Visual /></div>
              <div className="svc-card-body">
                <span className="svc-card-num">0{i + 1}</span>
                <div className="svc-card-icon"><s.Icon /></div>
                <div className="svc-card-title">{s.title}</div>
                <div className="svc-card-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
