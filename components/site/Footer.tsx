import Link from 'next/link'
import Clock from './Clock'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/seo'
import { PATH_PAIRS, pathFor, type SiteContent } from '@/lib/content'

export default function Footer({ c }: { c: SiteContent }) {
  const year = new Date().getFullYear()
  const home = pathFor(c.locale, 'home')
  const anchor = (id: string) => `${home === '/' ? '' : home}/#${id}`
  return (
    <footer className="zv-foot">
      <div className="zv-wrap">
        <div className="zv-foot-grid">
          <div>
            <p className="zv-foot-tag">
              {c.footer.tag[0]} <em>{c.footer.tag[1]}</em> {c.footer.tag[2]}
            </p>
          </div>
          <div>
            <h4>{c.footer.whoFor}</h4>
            <ul>
              {c.sectors.map(s => (
                <li key={s.key}><Link href={pathFor(c.locale, s.key)}>{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{c.footer.studio}</h4>
            <ul>
              <li><Link href={anchor('work')}>{c.nav.links.work}</Link></li>
              <li><Link href={anchor('prices')}>{c.nav.links.prices}</Link></li>
              <li><Link href={anchor('process')}>{c.footer.process}</Link></li>
              <li><Link href={pathFor(c.locale, 'blog')}>{c.blog.nav}</Link></li>
              <li><Link href={pathFor(c.locale, 'contact')}>{c.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{c.footer.sayHi}</h4>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              {WHATSAPP_NUMBER ? (
                <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">{c.footer.whatsapp}</a></li>
              ) : null}
              <li style={{ marginTop: 14 }}><Clock label={c.footer.localTime} /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="zv-foot-mark" aria-hidden="true">zevu<i>.</i></div>
      <div className="zv-wrap">
        <div className="zv-foot-base">
          <span>{c.footer.rights(year)}</span>
          <span className="zv-foot-lang">
            {c.locale === 'en'
              ? <><span>English</span> · <Link href={PATH_PAIRS[0][1]} hrefLang="es" lang="es">Español</Link></>
              : <><Link href={PATH_PAIRS[0][0]} hrefLang="en" lang="en">English</Link> · <span>Español</span></>}
          </span>
        </div>
      </div>
    </footer>
  )
}
