import Link from 'next/link'
import Clock from './Clock'
import { SECTORS } from '@/lib/site-content'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/seo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="zv-foot">
      <div className="zv-wrap">
        <div className="zv-foot-grid">
          <div>
            <p className="zv-foot-tag">
              Websites for the places people <em>love</em> to eat &amp; drink.
            </p>
          </div>
          <div>
            <h4>Who it’s for</h4>
            <ul>
              {SECTORS.map(s => (
                <li key={s.slug}><Link href={`/${s.slug}`}>{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/#prices">Prices</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Say hola</h4>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              {WHATSAPP_NUMBER ? (
                <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
              ) : null}
              <li style={{ marginTop: 14 }}><Clock label="Local time in Spain" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="zv-foot-mark" aria-hidden="true">zevu<i>.</i></div>
      <div className="zv-wrap">
        <div className="zv-foot-base">
          <span>© {year} Zevu. Designed &amp; built in Spain.</span>
          <span>English · Español soon</span>
        </div>
      </div>
    </footer>
  )
}
