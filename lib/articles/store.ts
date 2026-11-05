import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import { unstable_rethrow } from 'next/navigation'
import { getRedis } from '@/lib/redis'
import type { Locale } from '@/lib/content/types'
import { SEED_ARTICLES } from './seed'
import { articleState, type Article } from './types'

/*
 * Articles = seed articles shipped in code (lib/articles/seed) merged with
 * articles saved from the admin. Saved articles live in Redis in production
 * (read-only filesystem on Vercel) and in data/articles.json locally.
 * A saved article with the same id as a seed replaces it; deleting a seed
 * records its id so it stays hidden.
 */

const KEY = 'zevu:articles:v2'
const DELETED_KEY = 'zevu:articles:v2:deleted'
const FILE = path.join(process.cwd(), 'data', 'articles.json')

interface FileStore { articles: Record<string, Article>; deleted: string[] }

function readFile(): FileStore {
  try {
    const raw = JSON.parse(fs.readFileSync(FILE, 'utf-8'))
    return { articles: raw.articles ?? {}, deleted: raw.deleted ?? [] }
  } catch {
    return { articles: {}, deleted: [] }
  }
}
function writeFile(s: FileStore) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(s, null, 2))
}

async function readSaved(): Promise<{ saved: Record<string, Article>; deleted: Set<string> }> {
  const redis = getRedis()
  if (!redis) {
    const f = readFile()
    return { saved: f.articles, deleted: new Set(f.deleted) }
  }
  try {
    const [saved, deleted] = await Promise.all([
      redis.hgetall<Record<string, Article>>(KEY),
      redis.smembers(DELETED_KEY),
    ])
    return { saved: saved ?? {}, deleted: new Set(deleted ?? []) }
  } catch (err) {
    // Let Next.js' own control-flow signals (e.g. switching to dynamic rendering) through.
    unstable_rethrow(err)
    // Never let an unreachable database take the site (or the build) down:
    // fall back to the articles shipped in code. Writes still fail loudly.
    console.error('[articles] storage unreachable, serving seed articles only:', err)
    storageError = err instanceof Error ? err.message : String(err)
    return { saved: {}, deleted: new Set() }
  }
}

let storageError: string | null = null

/** Set when the last read from Redis failed; shown in the admin. */
export async function articleStorageStatus(): Promise<{ ok: boolean; error?: string }> {
  storageError = null
  await readSaved()
  return storageError ? { ok: false, error: storageError } : { ok: true }
}

export async function getAllArticles(): Promise<Article[]> {
  const { saved, deleted } = await readSaved()
  const byId = new Map<string, Article>()
  for (const a of SEED_ARTICLES) if (!deleted.has(a.id)) byId.set(a.id, a)
  for (const [id, a] of Object.entries(saved)) if (!deleted.has(id)) byId.set(id, a)
  return [...byId.values()].sort((a, b) => b.publishAt.localeCompare(a.publishAt))
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  return (await getAllArticles()).find(a => a.id === id)
}

/** Live (published and past their date) articles in one language, newest first. */
export async function getLiveArticles(locale: Locale, now = new Date()): Promise<Article[]> {
  return (await getAllArticles()).filter(a => a.locale === locale && articleState(a, now) === 'live')
}

export async function getLiveArticle(locale: Locale, slug: string): Promise<Article | undefined> {
  return (await getLiveArticles(locale)).find(a => a.slug === slug)
}

export function translationOf(a: Article, all: Article[]): Article | undefined {
  return all.find(x => x.group === a.group && x.locale !== a.locale)
}

export const isSeed = (id: string) => SEED_ARTICLES.some(a => a.id === id)

export async function hasSavedCopy(id: string): Promise<boolean> {
  const { saved } = await readSaved()
  return id in saved
}

export async function saveArticle(a: Article): Promise<void> {
  const redis = getRedis()
  if (redis) {
    await Promise.all([redis.hset(KEY, { [a.id]: a }), redis.srem(DELETED_KEY, a.id)])
    return
  }
  const f = readFile()
  f.articles[a.id] = a
  f.deleted = f.deleted.filter(x => x !== a.id)
  writeFile(f)
}

export async function deleteArticle(id: string): Promise<void> {
  const redis = getRedis()
  if (redis) {
    await redis.hdel(KEY, id)
    if (isSeed(id)) await redis.sadd(DELETED_KEY, id)
    return
  }
  const f = readFile()
  delete f.articles[id]
  if (isSeed(id) && !f.deleted.includes(id)) f.deleted.push(id)
  writeFile(f)
}

/** Drop admin edits to a seed article so it returns to the version in code. */
export async function restoreSeed(id: string): Promise<void> {
  const redis = getRedis()
  if (redis) {
    await Promise.all([redis.hdel(KEY, id), redis.srem(DELETED_KEY, id)])
    return
  }
  const f = readFile()
  delete f.articles[id]
  f.deleted = f.deleted.filter(x => x !== id)
  writeFile(f)
}
