import Rotator from '@/components/site/Rotator'
import Receipt from '@/components/site/Receipt'
import Marquee from '@/components/site/Marquee'
import Lines from '@/components/site/Lines'
import Button from '@/components/site/Button'
import SectorIndex from '@/components/site/SectorIndex'
import Concepts from '@/components/site/Concepts'
import SetMenus from '@/components/site/SetMenus'
import Process from '@/components/site/Process'
import Faq from '@/components/site/Faq'
import Contact from '@/components/site/Contact'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { HERO, HOME_FAQS, PROBLEM } from '@/lib/site-content'

export const metadata = buildMetadata({ path: '/' })

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd} />

      {/* HERO */}
      <section className="zv-hero" aria-labelledby="hero-h">
        <div className="zv-wrap">
          <span className="zv-eyebrow" data-rv="">{HERO.eyebrow}</span>
          <div className="zv-hero-grid">
            <h1 id="hero-h" className="zv-display zv-lines">
              <span style={{ ['--i' as string]: 0 }}><span>{HERO.lead}</span></span>
              <span style={{ ['--i' as string]: 1 }}>
                <span>
                  <span className="zv-sr">{HERO.rotating[0]}</span>
                  <Rotator words={HERO.rotating} />
                </span>
              </span>
            </h1>
          <div className="zv-hero-foot">
            <div data-rv="" style={{ ['--d' as string]: 300 }}>
              <p className="zv-lede">{HERO.body}</p>
              <div className="zv-hero-ctas">
                <Button href="/contact">{HERO.primary}</Button>
                <a href="#work" className="zv-link">{HERO.secondary} ↓</a>
              </div>
            </div>
          </div>
          <Receipt />
          </div>
        </div>
        <Marquee />
      </section>

      {/* PROBLEM */}
      <section className="zv-section zv-problem" aria-label="Why it matters">
        <div className="zv-wrap zv-problem-grid">
          <span className="zv-eyebrow" data-rv="">{PROBLEM.eyebrow}</span>
          <div>
            <p className="zv-problem-text" data-rv="">
              {PROBLEM.statement[0]} <span className="zv-dim">{PROBLEM.statement[1]}</span>{' '}
              <em>Let’s fix that.</em>
            </p>
            <p className="zv-problem-body" data-rv="" style={{ ['--d' as string]: 150 }}>{PROBLEM.body}</p>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="zv-section" style={{ paddingTop: 0 }} aria-labelledby="sectors-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">Who we cook for</span>
              <Lines id="sectors-h" className="zv-h2" lines={['Made for places', <em key="e">with a door</em>, '& a menu.']} />
            </div>
            <p className="zv-lede" data-rv="">Every kind of venue needs something different. A cocktail bar lives on its events; a café lives on its hours. We build for how you actually work.</p>
          </div>
          <SectorIndex />
        </div>
      </section>

      {/* WORK */}
      <section className="zv-section zv-work" id="work" aria-labelledby="work-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">Selected concepts</span>
              <Lines id="work-h" className="zv-h2" lines={['No templates.', <em key="e">Ever.</em>]} />
            </div>
            <p className="zv-lede" data-rv="">Six concept studies for imaginary venues, so you can see the range. Your place gets its own look, built around your food, your room and your people.</p>
          </div>
          <Concepts />
        </div>
      </section>

      <SetMenus />
      <Process />
      <Faq items={HOME_FAQS} />
      <Contact />
    </>
  )
}
