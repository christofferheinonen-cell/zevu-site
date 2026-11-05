export type Locale = 'en' | 'es'
export type SectorKey = 'restaurants' | 'bars' | 'coffee-shops' | 'other-businesses'
export type ConceptKey = 'oleaje' | 'nocturno' | 'almendro' | 'raiz' | 'olaola' | 'mies'
/** Canonical (English) business type stored with each lead, whatever the language. */
export type LeadType = 'Restaurant' | 'Bar' | 'Coffee shop' | 'Other'

export interface QA { q: string; a: string }

export interface Sector {
  key: SectorKey
  /** URL slug in this language. */
  slug: string
  label: string
  index: string
  teaser: string
  leadType: LeadType
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: [string, string]
  intro: string
  signs: string[]
  features: { title: string; body: string }[]
  concept: ConceptKey
  faqs: QA[]
}

export interface Concept {
  key: ConceptKey
  name: string
  kind: string
  note: string
  tags: string[]
}

export interface SiteContent {
  locale: Locale
  htmlLang: string
  ogLocale: string
  meta: { homeTitle: string; homeDescription: string; contactTitle: string; contactDescription: string; ogAlt: string }
  nav: { links: { work: string; prices: string }; start: string; menu: string; close: string; clock: string; contact: string; home: string; skip: string; langLabel: string }
  hero: { eyebrow: string; lead: string; rotating: string[]; body: string; primary: string; secondary: string }
  receipt: { aria: string; sub: string; table: string; server: string; items: string[]; total: string; totalValue: string; thanks: string; ring: string }
  marquee: string[]
  problem: { eyebrow: string; statement: [string, string]; fix: string; body: string; aria: string }
  sectorsSection: { eyebrow: string; title: [string, string, string]; lede: string }
  workSection: { eyebrow: string; title: [string, string]; lede: string; conceptLabel: string; frameAria: (name: string, kind: string) => string }
  concepts: Concept[]
  menu: {
    eyebrow: string; title: [string, string]; note: string; chef: [string, string]; order: string
    items: { name: string; price: string; sub: string; featured?: boolean; lines: string[] }[]
    care: { name: string; price: string; body: string }
  }
  process: { eyebrow: string; title: [string, string]; lede: string; steps: { course: string; title: string; body: string }[] }
  included: { k: string; v: string }[]
  faq: { eyebrow: string; title: [string, string]; side: string; items: QA[] }
  contact: {
    eyebrow: string; title: [string, string]; body: string; skip: string; whatsapp: string
    types: { value: LeadType; label: string }[]
    form: {
      kind: string; name: string; namePh: string; company: string; companyPh: string; email: string; emailPh: string
      phone: string; site: string; sitePh: string; message: string; messagePh: string; honeypot: string
      foot: string; send: string; sending: string; errFields: string; errServer: string
      doneEyebrow: string; doneTitle: string; doneBody: string; pkgPrefix: string; sitePrefix: string
    }
  }
  sectors: Sector[]
  sectorPage: {
    start: string; included: string; signsEyebrow: string; signsTitle: [string, string]
    featuresEyebrow: string; featuresTitle: [string, string]; featuresLede: (label: string) => string
    conceptCaption: (name: string, kind: string) => string; allConcepts: string; faqTitle: [string, string]; othersEyebrow: string
  }
  footer: { tag: [string, string, string]; whoFor: string; studio: string; process: string; sayHi: string; localTime: string; rights: (year: number) => string; whatsapp: string }
  notFound: { eyebrow: string; title: [string, string]; body: string; back: string }
  blog: {
    nav: string; metaTitle: string; metaDescription: string
    eyebrow: string; title: [string, string]; lede: string; empty: string
    all: string; general: string; minRead: (n: number) => string; by: string
    published: string; updated: string; faqTitle: [string, string]; related: string
    ctaEyebrow: string; ctaTitle: [string, string]; ctaBody: string; cta: string
    back: string; readArticle: string; onThisPage: string
  }
}
