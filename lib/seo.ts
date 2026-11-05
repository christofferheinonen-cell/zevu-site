import type { Metadata } from 'next'

/**
 * Canonical site origin. Defaults to the production domain but can be
 * overridden per-environment via NEXT_PUBLIC_SITE_URL (e.g. preview deploys).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.zevu.cc'
).replace(/\/$/, '')

export const SITE_NAME = 'Zevu'
export const DEFAULT_TITLE = 'Zevu — Websites for restaurants, bars & coffee shops in Spain'
export const DEFAULT_DESCRIPTION =
  'A small design studio in Spain building fast, beautiful websites for restaurants, bars and coffee shops — menus you can edit, bookings that land in your inbox, and a Google profile that shows up.'
export const LOCALE = 'en_GB'
export const CONTACT_EMAIL = 'hey@zevu.cc'

/**
 * WhatsApp number in international format without "+" or spaces
 * (e.g. 34600111222). Leave unset and the WhatsApp buttons are hidden.
 */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? ''

/** Google Analytics 4 measurement ID (overridable via NEXT_PUBLIC_GA_ID). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? 'G-38XEQS2TW3'

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return clean === '/' ? SITE_URL : `${SITE_URL}${clean}`
}

/** Parse a Finnish "D.M.YYYY" date string into a Date (UTC). */
export function parseFiDate(input: string): Date {
  const [day, month, year] = input.split('.').map(Number)
  return new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, day ?? 1))
}

interface PageMetaInput {
  title?: string
  description?: string
  /** Site-relative path, used for the canonical URL. */
  path: string
  /** Site-relative or absolute image URLs for Open Graph / Twitter. */
  images?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  /** Open Graph locale, e.g. es_ES. Defaults to the English locale. */
  locale?: string
  /** Equivalent pages in other languages, for hreflang. */
  languages?: { en: string; es: string }
}

/**
 * Build per-page metadata with a canonical URL plus Open Graph and Twitter
 * cards. When `images` is omitted, the file-based default
 * (app/opengraph-image.tsx) is used automatically by Next.js.
 */
export function buildMetadata({
  title,
  description,
  path,
  images,
  type = 'website',
  publishedTime,
  locale = LOCALE,
  languages,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const desc = description ?? DEFAULT_DESCRIPTION
  const resolvedImages = images?.map(img =>
    img.startsWith('http') ? img : absoluteUrl(img)
  )

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
      ...(languages
        ? { languages: { en: absoluteUrl(languages.en), es: absoluteUrl(languages.es), 'x-default': absoluteUrl(languages.en) } }
        : {}),
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: title ?? DEFAULT_TITLE,
      description: desc,
      locale,
      ...(resolvedImages ? { images: resolvedImages } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: title ?? DEFAULT_TITLE,
      description: desc,
      ...(resolvedImages ? { images: resolvedImages } : {}),
    },
  }
}
