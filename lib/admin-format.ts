import type { ArticleState } from './articles/types'

export const STATE_LABEL: Record<ArticleState, string> = {
  live: 'Live',
  scheduled: 'Scheduled',
  draft: 'Draft',
}

export const STATE_COLOR: Record<ArticleState, string> = {
  live: '#3f7d4e',
  scheduled: '#b7791f',
  draft: '#8a7f72',
}

/** Admin dates are shown in Spain time. */
export function adminDateTime(d: Date): string {
  return d.toLocaleString('en-GB', { timeZone: 'Europe/Madrid', dateStyle: 'medium', timeStyle: 'short' })
}

export function adminDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { timeZone: 'Europe/Madrid', dateStyle: 'medium' })
}

export function scoreColor(score: number): string {
  return score >= 80 ? '#3f7d4e' : score >= 60 ? '#b7791f' : '#a3301b'
}
