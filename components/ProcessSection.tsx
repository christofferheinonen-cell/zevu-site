import RevealWrapper from './RevealWrapper'

const STEPS = [
  {
    num: '01',
    title: 'Kartoitus',
    desc: 'Tutustumme liiketoimintaasi, tavoitteisiisi ja kohdeyleisöösi. Ilmainen alkukartoitus.',
  },
  {
    num: '02',
    title: 'Suunnittelu',
    desc: 'Luomme visuaalisen suunnitelman, joka vastaa brändiäsi ja herättää luottamusta.',
  },
  {
    num: '03',
    title: 'Kehitys',
    desc: 'Rakennamme sivustosi nopeaksi, mobiiliyhteensopivaksi ja hakukoneoptimoiduksi.',
  },
  {
    num: '04',
    title: 'Julkaisu',
    desc: 'Julkaisemme sivustosi ja varmistamme sen toimivuuden. Jäämme tukemaan tarpeen mukaan.',
  },
]

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="process-intro">
            <div className="eyebrow"><span className="eyebrow-dot" />Prosessi</div>
            <h2 className="section-h">Näin projekti etenee</h2>
            <p className="section-sub">
              Selkeä prosessi, selkeät aikataulut. Tiedät aina missä mennään.
            </p>
          </div>
        </RevealWrapper>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <RevealWrapper key={step.num} delay={i as 0 | 1 | 2 | 3}>
              <div className="process-step">
                <div className="ps-num">{step.num}</div>
                <div className="ps-title">{step.title}</div>
                <div className="ps-desc">{step.desc}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
