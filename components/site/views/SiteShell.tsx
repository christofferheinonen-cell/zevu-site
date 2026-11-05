import Script from 'next/script'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import Reveal from '@/components/site/Reveal'
import JsonLd from '@/components/JsonLd'
import { fraunces, interTight } from '@/lib/fonts'
import { PATH_PAIRS, getContent, pathFor, type Locale } from '@/lib/content'
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, GA_MEASUREMENT_ID, absoluteUrl } from '@/lib/seo'
import '@/app/site.css'

export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const c = getContent(locale)
  const home = pathFor(locale, 'home')
  const anchor = (id: string) => `${home === '/' ? '' : home}/#${id}`

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/icon'),
    image: absoluteUrl('/opengraph-image'),
    email: CONTACT_EMAIL,
    description: c.meta.homeDescription,
    areaServed: { '@type': 'Country', name: 'Spain' },
    serviceType: 'Website design and development',
    audience: c.sectors.map(s => ({ '@type': 'BusinessAudience', name: s.label })),
  }
  const websiteLd = { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: absoluteUrl(home), inLanguage: c.htmlLang }

  const sectorLinks = c.sectors
    .filter(s => s.key !== 'other-businesses')
    .map(s => ({ href: pathFor(locale, s.key), label: s.label }))
  const other = c.sectors.find(s => s.key === 'other-businesses')!

  return (
    <div className={`zv ${fraunces.variable} ${interTight.variable}`} lang={c.htmlLang}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js');document.documentElement.lang=${JSON.stringify(c.htmlLang)};`,
        }}
      />
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <a href="#main" className="zv-skip">{c.nav.skip}</a>
      <Nav
        locale={locale}
        homeHref={home}
        contactHref={pathFor(locale, 'contact')}
        links={[...sectorLinks, { href: anchor('work'), label: c.nav.links.work }, { href: anchor('prices'), label: c.nav.links.prices }]}
        sheetExtra={[{ href: pathFor(locale, 'other-businesses'), label: other.label }, { href: pathFor(locale, 'contact'), label: c.nav.contact }]}
        t={{ start: c.nav.start, menu: c.nav.menu, close: c.nav.close, clock: c.nav.clock, home: c.nav.home, langLabel: c.nav.langLabel }}
        pairs={PATH_PAIRS}
      />
      <main id="main">{children}</main>
      <Footer c={c} />
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
