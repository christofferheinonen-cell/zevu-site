import Link from 'next/link'
import Lines from '@/components/site/Lines'
import Button from '@/components/site/Button'
import Faq from '@/components/site/Faq'
import Contact from '@/components/site/Contact'
import JsonLd from '@/components/JsonLd'
import { ConceptFrame } from '@/components/site/Concepts'
import { Arrow, SectorIllustration } from '@/components/site/Icons'
import { getContent, pathFor, type Locale, type Sector } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

export default function SectorView({ locale, sector: s }: { locale: Locale; sector: Sector }) {
  const c = getContent(locale)
  const t = c.sectorPage
  const concept = c.concepts.find(x => x.key === s.concept)!
  const others = c.sectors.filter(x => x.key !== s.key)
  const home = pathFor(locale, 'home')
  const url = absoluteUrl(pathFor(locale, s.key))

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.metaTitle.replace(' | Zevu', ''),
      description: s.metaDescription,
      inLanguage: c.htmlLang,
      provider: { '@type': 'ProfessionalService', name: 'Zevu', url: absoluteUrl('/') },
      areaServed: { '@type': 'Country', name: 'Spain' },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Zevu', item: absoluteUrl(home) },
        { '@type': 'ListItem', position: 2, name: s.label, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: c.htmlLang,
      mainEntity: s.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]

  return (
    <>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}

      <section className="zv-shero" aria-labelledby="s-h">
        <div className="zv-wrap">
          <div className="zv-shero-top" data-rv="">
            <nav className="zv-crumbs" aria-label="Breadcrumb"><Link href={home}>Zevu</Link> &nbsp;/&nbsp; {s.label}</nav>
            <span className="zv-eyebrow">{s.eyebrow}</span>
          </div>
          <Lines as="h1" id="s-h" className="zv-display" lines={[s.headline[0], <em key="e">{s.headline[1]}</em>]} />
          <div className="zv-shero-grid">
            <div data-rv="" style={{ ['--d' as string]: 250 }}>
              <p className="zv-lede">{s.intro}</p>
              <div className="zv-hero-ctas">
                <Button href={`${pathFor(locale, 'contact')}?type=${encodeURIComponent(s.leadType)}`}>{t.start}</Button>
                <a href="#features" className="zv-link">{t.included} ↓</a>
              </div>
            </div>
            <figure className="zv-shero-visual" data-rv="" style={{ ['--d' as string]: 400 }}>
              <ConceptFrame k={concept.key} c={c} />
              <figcaption>
                <span>{t.conceptCaption(concept.name, concept.kind)}</span>
                <Link href={`${home === '/' ? '' : home}/#work`} className="zv-link">{t.allConcepts} <Arrow size={14} /></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="zv-section" aria-labelledby="signs-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">{t.signsEyebrow}</span>
              <Lines id="signs-h" className="zv-h2" lines={[t.signsTitle[0], <em key="e">{t.signsTitle[1]}</em>]} />
            </div>
          </div>
          <div className="zv-signs">
            {s.signs.map((x, i) => (
              <div key={x} className="zv-sign" data-rv="" style={{ ['--d' as string]: i * 80 }}>
                <b>0{i + 1}</b>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zv-section" id="features" style={{ paddingTop: 0 }} aria-labelledby="feat-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">{t.featuresEyebrow}</span>
              <Lines id="feat-h" className="zv-h2" lines={[t.featuresTitle[0], <em key="e">{t.featuresTitle[1]}</em>]} />
            </div>
            <p className="zv-lede" data-rv="">{t.featuresLede(s.label)}</p>
          </div>
          <div className="zv-feats" data-rv="">
            {s.features.map((f, i) => (
              <div key={f.title} className="zv-feat">
                <span className="zv-feat-n">0{i + 1}</span>
                <h3 className="zv-h3">{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={s.faqs} title={t.faqTitle} eyebrow={c.faq.eyebrow} side={c.faq.side} />

      <section className="zv-section" style={{ paddingTop: 0 }} aria-labelledby="others-h">
        <div className="zv-wrap">
          <span className="zv-eyebrow" id="others-h">{t.othersEyebrow}</span>
          <div className="zv-others" style={{ marginTop: 28 }}>
            {others.map((o, i) => (
              <Link key={o.key} href={pathFor(locale, o.key)} className="zv-other" data-rv="" style={{ ['--d' as string]: i * 90 }}>
                <SectorIllustration slug={o.key} className="ill" />
                <div>
                  <span className="zv-h3">{o.label}</span>
                  <Arrow size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact c={c} defaultType={s.leadType} />
    </>
  )
}
