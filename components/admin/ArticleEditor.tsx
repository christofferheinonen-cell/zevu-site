'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import RichTextEditor from './RichTextEditor'

type ShowMode = 'auto' | 'show' | 'hide'

interface Initial {
  title: string
  excerpt: string
  content: string
  cats: string
  read: number
  date: string
  publishedTime: string
  showOnBlog: ShowMode
  image: string
  grad: string
}

const SHOW_OPTIONS: { value: ShowMode; label: string }[] = [
  { value: 'auto', label: 'Automatic (based on publish date)' },
  { value: 'show', label: 'Published — always show on the blog' },
  { value: 'hide', label: 'Draft — hidden from the blog' },
]

const GRAD_OPTIONS = ['grad-1', 'grad-2', 'grad-3', 'grad-4', 'grad-5', 'grad-6']

/** D.M.YYYY (Finnish, used as the post's display date) <-> <input type="date"> value. */
function fiDateToInputDate(fi: string): string {
  const m = fi.trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/)
  if (!m) return ''
  const [, d, mo, y] = m
  return `${y}-${mo.padStart(2, '0')}-${d.padStart(2, '0')}`
}
function inputDateToFiDate(value: string): string {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!m) return ''
  const [, y, mo, d] = m
  return `${Number(d)}.${Number(mo)}.${y}`
}

/** ISO publishedTime <-> <input type="datetime-local"> value, in the browser's local time. */
function isoToInputDateTime(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}
function inputDateTimeToIso(value: string): string {
  if (!value) return ''
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? '' : d.toISOString()
}

