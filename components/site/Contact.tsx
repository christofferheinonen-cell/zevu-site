import { CONTACT } from '@/lib/site-content'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/seo'
import Lines from './Lines'
import ContactForm from './ContactForm'

export default function Contact({
  defaultType,
  pkg,
  as = 'h2',
}: {
  defaultType?: string
  pkg?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <section className="zv-section zv-contact" id="contact" aria-labelledby="contact-h">
      <div className="zv-wrap zv-contact-grid">
        <div>
          <span className="zv-eyebrow">{CONTACT.eyebrow}</span>
          <Lines as={as} id="contact-h" className="zv-h2" lines={[CONTACT.title[0], <em key="e">{CONTACT.title[1]}</em>]} />
          <p className="zv-contact-body" data-rv="">{CONTACT.body}</p>
          <div className="zv-contact-direct" data-rv="">
            <small>Or skip the form</small>
            <a href={`mailto:${CONTACT_EMAIL}`} className="zv-link" style={{ fontSize: 'inherit', fontWeight: 400 }}>{CONTACT_EMAIL}</a>
            {WHATSAPP_NUMBER ? (
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="zv-link" style={{ fontSize: 'inherit', fontWeight: 400 }}>
                WhatsApp us
              </a>
            ) : null}
          </div>
        </div>
        <div data-rv="" style={{ ['--d' as string]: 150 }}>
          <ContactForm defaultType={defaultType} pkg={pkg} />
        </div>
      </div>
    </section>
  )
}
