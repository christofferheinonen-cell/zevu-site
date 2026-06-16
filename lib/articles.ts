import fs from 'node:fs'
import path from 'node:path'
import type { Post } from './posts'
import { getRedis } from './redis'

// Articles live as static data in lib/blog/*. The editor lets you tweak the
// editable fields without touching source; those edits are stored here as a
// per-slug overlay and merged on top of the base post at read time.
//
// Production (Vercel) runs on a read-only filesystem, so overrides are
// stored in Redis (Vercel KV / Upstash) there. Local dev falls back to a
// JSON file so it keeps working without that integration configured.

export type ArticleOverride = Partial<
  Pick<
    Post,
    'title' | 'excerpt' | 'content' | 'cats' | 'read' | 'date' | 'publishedTime' | 'showOnBlog' | 'image' | 'grad'
  >
> & { updatedAt?: string }

const REDIS_KEY = 'zevu:article-overrides'
const FILE = path.join(process.cwd(), 'data', 'article-overrides.json')

function readFileOverrides(): Record<string, ArticleOverride> {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf-8'))
  } catch {
    return {}
  }
}

function writeFileOverrides(all: Record<string, ArticleOverride>): void {
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(all, null, 2))
}

export async function getOverrides(): Promise<Record<string, ArticleOverride>> {
  const redis = getRedis()
  if (!redis) return readFileOverrides()
  const raw = await redis.hgetall<Record<string, string>>(REDIS_KEY)
  if (!raw) return {}
  const result: Record<string, ArticleOverride> = {}
  for (const [slug, value] of Object.entries(raw)) {
    try {
      result[slug] = JSON.parse(value)
    } catch {
      // skip a malformed entry rather than failing the whole read
    }
  }
  return result
}

export async function getOverride(slug: string): Promise<ArticleOverride | undefined> {
  const redis = getRedis()
  if (!redis) return readFileOverrides()[slug]
  const raw = await redis.hget<string>(REDIS_KEY, slug)
  return raw ? JSON.parse(raw) : undefined
}

export async function saveOverride(slug: string, patch: ArticleOverride): Promise<ArticleOverride> {
  const existing = await getOverride(slug)
  const next: ArticleOverride = { ...existing, ...patch, updatedAt: new Date().toISOString() }
  const redis = getRedis()
  if (redis) {
    await redis.hset(REDIS_KEY, { [slug]: JSON.stringify(next) })
  } else {
    const all = readFileOverrides()
    all[slug] = next
    writeFileOverrides(all)
  }
  return next
}

export async function clearOverride(slug: string): Promise<void> {
  const redis = getRedis()
  if (redis) {
    await redis.hdel(REDIS_KEY, slug)
    return
  }
  const all = readFileOverrides()
  if (!(slug in all)) return
  delete all[slug]
  writeFileOverrides(all)
}
