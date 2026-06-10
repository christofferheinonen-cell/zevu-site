import RevealWrapper from './RevealWrapper'
import WizardForm from './WizardForm'

export default function DarkCTA() {
  return (
    <div className="dark-section" id="cta">
      <div className="wrap">
        <RevealWrapper className="section dark-inner">
          <WizardForm />
        </RevealWrapper>
      </div>
    </div>
  )
}
