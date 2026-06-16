'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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
}

const SHOW_OPTIONS: { value: ShowMode; label: string }[] = [
  { value: 'auto', label: 'Automaattinen (julkaisupäivän mukaan)' },
  { value: 'show', label: 'Näytä aina blogissa' },
  { value: 'hide', label: 'Piilota blogista' },
]

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
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)

  function update<K extends keyof Initial>(k: K, v: Initial[K]) {
    setForm(f => ({ ...f, [k]: v }))
    setMsg(null)
  }

  async function save() {
    if (!form.title.trim()) {
      setMsg({ kind: 'err', text: 'Otsikko on pakollinen.' })
      return
    }
    setSaving(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/articles/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          excerpt: form.excerpt,
          content: form.content,
          cats: form.cats,
          read: form.read,
          date: form.date,
          publishedTime: form.publishedTime || undefined,
          showOnBlog: form.showOnBlog === 'show' ? true : form.showOnBlog === 'hide' ? false : null,
        }),
      })
      if (!res.ok) throw new Error()
      setMsg({ kind: 'ok', text: 'Tallennettu. Muutokset näkyvät sivustolla.' })
      router.refresh()
    } catch {
      setMsg({ kind: 'err', text: 'Tallennus epäonnistui. Yritä uudelleen.' })
    } finally {
      setSaving(false)
    }
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
          <a href={`/blog/${slug}`} target="_blank" rel="noreferrer" className="adm-btn adm-btn--ghost">Avaa sivustolla ↗</a>
          <button type="button" className="adm-btn adm-btn--primary" onClick={save} disabled={saving}>
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

          <div className="adm-field-row">
            <label className="adm-field adm-field--sm">
              <span>Päivämäärä (P.K.VVVV)</span>
              <input type="text" value={form.date} onChange={e => update('date', e.target.value)} placeholder="15.6.2026" />
            </label>
            <label className="adm-field">
              <span>Julkaisuaika (ISO, valinnainen)</span>
              <input type="text" value={form.publishedTime} onChange={e => update('publishedTime', e.target.value)} placeholder="2026-06-15T08:30:00+03:00" />
            </label>
          </div>

          <label className="adm-field">
            <span>Näkyvyys blogissa</span>
            <select value={form.showOnBlog} onChange={e => update('showOnBlog', e.target.value as ShowMode)}>
              {SHOW_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>

          <label className="adm-field">
            <span>Sisältö (HTML)</span>
            <textarea
              className="adm-code"
              rows={22}
              value={form.content}
              onChange={e => update('content', e.target.value)}
              spellCheck={false}
            />
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
            <div className="single-content" dangerouslySetInnerHTML={{ __html: form.content }} />
          </div>
        </div>
      </div>
    </>
  )
}