export default function ArticleEditor({
  slug,
  initial,
  isEdited,
  updatedAt,
}: {
  slug: string
  initial: Initial
  isEdited: boolean
  updatedAt: string | null
}) {
  const router = useRouter()
  const [form, setForm] = useState<Initial>(initial)
  const [saving, setSaving] = useState(false)
  const [resetting, setResetting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)

  function update<K extends keyof Initial>(k: K, v: Initial[K]) {
    setForm(f => ({ ...f, [k]: v }))
    setMsg(null)
  }

  async function save(overrides?: Partial<Initial>) {
    const next = { ...form, ...overrides }
    if (!next.title.trim()) {
      setMsg({ kind: 'err', text: 'A title is required.' })
      return false
    }
    setSaving(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/articles/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: next.title,
          excerpt: next.excerpt,
          content: next.content,
          cats: next.cats,
          read: next.read,
          date: next.date,
          publishedTime: next.publishedTime || undefined,
          showOnBlog: next.showOnBlog === 'show' ? true : next.showOnBlog === 'hide' ? false : null,
          image: next.image || undefined,
          grad: next.grad || undefined,
        }),
      })
      if (!res.ok) throw new Error()
      if (overrides) setForm(next)
      router.refresh()
      return true
    } catch {
      setMsg({ kind: 'err', text: 'Saving failed. Please try again.' })
      return false
    } finally {
      setSaving(false)
    }
  }

  async function onSaveClick() {
    if (await save()) setMsg({ kind: 'ok', text: 'Saved. Changes are live on the site.' })
  }

  async function reset() {
    if (!confirm('Restore the article to its original version? Your edits will be removed.')) return
    setResetting(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/articles/${slug}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()
      router.refresh()
      setMsg({ kind: 'ok', text: 'Restored to the original. Refresh the page to see it.' })
    } catch {
      setMsg({ kind: 'err', text: 'Restore failed.' })
    } finally {
      setResetting(false)
    }
  }

  async function deleteArticle() {
    const ok = confirm(
      'Remove this article from the blog?\n\nThe content can’t be deleted from the site’s code, but it will be permanently hidden from the blog list and marked as a draft.'
    )
    if (!ok) return
    setDeleting(true)
    setMsg(null)
    const success = await save({ showOnBlog: 'hide' })
    setDeleting(false)
    if (success) router.push('/admin/articles')
  }

  const cats = form.cats.split(',').map(c => c.trim()).filter(Boolean)

  return (
    <>
      <header className="adm-head adm-head--editor">
        <div>
          <Link href="/admin/articles" className="adm-back">← Articles</Link>
          <h1>Edit article</h1>
          <p className="adm-sub">
            /blog/{slug}
            {isEdited && updatedAt && <> · edited {new Date(updatedAt).toLocaleString('en-GB', { timeZone: 'Europe/Helsinki' })}</>}
          </p>
        </div>
        <div className="adm-head-actions">
          {isEdited && (
            <button type="button" className="adm-btn adm-btn--ghost" onClick={reset} disabled={resetting}>
              {resetting ? 'Restoring…' : 'Restore original'}
            </button>
          )}
          <button type="button" className="adm-btn adm-btn--danger" onClick={deleteArticle} disabled={deleting}>
            {deleting ? 'Removing…' : 'Remove'}
          </button>
          <a href={`/blog/${slug}`} target="_blank" rel="noreferrer" className="adm-btn adm-btn--ghost">Open on site ↗</a>
          <button type="button" className="adm-btn adm-btn--primary" onClick={onSaveClick} disabled={saving}>
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </header>

      {msg && <div className={`adm-flash adm-flash--${msg.kind}`}>{msg.text}</div>}

      <div className="adm-editor">
        <div className="adm-editor-form">
          <label className="adm-field">
            <span>Title</span>
            <input type="text" value={form.title} onChange={e => update('title', e.target.value)} />
          </label>

          <label className="adm-field">
            <span>Excerpt / description</span>
            <textarea rows={3} value={form.excerpt} onChange={e => update('excerpt', e.target.value)} />
          </label>

          <div className="adm-field-row">
            <label className="adm-field">
              <span>Categories (comma-separated)</span>
              <input type="text" value={form.cats} onChange={e => update('cats', e.target.value)} />
            </label>
            <label className="adm-field adm-field--sm">
              <span>Reading time (min)</span>
              <input type="number" min={1} value={form.read} onChange={e => update('read', Number(e.target.value))} />
            </label>
          </div>

          <div className="adm-field">
            <span>Main image</span>
            <div className="adm-image-picker">
              <div className={`adm-image-preview ${form.grad}`}>
                {form.image ? <img src={form.image} alt="" /> : <span className="adm-image-preview-empty">No image</span>}
              </div>
              <div className="adm-image-picker-fields">
                <input
                  type="text"
                  value={form.image}
                  onChange={e => update('image', e.target.value)}
                  placeholder="/blog/image.png or https://..."
                />
                <label className="adm-image-grad">
                  <span>Background colour (shown when there’s no image, or while it loads)</span>
                  <select value={form.grad} onChange={e => update('grad', e.target.value)}>
                    {GRAD_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="adm-field-row">
            <label className="adm-field adm-field--sm">
              <span>Publish date</span>
              <input
                type="date"
                value={fiDateToInputDate(form.date)}
                onChange={e => update('date', inputDateToFiDate(e.target.value))}
              />
            </label>
            <label className="adm-field">
              <span>Scheduled publish time (optional)</span>
              <input
                type="datetime-local"
                value={isoToInputDateTime(form.publishedTime)}
                onChange={e => update('publishedTime', inputDateTimeToIso(e.target.value))}
              />
            </label>
          </div>

          <label className="adm-field">
            <span>Status</span>
            <select value={form.showOnBlog} onChange={e => update('showOnBlog', e.target.value as ShowMode)}>
              {SHOW_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>

          <label className="adm-field">
            <span>Content</span>
            <RichTextEditor value={form.content} onChange={html => update('content', html)} />
          </label>
        </div>

        <div className="adm-editor-preview">
          <div className="adm-preview-bar">Preview</div>
          <div className="adm-preview-scroll">
            <div className="single-cats">
              {cats.map(c => <span key={c} className="single-cat">{c}</span>)}
            </div>
            <h1 className="adm-preview-title">{form.title || 'Title'}</h1>
            <div className="adm-preview-meta">
              <span>Christoffer</span> · <span>{form.date}</span> · <span>{form.read} min read</span>
            </div>
            {form.image && (
              <div className={`adm-preview-thumb ${form.grad}`}>
                <img src={form.image} alt={form.title} />
              </div>
            )}
            <div className="single-content" dangerouslySetInnerHTML={{ __html: form.content }} />
          </div>
        </div>
      </div>
    </>
  )
}
