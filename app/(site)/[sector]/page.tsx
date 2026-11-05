import Link from 'next/link'
import { notFound } from 'next/navigation'
import Lines from '@/components/site/Lines'
import Button from '@/components/site/Button'
import Faq from '@/components/site/Faq'
import Contact from '@/components/site/Contact'
import JsonLd from '@/components/JsonLd'
import { ConceptFrame } from '@/components/site/Concepts'
import { Arrow, SectorIllustration } from '@/components/site/Icons'
import { CONCEPTS, SECTORS, sectorBySlug } from '@/lib/site-content'
import { absoluteUrl, buildMetadata } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return SECTORS.map(s => ({ sector: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }) {
  const s = sectorBySlug((await params).sector)
  if (!s) return {}
  return buildMetadata({ path: `/${s.slug}`, title: s.metaTitle, description: s.metaDescription })
}

const TYPE_FOR: Record<string, string> = {
  restaurants: 'Restaurant',
  bars: 'Bar',
  'coffee-shops': 'Coffee shop',
  'other-businesses': 'Other',
}

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const s = sectorBySlug((await params).sector)
  if (!s) notFound()
  const concept = CONCEPTS.find(c => c.key === s.concept)!
  const others = SECTORS.filter(x => x.slug !== s.slug)

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.metaTitle.replace(' | Zevu', ''),
      description: s.metaDescription,
      provider: { '@type': 'ProfessionalService', name: 'Zevu', url: absoluteUrl('/') },
      areaServed: { '@type': 'Country', name: 'Spain' },
      url: absoluteUrl(`/${s.slug}`),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: s.label, item: absoluteUrl(`/${s.slug}`) },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]

  return (
    <>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}

      <section className="zv-shero" aria-labelledby="s-h">
        <div className="zv-wrap">
          <div className="zv-shero-top" data-rv="">
            <nav className="zv-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; {s.label}</nav>
            <span className="zv-eyebrow">{s.eyebrow}</span>
          </div>
          <Lines as="h1" id="s-h" className="zv-display" lines={[s.headline[0], <em key="e">{s.headline[1]}</em>]} />
          <div className="zv-shero-grid">
            <div data-rv="" style={{ ['--d' as string]: 250 }}>
              <p className="zv-lede">{s.intro}</p>
              <div className="zv-hero-ctas">
                <Button href={`/contact?type=${encodeURIComponent(TYPE_FOR[s.slug])}`}>Start a project</Button>
                <a href="#features" className="zv-link">What’s included ↓</a>
              </div>
            </div>
            <figure className="zv-shero-visual" data-rv="" style={{ ['--d' as string]: 400 }}>
              <ConceptFrame k={concept.key} />
              <figcaption>
                <span>Concept · {concept.name}, {concept.kind.toLowerCase()}</span>
                <Link href="/#work" className="zv-link">All concepts <Arrow size={14} /></Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="zv-section" aria-labelledby="signs-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">Sound familiar?</span>
              <Lines id="signs-h" className="zv-h2" lines={['Signs it’s time', <em key="e">for a new site.</em>]} />
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
              <span className="zv-eyebrow">What you get</span>
              <Lines id="feat-h" className="zv-h2" lines={['Everything on', <em key="e">the menu.</em>]} />
            </div>
            <p className="zv-lede" data-rv="">Built for {s.label.toLowerCase()}, not adapted from a generic template. Every feature is there because it earns its place.</p>
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

      <Faq items={s.faqs} title={['Good', 'questions.']} />

      <section className="zv-section" style={{ paddingTop: 0 }} aria-labelledby="others-h">
        <div className="zv-wrap">
          <span className="zv-eyebrow" id="others-h">Not quite you?</span>
          <div className="zv-others" style={{ marginTop: 28 }}>
            {others.map((o, i) => (
              <Link key={o.slug} href={`/${o.slug}`} className="zv-other" data-rv="" style={{ ['--d' as string]: i * 90 }}>
                <SectorIllustration slug={o.slug} className="ill" />
                <div>
                  <span className="zv-h3">{o.label}</span>
                  <Arrow size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact defaultType={TYPE_FOR[s.slug]} />
    </>
  )
}
