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
  { value: 'auto', label: 'Automaattinen (julkaisupäivän mukaan)' },
  { value: 'show', label: 'Julkaistu — näytä aina blogissa' },
  { value: 'hide', label: 'Luonnos — piilotettu blogista' },
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
      setMsg({ kind: 'err', text: 'Otsikko on pakollinen.' })
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
      setMsg({ kind: 'err', text: 'Tallennus epäonnistui. Yritä uudelleen.' })
      return false
    } finally {
      setSaving(false)
    }
  }

  async function onSaveClick() {
    if (await save()) setMsg({ kind: 'ok', text: 'Tallennettu. Muutokset näkyvät sivustolla.' })
  }

  async function reset() {
    if (!confirm('Palauta artikkeli alkuperäiseen muotoon? Muokkaukset poistetaan.')) return
    setResetting(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/articles/${slug}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()
      router.refresh()
      setMsg({ kind: 'ok', text: 'Palautettu alkuperäiseen. Päivitä sivu nähdäksesi.' })
    } catch {
      setMsg({ kind: 'err', text: 'Palautus epäonnistui.' })
    } finally {
      setResetting(false)
    }
  }

  async function deleteArticle() {
    const ok = confirm(
      'Poista artikkeli blogista?\n\nArtikkelin sisältöä ei voi poistaa kokonaan sivuston koodista, mutta se piilotetaan pysyvästi blogilistauksesta ja merkitään luonnokseksi.'
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
          <Link href="/admin/articles" className="adm-back">← Artikkelit</Link>
          <h1>Muokkaa artikkelia</h1>
          <p className="adm-sub">
            /blog/{slug}
            {isEdited && updatedAt && <> · muokattu {new Date(updatedAt).toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' })}</>}
          </p>
        </div>
        <div className="adm-head-actions">
          {isEdited && (
            <button type="button" className="adm-btn adm-btn--ghost" onClick={reset} disabled={resetting}>
              {resetting ? 'Palautetaan…' : 'Palauta alkuperäinen'}
            </button>
          )}
          <button type="button" className="adm-btn adm-btn--danger" onClick={deleteArticle} disabled={deleting}>
            {deleting ? 'Poistetaan…' : 'Poista'}
          </button>
          <a href={`/blog/${slug}`} target="_blank" rel="noreferrer" className="adm-btn adm-btn--ghost">Avaa sivustolla ↗</a>
          <button type="button" className="adm-btn adm-btn--primary" onClick={onSaveClick} disabled={saving}>
            {saving ? 'Tallennetaan…' : 'Tallenna'}
          </button>
        </div>
      </header>

      {msg && <div className={`adm-flash adm-flash--${msg.kind}`}>{msg.text}</div>}

      <div className="adm-editor">
        <div className="adm-editor-form">
          <label className="adm-field">
            <span>Otsikko</span>
            <input type="text" value={form.title} onChange={e => update('title', e.target.value)} />
          </label>

          <label className="adm-field">
            <span>Ingressi / kuvaus</span>
            <textarea rows={3} value={form.excerpt} onChange={e => update('excerpt', e.target.value)} />
          </label>

          <div className="adm-field-row">
            <label className="adm-field">
              <span>Kategoriat (pilkulla erotettuna)</span>
              <input type="text" value={form.cats} onChange={e => update('cats', e.target.value)} />
            </label>
            <label className="adm-field adm-field--sm">
              <span>Lukuaika (min)</span>
              <input type="number" min={1} value={form.read} onChange={e => update('read', Number(e.target.value))} />
            </label>
          </div>

          <div className="adm-field">
            <span>Pääkuva</span>
            <div className="adm-image-picker">
              <div className={`adm-image-preview ${form.grad}`}>
                {form.image ? <img src={form.image} alt="" /> : <span className="adm-image-preview-empty">Ei kuvaa</span>}
              </div>
              <div className="adm-image-picker-fields">
                <input
                  type="text"
                  value={form.image}
                  onChange={e => update('image', e.target.value)}
                  placeholder="/blog/kuva.png tai https://..."
                />
                <label className="adm-image-grad">
                  <span>Taustaväri (näkyy kun kuvaa ei ole, tai kuvan latautuessa)</span>
                  <select value={form.grad} onChange={e => update('grad', e.target.value)}>
                    {GRAD_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="adm-field-row">
            <label className="adm-field adm-field--sm">
              <span>Julkaisupäivä</span>
              <input
                type="date"
                value={fiDateToInputDate(form.date)}
                onChange={e => update('date', inputDateToFiDate(e.target.value))}
              />
            </label>
            <label className="adm-field">
              <span>Ajastettu julkaisuhetki (valinnainen)</span>
              <input
                type="datetime-local"
                value={isoToInputDateTime(form.publishedTime)}
                onChange={e => update('publishedTime', inputDateTimeToIso(e.target.value))}
              />
            </label>
          </div>

          <label className="adm-field">
            <span>Tila</span>
            <select value={form.showOnBlog} onChange={e => update('showOnBlog', e.target.value as ShowMode)}>
              {SHOW_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>

          <label className="adm-field">
            <span>Sisältö</span>
            <RichTextEditor value={form.content} onChange={html => update('content', html)} />
          </label>
        </div>

        <div className="adm-editor-preview">
          <div className="adm-preview-bar">Esikatselu</div>
          <div className="adm-preview-scroll">
            <div className="single-cats">
              {cats.map(c => <span key={c} className="single-cat">{c}</span>)}
            </div>
            <h1 className="adm-preview-title">{form.title || 'Otsikko'}</h1>
            <div className="adm-preview-meta">
              <span>Christoffer</span> · <span>{form.date}</span> · <span>{form.read} min lukuaika</span>
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
