import Script from 'next/script'
import { Fraunces, Inter_Tight } from 'next/font/google'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import Reveal from '@/components/site/Reveal'
import JsonLd from '@/components/JsonLd'
import { SECTORS } from '@/lib/site-content'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  CONTACT_EMAIL,
  GA_MEASUREMENT_ID,
  absoluteUrl,
} from '@/lib/seo'
import './site.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/icon'),
  image: absoluteUrl('/opengraph-image'),
  email: CONTACT_EMAIL,
  description: DEFAULT_DESCRIPTION,
  areaServed: { '@type': 'Country', name: 'Spain' },
  knowsLanguage: ['en', 'es'],
  serviceType: 'Website design and development',
  audience: SECTORS.map(s => ({ '@type': 'BusinessAudience', name: s.label })),
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'en',
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`zv ${fraunces.variable} ${interTight.variable}`}>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <a href="#main" className="zv-skip">Skip to content</a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <Reveal />
      {GA_MEASUREMENT_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      ) : null}
    </div>
  )
}
