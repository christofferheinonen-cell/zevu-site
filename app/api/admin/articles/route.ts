import { NextResponse } from 'next/server'

const unavailable = (err: unknown) => {
  console.error('[articles] write failed:', err)
  return NextResponse.json({ error: 'storage_unavailable' }, { status: 503 })
}
import { saveArticle } from '@/lib/articles/store'
import { parseArticle, revalidateArticle } from '@/lib/articles/validate'

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }
  const article = await parseArticle(body)
  if ('error' in article) return NextResponse.json(article, { status: 400 })
  try {
    await saveArticle(article)
  } catch (err) {
    return unavailable(err)
  }
  revalidateArticle(article)
  return NextResponse.json({ ok: true, id: article.id, slug: article.slug, updatedAt: article.updatedAt })
}
