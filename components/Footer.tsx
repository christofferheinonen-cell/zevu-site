import FooterForm from './FooterForm'

export default function Footer() {
  return (
    <>
      <div className="footer-dark">
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">Zevu</div>
              <p className="footer-tagline">Meta mainonta, joka toimii. Suomalaisille yrityksille, jotka haluavat kasvaa.</p>
              <div className="footer-contact">Sähköposti: <a href="mailto:hei@zevu.fi">hei@zevu.fi</a></div>
            </div>
            <div>
              <div className="footer-form-title">Aloita tänään.</div>
              <FooterForm />
            </div>
          </div>
          <div className="footer-bar">
            <p>© 2026 Zevu</p>
            <p>Helsinki, Suomi</p>
          </div>
        </div>
      </div>
      <div className="footer-big">
        <a href="mailto:hei@zevu.fi" className="footer-big-email">hei@zevu.fi</a>
      </div>
    </>
  )
}
