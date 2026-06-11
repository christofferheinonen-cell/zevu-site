import Link from 'next/link'
import RevealWrapper from './RevealWrapper'
import CtaButton from './CtaButton'
import ServiceFaq from './ServiceFaq'
import ServiceVisual from './ServiceVisual'
import type { Service } from '@/lib/services'

export default function ServiceLanding({ data }: { data: Service }) {
  return (
    <main>
      <div className="wrap">
        <RevealWrapper className="service-hero">
          <div className="service-hero-inner">
            <div className="service-hero-copy">
              <Link href="/" className="single-back">← Etusivulle</Link>
              <div className="eyebrow">{data.eyebrow}</div>
              <h1 className="service-h1">{data.h1}</h1>
              <p className="service-intro">{data.intro}</p>
              <CtaButton label={data.ctaLabel} />
            </div>
            <div className="service-hero-art">
              <ServiceVisual slug={data.slug} />
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper className="service-prose">
          <div className="service-block">
            <h2>{data.whatIs.h}</h2>
            <p>{data.whatIs.p}</p>
          </div>
          <div className="service-block">
            <h2>{data.whyMatters.h}</h2>
            <p>{data.whyMatters.p}</p>
          </div>
        </RevealWrapper>

        <RevealWrapper className="service-mistakes">
          <h2>Yleisimmät virheet</h2>
          <ul className="mistake-list">
            {data.mistakes.map((m, i) => (
              <li key={i}><span className="mistake-x">×</span><span>{m}</span></li>
            ))}
          </ul>
        </RevealWrapper>

        <RevealWrapper className="service-steps">
          <div className="eyebrow">Näin Zevu hoitaa tämän</div>
          <div className="service-steps-grid">
            {data.doItems.map((d, i) => (
              <div key={i} className="service-step">
                <div className="service-step-num">{i + 1}</div>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="service-related">
          <h2>Lue lisää aiheesta</h2>
          <div className="service-related-list">
            {data.related.map((r, i) => (
              <Link key={i} href={r.href} className="service-related-item">
                <span>{r.label}</span>
                <span className="service-related-arrow">→</span>
              </Link>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="service-faq">
          <h2>Usein kysyttyä</h2>
          <ServiceFaq items={data.faq} />
        </RevealWrapper>
      </div>

      <div className="service-cta-band">
        <div className="wrap">
          <RevealWrapper className="service-cta-inner">
            <h2>{data.ctaHeading}</h2>
            <p>{data.ctaSub}</p>
            <CtaButton label={data.ctaLabel} className="btn-light" />
          </RevealWrapper>
        </div>
      </div>
    </main>
  )
}
