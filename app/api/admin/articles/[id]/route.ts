import { NextResponse } from 'next/server'

const unavailable = (err: unknown) => {
  console.error('[articles] write failed:', err)
  return NextResponse.json({ error: 'storage_unavailable' }, { status: 503 })
}
import { deleteArticle, getArticleById, saveArticle } from '@/lib/articles/store'
import { parseArticle, revalidateArticle } from '@/lib/articles/validate'

type Ctx = { params: Promise<{ id: string }> }

export async function PUT(req: Request, { params }: Ctx) {
  const { id } = await params
  const existing = await getArticleById(id)
  if (!existing) return NextResponse.json({ error: 'not_found' }, { status: 404 })
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }
  const article = await parseArticle(body, id)
  if ('error' in article) return NextResponse.json(article, { status: 400 })
  try {
    await saveArticle(article)
  } catch (err) {
    return unavailable(err)
  }
  revalidateArticle(article, existing.slug)
  return NextResponse.json({ ok: true, id, slug: article.slug, updatedAt: article.updatedAt })
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params
  const existing = await getArticleById(id)
  if (!existing) return NextResponse.json({ error: 'not_found' }, { status: 404 })
  try {
    await deleteArticle(id)
  } catch (err) {
    return unavailable(err)
  }
  revalidateArticle(existing)
  return NextResponse.json({ ok: true })
}
