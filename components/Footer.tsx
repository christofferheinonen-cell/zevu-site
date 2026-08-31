import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/seo'

const MARQUEE_TEXT = 'Ota yhteyttä'

export default function Footer() {
  const year = new Date().getFullYear()
  const items = Array.from({ length: 8 }, (_, i) => i)

  return (
    <footer className="footer">
      {/* Scrolling CTA marquee */}
      <div className="footer-marquee">
        <div className="fm-track">
          {[...items, ...items].map((_, i) => (
            <a key={i} href="/#ota-yhteytta" className="fm-item">
              <span className="fm-arrow">↗</span>
              {MARQUEE_TEXT}
            </a>
          ))}
        </div>
      </div>

      {/* Footer columns */}
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Zevu</div>
            <div className="footer-tagline">
              Modernit verkkosivut suomalaisille pk-yrityksille — nopeasti ja ammattimaisesti.
            </div>
            <div className="footer-email">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

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

          <div>
            <div className="footer-col-title">Yritys</div>
            <div className="footer-col-links">
              <a href="/#prosessi" className="footer-link">Prosessi</a>
              <a href="/#hinnat" className="footer-link">Hinnat</a>
              <a href="/#faq" className="footer-link">FAQ</a>
              <Link href="/blog" className="footer-link">Blogi</Link>
              <a href="/#ota-yhteytta" className="footer-link">Ota yhteyttä</a>
            </div>
          </div>

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

      {/* Giant wordmark */}
      <div className="footer-wordmark">ZEVU</div>
    </footer>
  )
}
