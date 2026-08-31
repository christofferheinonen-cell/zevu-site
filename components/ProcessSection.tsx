import Link from 'next/link'
import RevealWrapper from './RevealWrapper'

const STEPS = [
  {
    num: '01',
    weeks: 'Viikko 1',
    title: 'Kartoitus',
    desc: 'Tutustumme liiketoimintaasi ja tavoitteisiisi. Ilmainen alkukartoitus — ei sitoumuksia.',
    active: true,
  },
  {
    num: '02',
    weeks: 'Viikko 2',
    title: 'Suunnittelu',
    desc: 'Luomme visuaalisen suunnitelman, joka vastaa brändiäsi ja houkuttelee oikeat asiakkaat.',
  },
  {
    num: '03',
    weeks: 'Viikot 3–4',
    title: 'Kehitys',
    desc: 'Rakennamme nopean, mobiiliyhteensopivan ja hakukoneoptimoidun sivuston.',
  },
  {
    num: '04',
    weeks: 'Viikko 5',
    title: 'Julkaisu',
    desc: 'Julkaisemme sivuston ja tuemme sinua aina tarpeen mukaan jatkossa.',
  },
]

export default function ProcessSection() {
  return (
    <section className="proc-section" id="prosessi">
      <div className="wrap">
        <RevealWrapper>
          <div className="proc-intro">
            <div className="section-badge">002/ Prosessi</div>
            <h2 className="proc-heading">
              Ideasta valmiiseen sivustoon.
            </h2>
            <p className="proc-sub">
              Selkeä prosessi, selkeät aikataulut.
              Tiedät aina missä mennään — alusta loppuun.
            </p>
          </div>
        </RevealWrapper>

        <div className="proc-steps">
          {STEPS.map((s, i) => (
            <RevealWrapper key={s.num} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className={`proc-step${s.active ? ' active' : ''}`}>
                <div className="proc-step-week">{s.weeks}</div>
                <div className="proc-step-num">{s.num}</div>
                <div className="proc-step-title">{s.title}</div>
                <div className="proc-step-desc">{s.desc}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="proc-cta">
          <Link href="/#ota-yhteytta" className="btn-accent" style={{ marginTop: 0 }}>
            Aloita projekti →
          </Link>
        </div>
      </div>
    </section>
  )
}
