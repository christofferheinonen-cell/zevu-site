import HeroSection from '@/components/HeroSection'
import LogoTicker from '@/components/LogoTicker'
import FeaturesSection from '@/components/FeaturesSection'
import PerformanceDashboard from '@/components/PerformanceDashboard'
import CreativesShowcase from '@/components/CreativesShowcase'
import DarkCTA from '@/components/DarkCTA'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { HOME_FAQS } from '@/lib/faq'

export const metadata = buildMetadata({ path: '/' })

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqLd} />
      <HeroSection />
      <LogoTicker />
      <hr className="divider" />
      <FeaturesSection />
      <hr className="divider" />
      <PerformanceDashboard />
      <hr className="divider" />
      <CreativesShowcase />
      <DarkCTA />
      <hr className="divider" />
      <FaqAccordion />
    </main>
  )
}
