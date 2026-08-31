import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/seo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <div className="footer-logo">Zevu</div>
            <div className="footer-tagline">
              Modernit verkkosivut suomalaisille pk-yrityksille — nopeasti ja ammattimaisesti.
            </div>
            <div className="footer-email">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          {/* Palvelut */}
          <div>
            <div className="footer-col-title">Palvelut</div>
            <div className="footer-col-links">
              <a href="/#palvelut" className="footer-link">Verkkosivusuunnittelu</a>
              <a href="/#palvelut" className="footer-link">Tekninen kehitys</a>
              <a href="/#palvelut" className="footer-link">Hakukoneoptimointi</a>
              <a href="/#palvelut" className="footer-link">Verkkokauppa</a>
              <a href="/#palvelut" className="footer-link">Brändi-identiteetti</a>
            </div>
          </div>

          {/* Yritys */}
          <div>
            <div className="footer-col-title">Yritys</div>
            <div className="footer-col-links">
              <a href="/#referenssit" className="footer-link">Referenssit</a>
              <a href="/#hinnat" className="footer-link">Hinnat</a>
              <a href="/#faq" className="footer-link">FAQ</a>
              <Link href="/blog" className="footer-link">Blogi</Link>
              <a href="/#ota-yhteytta" className="footer-link">Ota yhteyttä</a>
            </div>
          </div>

          {/* Ota yhteyttä */}
          <div>
            <div className="footer-col-title">Yhteystiedot</div>
            <div className="footer-col-links">
              <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link">{CONTACT_EMAIL}</a>
              <span className="footer-link" style={{ cursor: 'default' }}>Suomi</span>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <p>© {year} Zevu. Kaikki oikeudet pidätetään.</p>
          <div className="footer-bar-links">
            <a href="#" className="footer-bar-link">Tietosuoja</a>
            <a href="#" className="footer-bar-link">Evästeet</a>
          </div>
        </div>
      </div>

      <div className="footer-big">
        <div className="footer-big-label">Valmis aloittamaan?</div>
        <a href={`mailto:${CONTACT_EMAIL}`} className="footer-big-email">{CONTACT_EMAIL}</a>
      </div>
    </footer>
  )
}
