import crypto from 'node:crypto'
import { revalidatePath } from 'next/cache'
import { CONTENT } from '@/lib/content'
import { getAllArticles } from './store'
import { slugify, type Article, type ArticleSector } from './types'
import { sanitizeArticleHtml } from './sanitize'

const SECTORS: ArticleSector[] = ['general', 'restaurants', 'bars', 'coffee-shops', 'other-businesses']
const str = (v: unknown, max: number) => String(v ?? '').slice(0, max).trim()

/** Build a clean Article from untrusted JSON. Returns an error code on failure. */
export async function parseArticle(body: Record<string, unknown>, id?: string): Promise<Article | { error: string }> {
  const locale = body.locale === 'es' ? 'es' : 'en'
  const title = str(body.title, 200)
  if (!title) return { error: 'title_required' }
  const slug = slugify(str(body.slug, 120) || title)
  if (!slug) return { error: 'slug_required' }

  const all = await getAllArticles()
  if (all.some(a => a.locale === locale && a.slug === slug && a.id !== id)) return { error: 'slug_taken' }

  const sector = SECTORS.includes(body.sector as ArticleSector) ? (body.sector as ArticleSector) : 'general'
  const publishAt = new Date(str(body.publishAt, 40))
  const faqs = Array.isArray(body.faqs)
    ? body.faqs
        .map(f => ({ q: str((f as { q?: unknown })?.q, 300), a: str((f as { a?: unknown })?.a, 2000) }))
        .filter(f => f.q && f.a)
        .slice(0, 12)
    : []

  return {
    id: id ?? crypto.randomUUID(),
    locale,
    slug,
    group: slugify(str(body.group, 120)) || slug,
    title,
    metaTitle: str(body.metaTitle, 120),
    metaDescription: str(body.metaDescription, 320),
    focusKeyword: str(body.focusKeyword, 120),
    excerpt: str(body.excerpt, 600),
    sector,
    coverImage: /^(https:\/\/|\/)[^\s"'<>]*$/.test(str(body.coverImage, 500)) ? str(body.coverImage, 500) : '',
    coverAlt: str(body.coverAlt, 300),
    body: sanitizeArticleHtml(String(body.body ?? '').slice(0, 300000)),
    faqs,
    status: body.status === 'published' ? 'published' : 'draft',
    publishAt: Number.isNaN(publishAt.getTime()) ? new Date().toISOString() : publishAt.toISOString(),
    updatedAt: new Date().toISOString(),
    author: str(body.author, 120) || 'Zevu',
  }
}

export function blogPath(locale: 'en' | 'es', slug?: string) {
  const base = locale === 'es' ? '/es/blog' : '/blog'
  return slug ? `${base}/${slug}` : base
}

/** Purge cached public pages after a change. */
export function revalidateArticle(a: Pick<Article, 'locale' | 'slug'>, previousSlug?: string) {
  revalidatePath(blogPath(a.locale))
  revalidatePath(blogPath(a.locale, a.slug))
  if (previousSlug && previousSlug !== a.slug) revalidatePath(blogPath(a.locale, previousSlug))
  revalidatePath(CONTENT[a.locale].locale === 'es' ? '/es' : '/')
  revalidatePath('/sitemap.xml')
}
