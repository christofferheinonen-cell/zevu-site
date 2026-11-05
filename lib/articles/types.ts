import type { Locale, QA, SectorKey } from '@/lib/content/types'

export type ArticleSector = SectorKey | 'general'
export type ArticleStatus = 'draft' | 'published'

export interface Article {
  /** Stable unique id. Never shown publicly. */
  id: string
  locale: Locale
  /** URL slug, unique per language. */
  slug: string
  /** Shared by an article and its translation, so EN and ES versions link to each other. */
  group: string
  title: string
  /** Title for Google and social. Empty = use the title. */
  metaTitle: string
  metaDescription: string
  /** The one search phrase this article is written to rank for. */
  focusKeyword: string
  /** One or two sentences shown on the blog index and article intro. */
  excerpt: string
  sector: ArticleSector
  /** Optional photo. Without one a typographic cover is drawn in the brand style. */
  coverImage: string
  coverAlt: string
  /** Article body as HTML (h2, h3, p, ul, ol, blockquote, a, strong, em, img). */
  body: string
  faqs: QA[]
  status: ArticleStatus
  /** ISO timestamp. A published article with a future date is scheduled. */
  publishAt: string
  updatedAt: string
  author: string
}

export type ArticleState = 'draft' | 'scheduled' | 'live'

export function articleState(a: Pick<Article, 'status' | 'publishAt'>, now = new Date()): ArticleState {
  if (a.status === 'draft') return 'draft'
  return new Date(a.publishAt).getTime() > now.getTime() ? 'scheduled' : 'live'
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90)
}

export function plainText(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
}

export function wordCount(html: string): number {
  const t = plainText(html)
  return t ? t.split(' ').length : 0
}

/** Minutes at ~220 words per minute, minimum 1. */
export function readingTime(html: string): number {
  return Math.max(1, Math.round(wordCount(html) / 220))
}

export function effectiveMetaTitle(a: Pick<Article, 'metaTitle' | 'title'>): string {
  return (a.metaTitle || a.title).trim()
}
