import { en } from './en'
import { es } from './es'
import type { Locale, SectorKey, SiteContent } from './types'

export type * from './types'

export const CONTENT: Record<Locale, SiteContent> = { en, es }
export const getContent = (locale: Locale) => CONTENT[locale]

/** Site-relative URL for a page in a given language. */
export function pathFor(locale: Locale, page: 'home' | 'contact' | 'blog' | SectorKey): string {
  const prefix = locale === 'es' ? '/es' : ''
  if (page === 'home') return prefix || '/'
  if (page === 'blog') return `${prefix}/blog`
  if (page === 'contact') return `${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`
  const sector = CONTENT[locale].sectors.find(s => s.key === page)!
  return `${prefix}/${sector.slug}`
}

const PAGES: ('home' | 'contact' | 'blog' | SectorKey)[] = ['home', 'contact', 'blog', 'restaurants', 'bars', 'coffee-shops', 'other-businesses']

/** Pairs of equivalent paths ([en, es]) for the language switcher and hreflang. */
export const PATH_PAIRS: [string, string][] = PAGES.map(p => [pathFor('en', p), pathFor('es', p)])

export function alternatesFor(page: 'home' | 'contact' | 'blog' | SectorKey) {
  return { en: pathFor('en', page), es: pathFor('es', page) }
}
