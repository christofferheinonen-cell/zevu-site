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
import { getContent, pathFor, type Locale } from '@/lib/content'

export default function HomeView({ locale }: { locale: Locale }) {
  const c = getContent(locale)
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: c.htmlLang,
    mainEntity: c.faq.items.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  const s = c.sectorsSection
  const w = c.workSection

  return (
    <>
      <JsonLd data={faqLd} />

      <section className="zv-hero" aria-labelledby="hero-h">
        <div className="zv-wrap">
          <span className="zv-eyebrow" data-rv="">{c.hero.eyebrow}</span>
          <div className="zv-hero-grid">
            <h1 id="hero-h" className="zv-display zv-lines">
              <span style={{ ['--i' as string]: 0 }}><span>{c.hero.lead}</span></span>
              <span style={{ ['--i' as string]: 1 }}>
                <span>
                  <span className="zv-sr">{c.hero.rotating[0]}</span>
                  <Rotator words={c.hero.rotating} />
                </span>
              </span>
            </h1>
            <div className="zv-hero-foot">
              <div data-rv="" style={{ ['--d' as string]: 300 }}>
                <p className="zv-lede">{c.hero.body}</p>
                <div className="zv-hero-ctas">
                  <Button href={pathFor(locale, 'contact')}>{c.hero.primary}</Button>
                  <a href="#work" className="zv-link">{c.hero.secondary} ↓</a>
                </div>
              </div>
            </div>
            <Receipt t={c.receipt} />
          </div>
        </div>
        <Marquee items={c.marquee} />
      </section>

      <section className="zv-section zv-problem" aria-label={c.problem.aria}>
        <div className="zv-wrap zv-problem-grid">
          <span className="zv-eyebrow" data-rv="">{c.problem.eyebrow}</span>
          <div>
            <p className="zv-problem-text" data-rv="">
              {c.problem.statement[0]} <span className="zv-dim">{c.problem.statement[1]}</span>{' '}
              <em>{c.problem.fix}</em>
            </p>
            <p className="zv-problem-body" data-rv="" style={{ ['--d' as string]: 150 }}>{c.problem.body}</p>
          </div>
        </div>
      </section>

      <section className="zv-section" style={{ paddingTop: 0 }} aria-labelledby="sectors-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">{s.eyebrow}</span>
              <Lines id="sectors-h" className="zv-h2" lines={[s.title[0], <em key="e">{s.title[1]}</em>, s.title[2]]} />
            </div>
            <p className="zv-lede" data-rv="">{s.lede}</p>
          </div>
          <SectorIndex c={c} />
        </div>
      </section>

      <section className="zv-section zv-work" id="work" aria-labelledby="work-h">
        <div className="zv-wrap">
          <div className="zv-section-head">
            <div>
              <span className="zv-eyebrow">{w.eyebrow}</span>
              <Lines id="work-h" className="zv-h2" lines={[w.title[0], <em key="e">{w.title[1]}</em>]} />
            </div>
            <p className="zv-lede" data-rv="">{w.lede}</p>
          </div>
          <Concepts c={c} />
        </div>
      </section>

      <SetMenus c={c} />
      <Process c={c} />
      <Faq items={c.faq.items} title={c.faq.title} eyebrow={c.faq.eyebrow} side={c.faq.side} />
      <Contact c={c} />
    </>
  )
}
