import fs from 'node:fs'
import path from 'node:path'
import type { Post } from './posts'

// Articles live as static data in lib/blog/*. The editor lets you tweak the
// editable fields without touching source; those edits are stored here as a
// per-slug overlay and merged on top of the base post at read time.
//
// NOTE: like leads, this is a flat JSON file on disk. On ephemeral/serverless
// hosts the file is not durable across deploys or instances. Fine for light
// editing; revisit with a database for anything mission-critical.

export type ArticleOverride = Partial<
  Pick<
    Post,
    'title' | 'excerpt' | 'content' | 'cats' | 'read' | 'date' | 'publishedTime' | 'showOnBlog' | 'image' | 'grad'
  >
> & { updatedAt?: string }

const FILE = path.join(process.cwd(), 'data', 'article-overrides.json')

export function getOverrides(): Record<string, ArticleOverride> {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf-8'))
  } catch {
    return {}
  }
}

export function getOverride(slug: string): ArticleOverride | undefined {
  return getOverrides()[slug]
}

export function saveOverride(slug: string, patch: ArticleOverride): ArticleOverride {
  const all = getOverrides()
  const next: ArticleOverride = { ...all[slug], ...patch, updatedAt: new Date().toISOString() }
  all[slug] = next
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(all, null, 2))
  return next
}

export function clearOverride(slug: string): void {
  const all = getOverrides()
  if (!(slug in all)) return
  delete all[slug]
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(all, null, 2))
}
