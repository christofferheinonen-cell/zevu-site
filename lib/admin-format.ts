import type { Post } from './posts'
import { getPublishDate, isPublished } from './posts'

export type ArticleStatus = 'published' | 'scheduled' | 'hidden'

export const STATUS_LABEL: Record<ArticleStatus, string> = {
  published: 'Published',
  scheduled: 'Scheduled',
  hidden: 'Hidden',
}

export const STATUS_COLOR: Record<ArticleStatus, string> = {
  published: '#3f7d4e',
  scheduled: '#b7791f',
  hidden: '#8a7f72',
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

/** Display dates in English; times stay on Finland time because blog publish dates are scheduled in it. */
export function adminDateTime(d: Date): string {
  return d.toLocaleString('en-GB', { timeZone: 'Europe/Helsinki', dateStyle: 'medium', timeStyle: 'short' })
}

export function adminDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { timeZone: 'Europe/Helsinki', dateStyle: 'medium' })
}

export { getPublishDate }
