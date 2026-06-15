import FooterForm from './FooterForm'
import Link from 'next/link'
import { SERVICES } from '@/lib/services'

export default function Footer() {
  return (
    <>
      <div className="footer-dark">
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">Zevu</div>
              <p className="footer-tagline">Meta mainonta, joka toimii. Suomalaisille yrityksille, jotka haluavat kasvaa.</p>
              <div className="footer-contact">Sähköposti: <a href="mailto:hey@zevu.cc">hey@zevu.cc</a></div>
              <nav className="footer-links">
                <div className="footer-links-title">Palvelut</div>
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/${s.slug}`} className="footer-link">{s.navLabel}</Link>
                ))}
              </nav>
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
        <a href="mailto:hey@zevu.cc" className="footer-big-email">hey@zevu.cc</a>
      </div>
    </>
  )
}
