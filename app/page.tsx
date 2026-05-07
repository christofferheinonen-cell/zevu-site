import HeroSection from '@/components/HeroSection'
import LogoTicker from '@/components/LogoTicker'
import FeaturesSection from '@/components/FeaturesSection'
import PerformanceDashboard from '@/components/PerformanceDashboard'
import CreativesShowcase from '@/components/CreativesShowcase'
import DarkCTA from '@/components/DarkCTA'
import FaqAccordion from '@/components/FaqAccordion'

export default function HomePage() {
  return (
    <main>
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
