import type { SiteContent } from '@/lib/content'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/seo'
import Lines from './Lines'
import ContactForm from './ContactForm'

export default function Contact({
  c,
  defaultType,
  pkg,
  as = 'h2',
}: {
  c: SiteContent
  defaultType?: string
  pkg?: string
  as?: 'h1' | 'h2'
}) {
  const t = c.contact
  return (
    <section className="zv-section zv-contact" id="contact" aria-labelledby="contact-h">
      <div className="zv-wrap zv-contact-grid">
        <div>
          <span className="zv-eyebrow">{t.eyebrow}</span>
          <Lines as={as} id="contact-h" className="zv-h2" lines={[t.title[0], <em key="e">{t.title[1]}</em>]} />
          <p className="zv-contact-body" data-rv="">{t.body}</p>
          <div className="zv-contact-direct" data-rv="">
            <small>{t.skip}</small>
            <a href={`mailto:${CONTACT_EMAIL}`} className="zv-link" style={{ fontSize: 'inherit', fontWeight: 400 }}>{CONTACT_EMAIL}</a>
            {WHATSAPP_NUMBER ? (
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="zv-link" style={{ fontSize: 'inherit', fontWeight: 400 }}>
                {t.whatsapp}
              </a>
            ) : null}
          </div>
        </div>
        <div data-rv="" style={{ ['--d' as string]: 150 }}>
          <ContactForm t={t} defaultType={defaultType} pkg={pkg} />
        </div>
      </div>
    </section>
  )
}
