import type { Post } from './posts'
import { getPublishDate, isPublished } from './posts'

export type ArticleStatus = 'published' | 'scheduled' | 'hidden'

export const STATUS_LABEL: Record<ArticleStatus, string> = {
  published: 'Julkaistu',
  scheduled: 'Ajastettu',
  hidden: 'Piilotettu',
}

export const STATUS_COLOR: Record<ArticleStatus, string> = {
  published: '#16a34a',
  scheduled: '#d97706',
  hidden: '#6b7280',
}

export function articleStatus(post: Post, now: Date = new Date()): ArticleStatus {
  if (post.showOnBlog === false) return 'hidden'
  if (post.showOnBlog === true) return 'published'
  return isPublished(post, now) ? 'published' : 'scheduled'
}

export function wordCount(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text ? text.split(' ').length : 0
}

export function fiDateTime(d: Date): string {
  return d.toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki', dateStyle: 'medium', timeStyle: 'short' })
}

export function fiDate(d: Date): string {
  return d.toLocaleDateString('fi-FI', { timeZone: 'Europe/Helsinki', dateStyle: 'medium' })
}

export { getPublishDate }
