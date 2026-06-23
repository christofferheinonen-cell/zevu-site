import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getPostBySlug } from '@/lib/posts'
import { clearOverride, saveOverride, type ArticleOverride } from '@/lib/articles'

/** Purge the cached public pages so an edit shows up immediately. */
function revalidateArticle(slug: string) {
  revalidatePath(`/blog/${slug}`)
  revalidatePath('/blog')
}

function str(v: unknown, max: number): string {
  return String(v ?? '').slice(0, max)
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!(await getPostBySlug(slug))) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const title = str(body.title, 300).trim()
  if (!title) {
    return NextResponse.json({ error: 'title_required' }, { status: 400 })
  }

  const cats = Array.isArray(body.cats)
    ? body.cats.map(c => str(c, 80).trim()).filter(Boolean)
    : str(body.cats, 300).split(',').map(c => c.trim()).filter(Boolean)

  const readNum = Number(body.read)
  const show = body.showOnBlog
  const showOnBlog = show === true || show === false ? show : undefined

  const patch: ArticleOverride = {
    title,
    excerpt: str(body.excerpt, 600).trim(),
    content: str(body.content, 200000),
    cats: cats.length ? cats : ['Meta-mainonta'],
    read: Number.isFinite(readNum) && readNum > 0 ? Math.round(readNum) : 1,
    date: str(body.date, 20).trim(),
    publishedTime: str(body.publishedTime, 40).trim() || undefined,
    showOnBlog,
    image: body.image ? str(body.image, 500).trim() : undefined,
    grad: body.grad ? str(body.grad, 30).trim() : undefined,
  }

  const saved = await saveOverride(slug, patch)
  revalidateArticle(slug)
  return NextResponse.json({ ok: true, updatedAt: saved.updatedAt })
}

/** Lightweight scheduling update — only date and showOnBlog change. */
export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!(await getPostBySlug(slug))) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const patch: ArticleOverride = {}
  if (typeof body.date === 'string') {
    patch.date = str(body.date, 20).trim()
    // Clear publishedTime so the new date drives scheduling, not the old timestamp.
    patch.publishedTime = ''
  }
  if ('showOnBlog' in body) {
    const s = body.showOnBlog
    patch.showOnBlog = s === true || s === false ? s : undefined
  }

  const saved = await saveOverride(slug, patch)
  revalidateArticle(slug)
  return NextResponse.json({ ok: true, updatedAt: saved.updatedAt })
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  await clearOverride(slug)
  revalidateArticle(slug)
  return NextResponse.json({ ok: true })
}
