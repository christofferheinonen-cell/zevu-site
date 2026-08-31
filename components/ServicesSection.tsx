import RevealWrapper from './RevealWrapper'
import { DesignVisual, TechVisual, SeoVisual, BrandVisual, ShopVisual, MaintenanceVisual } from './WebServiceVisuals'

const IconPencil = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const IconCode = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)
const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)
const IconStar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const IconBag = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)
const IconShield = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const SERVICES = [
  {
    Visual: DesignVisual,
    Icon: IconPencil,
    title: 'Verkkosivusuunnittelu',
    desc: 'Räätälöidyt, modernit sivut, jotka heijastavat brändiäsi ja houkuttelevat oikeat asiakkaat.',
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
    desc: 'Logo, väripaletti ja visuaalinen ilme, joka erottaa sinut kilpailijoista.',
  },
  {
    Visual: ShopVisual,
    Icon: IconBag,
    title: 'Verkkokauppa',
    desc: 'Myy tuotteitasi verkossa — selkeä, turvallinen ja konvertoiva verkkokauppa.',
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
            <h2 className="svc-heading">
              Kaikki mitä tarvitset<br />menestyäksesi verkossa.
            </h2>
            <p className="svc-sub">
              Täyden palvelun verkkosivuratkaisuja — suunnittelusta kehitykseen ja ylläpitoon.
            </p>
          </div>
        </RevealWrapper>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <RevealWrapper key={s.title} delay={(i % 3) as 0 | 1 | 2}>
              <div className="svc-card">
                <s.Visual />
                <div className="svc-card-body">
                  <div className="svc-card-icon"><s.Icon /></div>
                  <div className="svc-card-title">{s.title}</div>
                  <div className="svc-card-desc">{s.desc}</div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
