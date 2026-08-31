import HeroSection from '@/components/HeroSection'
import LogoTicker from '@/components/LogoTicker'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import PortfolioSection from '@/components/PortfolioSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
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
    { '@type': 'Question', name: 'Kuinka kauan projekti kestää?', acceptedAnswer: { '@type': 'Answer', text: 'Tyypillinen verkkosivuprojekti valmistuu 3–5 viikossa.' } },
    { '@type': 'Question', name: 'Mitä projekti maksaa?', acceptedAnswer: { '@type': 'Answer', text: 'Hinnat alkavat 1 490 eurosta. Tarkat hinnat löytyvät hinnoittelusivulta.' } },
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
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactCta />
      <FaqAccordion />
    </main>
  )
}
