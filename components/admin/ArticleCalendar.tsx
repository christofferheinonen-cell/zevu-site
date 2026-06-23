'use client'
import { useState } from 'react'
import Link from 'next/link'

export type CalArticle = {
  slug: string
  title: string
  status: 'published' | 'scheduled' | 'hidden'
  isoDate: string // YYYY-MM-DD
}

const WEEKDAYS = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su']
const MONTHS = [
  'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu',
  'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu',
]

function isoToFi(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d}.${m}.${y}`
}

function getMonthCells(year: number, month: number): (string | null)[] {
  const firstDow = new Date(year, month, 1).getDay() // 0=Sun
  const offset = firstDow === 0 ? 6 : firstDow - 1   // Mon=0 … Sun=6
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (string | null)[] = Array(offset).fill(null)
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(`${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`)
  }
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

const STATUS_DOT: Record<string, string> = {
  published: '#16a34a',
  scheduled: '#d97706',
  hidden: '#6b7280',
}

export default function ArticleCalendar({ articles: initial }: { articles: CalArticle[] }) {
  const today = new Date().toISOString().slice(0, 10)
  const [articles, setArticles] = useState(initial)
  const [year, setYear] = useState(() => new Date().getFullYear())
  const [month, setMonth] = useState(() => new Date().getMonth())
  const [dragSlug, setDragSlug] = useState<string | null>(null)
  const [overTarget, setOverTarget] = useState<string | null>(null)
  const [saving, setSaving] = useState<Set<string>>(new Set())

  const cells = getMonthCells(year, month)
  const calArticles = articles.filter(a => a.status !== 'hidden')
  const drafts = articles.filter(a => a.status === 'hidden')

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1)
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1)
  }

  async function patchArticle(slug: string, body: Record<string, unknown>) {
    setSaving(prev => new Set(prev).add(slug))
    try {
      await fetch(`/api/admin/articles/${slug}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } finally {
      setSaving(prev => { const s = new Set(prev); s.delete(slug); return s })
    }
  }

  function handleDragStart(e: React.DragEvent, slug: string) {
    e.dataTransfer.setData('text/plain', slug)
    e.dataTransfer.effectAllowed = 'move'
    setDragSlug(slug)
  }
  function handleDragEnd() {
    setDragSlug(null)
    setOverTarget(null)
  }

  function handleDropOnDay(e: React.DragEvent, isoDate: string) {
    e.preventDefault()
    const slug = e.dataTransfer.getData('text/plain')
    setOverTarget(null)
    if (!slug) return
    const art = articles.find(a => a.slug === slug)
    if (art?.isoDate === isoDate && art.status !== 'hidden') return
    const isPast = isoDate <= today
    const newStatus = isPast ? 'published' : 'scheduled'
    setArticles(prev => prev.map(a => a.slug === slug ? { ...a, isoDate, status: newStatus } : a))
    patchArticle(slug, { date: isoToFi(isoDate), showOnBlog: isPast ? true : null })
  }

  function handleDropOnDrafts(e: React.DragEvent) {
    e.preventDefault()
    const slug = e.dataTransfer.getData('text/plain')
    setOverTarget(null)
    if (!slug) return
    const art = articles.find(a => a.slug === slug)
    if (art?.status === 'hidden') return
    setArticles(prev => prev.map(a => a.slug === slug ? { ...a, status: 'hidden' } : a))
    patchArticle(slug, { showOnBlog: false })
  }

  return (
    <div className="cal-wrap">
      {/* ── Calendar ── */}
      <div className="cal-main">
        <div className="cal-nav">
          <button className="adm-btn adm-btn--ghost cal-nav-btn" onClick={prevMonth}>←</button>
          <span className="cal-nav-title">{MONTHS[month]} {year}</span>
          <button className="adm-btn adm-btn--ghost cal-nav-btn" onClick={nextMonth}>→</button>
        </div>

        <div className="cal-grid">
          {WEEKDAYS.map(d => <div key={d} className="cal-header">{d}</div>)}

          {cells.map((isoDate, i) => {
            if (!isoDate) return <div key={`pad-${i}`} className="cal-cell cal-cell--empty" />
            const dayArts = calArticles.filter(a => a.isoDate === isoDate)
            const isToday = isoDate === today
            const isPast = isoDate < today
            const isOver = overTarget === isoDate

            // Count by status for the badge
            const counts = dayArts.reduce<Record<string, number>>((acc, a) => {
              acc[a.status] = (acc[a.status] ?? 0) + 1
              return acc
            }, {})
            const badgeLabel = counts.published
              ? `Julkaistu: ${counts.published}`
              : counts.scheduled
              ? `Ajastettu: ${counts.scheduled}`
              : null

            return (
              <div
                key={isoDate}
                className={[
                  'cal-cell',
                  isToday ? 'cal-cell--today' : '',
                  isPast && !isToday ? 'cal-cell--past' : '',
                  isOver ? 'cal-cell--over' : '',
                ].filter(Boolean).join(' ')}
                onDragOver={e => { e.preventDefault(); setOverTarget(isoDate) }}
                onDragLeave={e => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOverTarget(t => t === isoDate ? null : t)
                  }
                }}
                onDrop={e => handleDropOnDay(e, isoDate)}
              >
                <div className="cal-cell-head">
                  <span className="cal-day-num">{Number(isoDate.slice(8))}</span>
                  {badgeLabel && (
                    <span className={`cal-day-badge cal-day-badge--${counts.published ? 'published' : 'scheduled'}`}>
                      {badgeLabel}
                    </span>
                  )}
                </div>
                <div className="cal-cell-articles">
                  {dayArts.map(a => (
                    <div
                      key={a.slug}
                      draggable
                      className={[
                        'cal-article',
                        `cal-article--${a.status}`,
                        saving.has(a.slug) ? 'cal-article--saving' : '',
                        dragSlug === a.slug ? 'cal-article--dragging' : '',
                      ].filter(Boolean).join(' ')}
                      onDragStart={e => handleDragStart(e, a.slug)}
                      onDragEnd={handleDragEnd}
                      title={a.title}
                    >
                      <span className="cal-article-handle">⠿</span>
                      <span className="cal-article-dot" style={{ background: STATUS_DOT[a.status] }} />
                      <Link
                        href={`/admin/articles/${a.slug}`}
                        className="cal-article-title"
                        onClick={e => { if (dragSlug) e.preventDefault() }}
                      >
                        {a.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Drafts panel ── */}
      <div
        className={`cal-drafts${overTarget === 'drafts' ? ' cal-drafts--over' : ''}`}
        onDragOver={e => { e.preventDefault(); setOverTarget('drafts') }}
        onDragLeave={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setOverTarget(t => t === 'drafts' ? null : t)
          }
        }}
        onDrop={handleDropOnDrafts}
      >
        <div className="cal-drafts-head">
          <span className="cal-drafts-title">Luonnokset</span>
          {drafts.length > 0 && <span className="cal-drafts-count">{drafts.length}</span>}
        </div>
        <p className="cal-drafts-hint">Vedä kalenteriin aikatauluttaaksesi</p>

        {drafts.length === 0
          ? <p className="cal-drafts-empty">Ei luonnoksia</p>
          : drafts.map(a => (
            <div
              key={a.slug}
              draggable
              className={`cal-draft-item${dragSlug === a.slug ? ' cal-draft-item--dragging' : ''}`}
              onDragStart={e => handleDragStart(e, a.slug)}
              onDragEnd={handleDragEnd}
            >
              <span className="cal-draft-handle">⠿</span>
              <Link
                href={`/admin/articles/${a.slug}`}
                className="cal-draft-link"
                onClick={e => { if (dragSlug) e.preventDefault() }}
              >
                {a.title}
              </Link>
            </div>
          ))
        }

        <div className="cal-drafts-foot">
          Vedä artikkeli tähän palauttaaksesi sen luonnokseksi
        </div>
      </div>
    </div>
  )
}
