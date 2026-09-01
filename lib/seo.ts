import type { Metadata } from 'next'

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.zevu.cc'
).replace(/\/$/, '')

export const SITE_NAME = 'Zevu'
export const DEFAULT_TITLE = 'Zevu — Verkkosivut pk-yrityksille'
export const DEFAULT_DESCRIPTION =
  'Zevu rakentaa modernit verkkosivut suomalaisille pk-yrityksille kahdessa viikossa. Ammattimainen suunnittelu, nopea toteutus ja selkeä hinta — ilman yllätyksiä.'
export const LOCALE = 'fi_FI'
export const CONTACT_EMAIL = 'hei@zevu.cc'

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? 'G-38XEQS2TW3'

export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return clean === '/' ? SITE_URL : `${SITE_URL}${clean}`
}

export function parseFiDate(input: string): Date {
  const [day, month, year] = input.split('.').map(Number)
  return new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, day ?? 1))
}

interface PageMetaInput {
  title?: string
  description?: string
  path: string
  images?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
}

export function buildMetadata({
  title,
  description,
  path,
  images,
  type = 'website',
  publishedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const desc = description ?? DEFAULT_DESCRIPTION
  const resolvedImages = images?.map(img =>
    img.startsWith('http') ? img : absoluteUrl(img)
  )

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: title ?? DEFAULT_TITLE,
      description: desc,
      locale: LOCALE,
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
