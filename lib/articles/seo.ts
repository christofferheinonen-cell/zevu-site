import type { Article } from './types'
import { effectiveMetaTitle, plainText, slugify, wordCount } from './types'

export type CheckLevel = 'pass' | 'warn' | 'fail'
export interface SeoCheck { id: string; label: string; level: CheckLevel; hint: string }

const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim()

/**
 * On-page SEO checklist. Pure function, so the editor can run it live and the
 * article list can show the same score.
 */
export function seoChecks(a: Article, opts: { hasTranslation: boolean }): SeoCheck[] {
  const kw = norm(a.focusKeyword)
  const has = (text: string) => (kw ? norm(text).includes(kw) : false)
  const title = effectiveMetaTitle(a)
  const desc = a.metaDescription.trim()
  const firstP = a.body.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? ''
  const h2s = [...a.body.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => plainText(m[1]))
  const words = wordCount(a.body)
  const internal = [...a.body.matchAll(/href="(\/[^"]*)"/gi)].length
  const imgs = [...a.body.matchAll(/<img\b[^>]*>/gi)].map(m => m[0])
  const imgsNoAlt = imgs.filter(t => !/alt="[^"]+"/i.test(t)).length

  const c = (id: string, label: string, level: CheckLevel, hint: string): SeoCheck => ({ id, label, level, hint })
  const list: SeoCheck[] = [
    c('kw', 'Focus keyword set', kw ? 'pass' : 'fail', 'Pick the one phrase someone would type into Google to find this article.'),
    c('kw-title', 'Keyword in SEO title', has(title) ? 'pass' : 'fail', 'Put the focus keyword in the title, ideally near the start.'),
    c('kw-desc', 'Keyword in meta description', has(desc) ? 'pass' : 'warn', 'Google bolds matching words in the snippet.'),
    c('kw-slug', 'Keyword in URL', kw && slugify(a.slug).includes(slugify(a.focusKeyword)) ? 'pass' : 'warn', 'A short URL that contains the keyword.'),
    c('kw-intro', 'Keyword in first paragraph', has(plainText(firstP)) ? 'pass' : 'warn', 'Say what the article is about in the first two sentences.'),
    c('kw-h2', 'Keyword in a subheading', h2s.some(has) ? 'pass' : 'warn', 'Use the keyword (or a close variant) in at least one H2.'),
    c('title-len', `SEO title length (${title.length}/60)`, title.length >= 30 && title.length <= 60 ? 'pass' : title.length > 0 && title.length <= 70 ? 'warn' : 'fail', 'Aim for 30–60 characters so Google doesn’t cut it off.'),
    c('desc-len', `Meta description length (${desc.length}/160)`, desc.length >= 120 && desc.length <= 160 ? 'pass' : desc.length >= 70 && desc.length <= 175 ? 'warn' : 'fail', 'Aim for 120–160 characters.'),
    c('words', `Length (${words} words)`, words >= 700 ? 'pass' : words >= 400 ? 'warn' : 'fail', 'Guides that fully answer the question usually need 700+ words.'),
    c('h2s', `Structure (${h2s.length} subheadings)`, h2s.length >= 3 ? 'pass' : h2s.length >= 1 ? 'warn' : 'fail', 'Break the article into scannable sections with H2s.'),
    c('links', `Internal links (${internal})`, internal >= 2 ? 'pass' : internal === 1 ? 'warn' : 'fail', 'Link to a relevant service page and to the contact page.'),
    c('faqs', `FAQ (${a.faqs.length} questions)`, a.faqs.length >= 3 ? 'pass' : a.faqs.length >= 1 ? 'warn' : 'fail', 'Three or more real questions can earn extra space in Google.'),
    c('alts', 'Images have alt text', imgsNoAlt === 0 && (!a.coverImage || a.coverAlt.trim()) ? 'pass' : 'fail', 'Describe every image for screen readers and Google Images.'),
    c('translation', 'Translation linked', opts.hasTranslation ? 'pass' : 'warn', 'Publish the other language version in the same group.'),
  ]
  return list
}

export function seoScore(checks: SeoCheck[]): number {
  const pts = checks.reduce((n, ch) => n + (ch.level === 'pass' ? 1 : ch.level === 'warn' ? 0.5 : 0), 0)
  return Math.round((pts / checks.length) * 100)
}
