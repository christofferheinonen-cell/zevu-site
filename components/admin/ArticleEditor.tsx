'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import RichTextEditor from './RichTextEditor'
import { seoChecks, seoScore, type CheckLevel } from '@/lib/articles/seo'
import { articleState, effectiveMetaTitle, readingTime, slugify, wordCount, type Article, type ArticleSector } from '@/lib/articles/types'
import { scoreColor, STATE_COLOR, STATE_LABEL } from '@/lib/admin-format'

type Other = { id: string; locale: 'en' | 'es'; slug: string; group: string; title: string }

const SECTORS: { value: ArticleSector; label: string }[] = [
  { value: 'general', label: 'General' },
  { value: 'restaurants', label: 'Restaurants' },
  { value: 'bars', label: 'Bars' },
  { value: 'coffee-shops', label: 'Coffee shops' },
  { value: 'other-businesses', label: 'Other businesses' },
]
const SITE = 'zevu.cc'
const ERRORS: Record<string, string> = {
  title_required: 'Add a title first.',
  slug_required: 'The URL can’t be empty.',
  slug_taken: 'Another article in this language already uses that URL.',
}

/** ISO <-> <input type="datetime-local"> in the browser's local time. */
function toLocalInput(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`
}
const fromLocalInput = (v: string) => (v ? new Date(v).toISOString() : new Date().toISOString())

function Counter({ n, min, max }: { n: number; min: number; max: number }) {
  const level = n >= min && n <= max ? 'pass' : n === 0 || n > max + 15 ? 'fail' : 'warn'
  return <span className={`adm-counter adm-counter--${level}`}>{n} / {max}</span>
}

const DOT: Record<CheckLevel, string> = { pass: '●', warn: '◐', fail: '○' }

export default function ArticleEditor({
  initial,
  others,
  seed,
  edited,
  translatingFrom,
}: {
  initial: Article
  others: Other[]
  seed: boolean
  edited: boolean
  translatingFrom?: { id: string; title: string; locale: 'en' | 'es' }
}) {
  const router = useRouter()
  const isNew = !initial.id
  const [a, setA] = useState<Article>(initial)
  const [slugTouched, setSlugTouched] = useState(!isNew)
  const [dirty, setDirty] = useState(false)
  const [busy, setBusy] = useState<'' | 'save' | 'delete' | 'restore'>('')
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
  const [tab, setTab] = useState<'seo' | 'preview'>('seo')

  const set = useCallback(<K extends keyof Article>(k: K, v: Article[K]) => {
    setA(prev => {
      const next = { ...prev, [k]: v }
      if (k === 'title' && !slugTouched) next.slug = slugify(String(v))
      return next
    })
    setDirty(true)
  }, [slugTouched])

  // Translation pairing: other-language articles, grouped.
  const otherLocale = a.locale === 'en' ? 'es' : 'en'
  const counterpart = others.find(o => o.group && o.group === a.group && o.locale === otherLocale)
  const pairable = others.filter(o => o.locale === otherLocale && !others.some(x => x.group === o.group && x.locale === a.locale && x.id !== a.id))

  const checks = useMemo(() => seoChecks(a, { hasTranslation: Boolean(counterpart) }), [a, counterpart])
  const score = seoScore(checks)
  const state = articleState(a)
  const base = a.locale === 'es' ? '/es/blog' : '/blog'
  const metaTitle = effectiveMetaTitle(a)
  const words = wordCount(a.body)

  const save = useCallback(async () => {
    setBusy('save')
    setMsg(null)
    try {
      const payload = { ...a, group: a.group || a.slug }
      const res = await fetch(isNew ? '/api/admin/articles' : `/api/admin/articles/${a.id}`, {
        method: isNew ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(ERRORS[json.error] ?? 'Saving failed. Please try again.')
      setDirty(false)
      if (isNew) {
        router.replace(`/admin/articles/${json.id}`)
        router.refresh()
        return
      }
      setA(prev => ({ ...prev, slug: json.slug, updatedAt: json.updatedAt, group: payload.group }))
      setMsg({ kind: 'ok', text: articleState(a) === 'live' ? 'Saved. The article is live with your changes.' : 'Saved.' })
      router.refresh()
    } catch (e) {
      setMsg({ kind: 'err', text: e instanceof Error ? e.message : 'Saving failed.' })
    } finally {
      setBusy('')
    }
  }, [a, isNew, router])

  // Cmd/Ctrl+S saves; warn before leaving with unsaved changes.
  const saveRef = useRef(save)
  saveRef.current = save
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        saveRef.current()
      }
    }
    const onUnload = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('beforeunload', onUnload)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('beforeunload', onUnload)
    }
  }, [dirty])

  async function remove() {
    if (!confirm(`Delete “${a.title || 'this article'}”? This can’t be undone${seed ? ' (it can be restored from code later)' : ''}.`)) return
    setBusy('delete')
    const res = await fetch(`/api/admin/articles/${a.id}`, { method: 'DELETE' })
    setBusy('')
    if (res.ok) {
      router.push('/admin/articles')
      router.refresh()
    } else setMsg({ kind: 'err', text: 'Delete failed.' })
  }

  async function restore() {
    if (!confirm('Throw away your edits and restore the version shipped with the site?')) return
    setBusy('restore')
    const res = await fetch(`/api/admin/articles/${a.id}/restore`, { method: 'POST' })
    setBusy('')
    if (res.ok) {
      router.refresh()
      location.reload()
    } else setMsg({ kind: 'err', text: 'Restore failed.' })
  }

  const faq = (i: number, k: 'q' | 'a', v: string) => set('faqs', a.faqs.map((f, j) => (j === i ? { ...f, [k]: v } : f)))
  const moveFaq = (i: number, d: -1 | 1) => {
    const next = [...a.faqs]
    const j = i + d
    if (j < 0 || j >= next.length) return
    ;[next[i], next[j]] = [next[j], next[i]]
    set('faqs', next)
  }

  const snippetTitle = metaTitle.length > 60 ? metaTitle.slice(0, 58).trimEnd() + '…' : metaTitle || 'Your SEO title'
  const desc = a.metaDescription || a.excerpt
  const snippetDesc = desc.length > 160 ? desc.slice(0, 157).trimEnd() + '…' : desc || 'Your meta description shows here. Write it like an ad: what the reader gets, in one or two sentences.'

  return (
    <>
      <header className="adm-head adm-head--editor">
        <div>
          <Link href="/admin/articles" className="adm-back">← Articles</Link>
          <h1>{isNew ? (translatingFrom ? `Translate to ${a.locale === 'es' ? 'Spanish' : 'English'}` : 'New article') : 'Edit article'}</h1>
          <p className="adm-sub">
            <span className="adm-badge" style={{ color: STATE_COLOR[state], background: STATE_COLOR[state] + '1a' }}>{STATE_LABEL[state]}</span>
            &nbsp; {base}/{a.slug || '…'}
            {dirty ? <span className="adm-dirty"> · unsaved changes</span> : null}
          </p>
        </div>
        <div className="adm-head-actions">
          {seed && edited ? <button type="button" className="adm-btn adm-btn--ghost" onClick={restore} disabled={!!busy}>{busy === 'restore' ? 'Restoring…' : 'Restore original'}</button> : null}
          {!isNew ? <button type="button" className="adm-btn adm-btn--danger" onClick={remove} disabled={!!busy}>{busy === 'delete' ? 'Deleting…' : 'Delete'}</button> : null}
          {!isNew && state === 'live' ? <a href={`${base}/${a.slug}`} target="_blank" rel="noreferrer" className="adm-btn adm-btn--ghost">View live ↗</a> : null}
          <button type="button" className="adm-btn adm-btn--primary" onClick={save} disabled={!!busy} title="Cmd/Ctrl + S">{busy === 'save' ? 'Saving…' : isNew ? 'Create' : 'Save'}</button>
        </div>
      </header>

      {translatingFrom ? (
        <div className="adm-flash adm-flash--info">Translating <b>{translatingFrom.title}</b>. This version will be linked to it automatically, so Google and the language switch connect the two.</div>
      ) : null}
      {msg ? <div className={`adm-flash adm-flash--${msg.kind}`}>{msg.text}</div> : null}

      <div className="adm-editor">
        <div className="adm-editor-form">
          <div className="adm-seg" role="radiogroup" aria-label="Language">
            {(['en', 'es'] as const).map(l => (
              <button key={l} type="button" role="radio" aria-checked={a.locale === l} className={a.locale === l ? 'is-on' : ''} onClick={() => set('locale', l)}>
                {l === 'en' ? 'English' : 'Español'}
              </button>
            ))}
          </div>

          <label className="adm-field">
            <span>Title</span>
            <input className="adm-title-input" value={a.title} onChange={e => set('title', e.target.value)} placeholder={a.locale === 'es' ? 'Cómo…' : 'How to…'} />
          </label>
          <label className="adm-field">
            <span>URL</span>
            <div className="adm-slug">
              <em>{SITE}{base}/</em>
              <input value={a.slug} onChange={e => { setSlugTouched(true); set('slug', slugify(e.target.value)) }} />
            </div>
          </label>
          <label className="adm-field">
            <span>Intro / excerpt <Counter n={a.excerpt.length} min={80} max={220} /></span>
            <textarea rows={3} value={a.excerpt} onChange={e => set('excerpt', e.target.value)} placeholder="Shown under the title and on the blog page." />
          </label>

          <div className="adm-field">
            <span>Article <small className="adm-hint">{words} words · {readingTime(a.body)} min read · use H2 for sections</small></span>
            <RichTextEditor value={a.body} onChange={html => set('body', html)} />
          </div>

          <div className="adm-field">
            <span>FAQ <small className="adm-hint">Real questions customers ask. Shown at the end and marked up for Google.</small></span>
            <div className="adm-faqs">
              {a.faqs.map((f, i) => (
                <div key={i} className="adm-faq">
                  <div className="adm-faq-tools">
                    <b>Q{i + 1}</b>
                    <button type="button" onClick={() => moveFaq(i, -1)} aria-label="Move up">↑</button>
                    <button type="button" onClick={() => moveFaq(i, 1)} aria-label="Move down">↓</button>
                    <button type="button" onClick={() => set('faqs', a.faqs.filter((_, j) => j !== i))} aria-label="Remove">✕</button>
                  </div>
                  <input value={f.q} onChange={e => faq(i, 'q', e.target.value)} placeholder="Question" />
                  <textarea rows={2} value={f.a} onChange={e => faq(i, 'a', e.target.value)} placeholder="Answer, in two to four sentences" />
                </div>
              ))}
              <button type="button" className="adm-btn adm-btn--ghost" onClick={() => set('faqs', [...a.faqs, { q: '', a: '' }])}>+ Add question</button>
            </div>
          </div>

          <section className="adm-panel adm-settings">
            <div className="adm-panel-head"><h2>Publishing</h2></div>
            <div className="adm-field-row">
              <label className="adm-field">
                <span>Status</span>
                <select value={a.status} onChange={e => set('status', e.target.value as Article['status'])}>
                  <option value="draft">Draft — not public</option>
                  <option value="published">Published — live from the date below</option>
                </select>
              </label>
              <label className="adm-field">
                <span>Publish date</span>
                <input type="datetime-local" value={toLocalInput(a.publishAt)} onChange={e => set('publishAt', fromLocalInput(e.target.value))} />
              </label>
            </div>
            <div className="adm-field-row">
              <label className="adm-field">
                <span>Sector</span>
                <select value={a.sector} onChange={e => set('sector', e.target.value as ArticleSector)}>
                  {SECTORS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </label>
              <label className="adm-field">
                <span>Author</span>
                <input value={a.author} onChange={e => set('author', e.target.value)} />
              </label>
            </div>
            <label className="adm-field">
              <span>{a.locale === 'en' ? 'Spanish' : 'English'} version</span>
              <select
                value={counterpart?.group ?? ''}
                onChange={e => set('group', e.target.value || slugify(a.slug || a.title) + '-' + Math.random().toString(36).slice(2, 6))}
              >
                <option value="">Not linked</option>
                {counterpart ? <option value={counterpart.group}>{counterpart.title}</option> : null}
                {pairable.filter(o => o.group !== counterpart?.group).map(o => <option key={o.id} value={o.group}>{o.title}</option>)}
              </select>
            </label>
            {!isNew && !counterpart ? (
              <Link href={`/admin/articles/new?from=${a.id}`} className="adm-link">+ Write the {a.locale === 'en' ? 'Spanish' : 'English'} version</Link>
            ) : null}
            <div className="adm-field-row" style={{ marginTop: 16 }}>
              <label className="adm-field">
                <span>Cover photo URL <small className="adm-hint">optional</small></span>
                <input value={a.coverImage} onChange={e => set('coverImage', e.target.value)} placeholder="Leave empty for a brand cover" />
              </label>
              <label className="adm-field">
                <span>Cover alt text</span>
                <input value={a.coverAlt} onChange={e => set('coverAlt', e.target.value)} placeholder="Describe the photo" disabled={!a.coverImage} />
              </label>
            </div>
          </section>
        </div>

        <aside className="adm-editor-side">
          <div className="adm-seg adm-seg--sm" role="tablist">
            <button type="button" role="tab" aria-selected={tab === 'seo'} className={tab === 'seo' ? 'is-on' : ''} onClick={() => setTab('seo')}>SEO <b style={{ color: tab === 'seo' ? undefined : scoreColor(score) }}>{score}</b></button>
            <button type="button" role="tab" aria-selected={tab === 'preview'} className={tab === 'preview' ? 'is-on' : ''} onClick={() => setTab('preview')}>Preview</button>
          </div>

          {tab === 'seo' ? (
            <div className="adm-panel adm-seo">
              <label className="adm-field">
                <span>Focus keyword</span>
                <input value={a.focusKeyword} onChange={e => set('focusKeyword', e.target.value)} placeholder={a.locale === 'es' ? 'p. ej. web para restaurante' : 'e.g. restaurant website'} />
              </label>
              <label className="adm-field">
                <span>SEO title <Counter n={metaTitle.length} min={30} max={60} /></span>
                <input value={a.metaTitle} onChange={e => set('metaTitle', e.target.value)} placeholder={a.title || 'Defaults to the title'} />
              </label>
              <label className="adm-field">
                <span>Meta description <Counter n={a.metaDescription.length} min={120} max={160} /></span>
                <textarea rows={3} value={a.metaDescription} onChange={e => set('metaDescription', e.target.value)} />
              </label>

              <div className="adm-snippet" aria-label="Google preview">
                <div className="adm-snippet-site"><i>z</i><span>Zevu<br /><small>https://{SITE} › {a.locale === 'es' ? 'es › blog' : 'blog'} › {a.slug || '…'}</small></span></div>
                <div className="adm-snippet-title">{snippetTitle}</div>
                <div className="adm-snippet-desc">{snippetDesc}</div>
              </div>

              <div className="adm-scorebox">
                <div className="adm-dial" style={{ ['--s' as string]: score, ['--c' as string]: scoreColor(score) }}><b>{score}</b></div>
                <p>{score >= 80 ? 'Ready to rank. Nice.' : score >= 60 ? 'Close. Fix the open points below.' : 'Not ready yet. Start with the red points.'}</p>
              </div>
              <ul className="adm-checks">
                {checks.map(ch => (
                  <li key={ch.id} className={`is-${ch.level}`} title={ch.hint}>
                    <i aria-hidden="true">{DOT[ch.level]}</i>
                    <span>{ch.label}<small>{ch.level !== 'pass' ? ch.hint : ''}</small></span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="adm-panel adm-preview">
              <div className="adm-preview-meta">{SECTORS.find(s => s.value === a.sector)?.label} · {readingTime(a.body)} min</div>
              <h2 className="adm-preview-title">{a.title || 'Title'}</h2>
              <p className="adm-preview-lede">{a.excerpt}</p>
              <div className="zv-prose" dangerouslySetInnerHTML={{ __html: a.body }} />
              {a.faqs.length ? (
                <div className="adm-preview-faq">
                  <h3>FAQ</h3>
                  {a.faqs.map((f, i) => <details key={i}><summary>{f.q || '…'}</summary><p>{f.a}</p></details>)}
                </div>
              ) : null}
            </div>
          )}
        </aside>
      </div>
    </>
  )
}
