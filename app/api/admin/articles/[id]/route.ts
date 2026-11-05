import { NextResponse } from 'next/server'
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
  await saveArticle(article)
  revalidateArticle(article, existing.slug)
  return NextResponse.json({ ok: true, id, slug: article.slug, updatedAt: article.updatedAt })
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params
  const existing = await getArticleById(id)
  if (!existing) return NextResponse.json({ error: 'not_found' }, { status: 404 })
  await deleteArticle(id)
  revalidateArticle(existing)
  return NextResponse.json({ ok: true })
}
