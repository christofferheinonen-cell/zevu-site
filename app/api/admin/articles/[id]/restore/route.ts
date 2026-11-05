import { NextResponse } from 'next/server'
import { getArticleById, isSeed, restoreSeed } from '@/lib/articles/store'
import { revalidateArticle } from '@/lib/articles/validate'

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!isSeed(id)) return NextResponse.json({ error: 'not_seed' }, { status: 400 })
  const before = await getArticleById(id)
  await restoreSeed(id)
  const after = await getArticleById(id)
  if (after) revalidateArticle(after, before?.slug)
  return NextResponse.json({ ok: true })
}
