import HeroSection from '@/components/HeroSection'
import LogoTicker from '@/components/LogoTicker'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import StatsSection from '@/components/StatsSection'
import ComparisonSection from '@/components/ComparisonSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import ContactCta from '@/components/ContactCta'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Zevu — Verkkosivut pk-yrityksille',
  path: '/',
})

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kuinka kauan projekti kestää?', acceptedAnswer: { '@type': 'Answer', text: 'Tyypillinen verkkosivuprojekti valmistuu kahdessa viikossa kartoituksesta valmiiseen sivustoon.' } },
    { '@type': 'Question', name: 'Mitä projekti maksaa?', acceptedAnswer: { '@type': 'Answer', text: 'Hinnat alkavat 1 490 eurosta. Saat tarjouksen ennen projektin aloittamista — ei yllätyksiä laskussa.' } },
    { '@type': 'Question', name: 'Voinko päivittää sivustoa itse?', acceptedAnswer: { '@type': 'Answer', text: 'Kyllä. Kasvu- ja Pro-paketeissa rakennamme helppokäyttöisen sisällönhallintajärjestelmän ilman teknistä osaamista.' } },
    { '@type': 'Question', name: 'Näkyykö sivustoni Googlessa?', acceptedAnswer: { '@type': 'Answer', text: 'Kaikki sivustomme rakennetaan hakukoneoptimointia silmällä pitäen.' } },
  ],
}

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqLd} />
      <HeroSection />
      <LogoTicker />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactCta />
      <FaqAccordion />
    </main>
  )
}
