'use client'
import { useState } from 'react'

export interface ArticleRow {
  slug: string
  title: string
  cats: string
  words: number
  read: number
  status: 'published' | 'scheduled' | 'hidden'
  publishAt: string
}

export interface LeadRow {
  id: string
  createdAt: string
  name: string
  email: string
  phone: string
  company: string
  industry: string
  runsAds: string
  budget: string
  satisfaction: string
  source: string
}

const STATUS_LABEL: Record<ArticleRow['status'], string> = {
  published: 'Julkaistu',
  scheduled: 'Ajastettu',
  hidden: 'Piilotettu',
}
const STATUS_COLOR: Record<ArticleRow['status'], string> = {
  published: '#16a34a',
  scheduled: '#d97706',
  hidden: '#6b7280',
}

const th: React.CSSProperties = { padding: '8px 6px' }
const td: React.CSSProperties = { padding: '8px 6px' }

export default function AdminDashboard({
  articles,
  leads,
  now,
}: {
  articles: ArticleRow[]
  leads: LeadRow[]
  now: string
}) {
  const [tab, setTab] = useState<'articles' | 'leads'>('articles')
  const counts = articles.reduce(
    (acc, r) => ({ ...acc, [r.status]: acc[r.status] + 1 }),
    { published: 0, scheduled: 0, hidden: 0 } as Record<ArticleRow['status'], number>
  )

  return (
    <main style={{ padding: '48px', maxWidth: 1280, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>Zevu Admin</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>Nykyhetki: {now} (Suomen aikaa).</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, borderBottom: '1px solid #eee' }}>
        <button
          type="button"
          onClick={() => setTab('articles')}
          style={{
            padding: '10px 16px',
            fontSize: 14,
            fontWeight: 600,
            background: 'none',
            border: 'none',
            borderBottom: tab === 'articles' ? '2px solid #111' : '2px solid transparent',
            color: tab === 'articles' ? '#111' : '#666',
            cursor: 'pointer',
          }}
        >
          Artikkelit ({articles.length})
        </button>
        <button
          type="button"
          onClick={() => setTab('leads')}
          style={{
            padding: '10px 16px',
            fontSize: 14,
            fontWeight: 600,
            background: 'none',
            border: 'none',
            borderBottom: tab === 'leads' ? '2px solid #111' : '2px solid transparent',
            color: tab === 'leads' ? '#111' : '#666',
            cursor: 'pointer',
          }}
        >
          Yhteydenotot ({leads.length})
        </button>
      </div>

      {tab === 'articles' && (
        <>
          <p style={{ marginBottom: 24, fontSize: 14 }}>
            <span style={{ color: STATUS_COLOR.published }}>● Julkaistu: {counts.published}</span>
            {'  '}
            <span style={{ color: STATUS_COLOR.scheduled }}>● Ajastettu: {counts.scheduled}</span>
            {'  '}
            <span style={{ color: STATUS_COLOR.hidden }}>● Piilotettu: {counts.hidden}</span>
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                <th style={th}>Tila</th>
                <th style={th}>Julkaisu (FI-aika)</th>
                <th style={th}>Otsikko</th>
                <th style={th}>Kategoria</th>
                <th style={th}>Sanat</th>
                <th style={th}>Lukuaika</th>
                <th style={th}>Avaa</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(a => (
                <tr key={a.slug} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ ...td, color: STATUS_COLOR[a.status], fontWeight: 600 }}>
                    {STATUS_LABEL[a.status]}
                  </td>
                  <td style={{ ...td, whiteSpace: 'nowrap' }}>{a.publishAt}</td>
                  <td style={td}>{a.title}</td>
                  <td style={td}>{a.cats}</td>
                  <td style={td}>{a.words}</td>
                  <td style={td}>{a.read} min</td>
                  <td style={td}>
                    <a href={`/blog/${a.slug}`} target="_blank" rel="noreferrer">Lue →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {tab === 'leads' && (
        <>
          {leads.length === 0 ? (
            <p style={{ color: '#666' }}>Ei vielä yhteydenottoja.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                  <th style={th}>Vastaanotettu</th>
                  <th style={th}>Nimi</th>
                  <th style={th}>Sähköposti</th>
                  <th style={th}>Puhelin</th>
                  <th style={th}>Yritys</th>
                  <th style={th}>Toimiala</th>
                  <th style={th}>Mainostaa?</th>
                  <th style={th}>Budjetti</th>
                  <th style={th}>Tyytyväisyys</th>
                  <th style={th}>Lähde</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(l => (
                  <tr key={l.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ ...td, whiteSpace: 'nowrap' }}>{l.createdAt}</td>
                    <td style={td}>{l.name}</td>
                    <td style={td}><a href={`mailto:${l.email}`}>{l.email}</a></td>
                    <td style={td}>{l.phone || '—'}</td>
                    <td style={td}>{l.company || '—'}</td>
                    <td style={td}>{l.industry || '—'}</td>
                    <td style={td}>{l.runsAds || '—'}</td>
                    <td style={td}>{l.budget || '—'}</td>
                    <td style={td}>{l.satisfaction || '—'}</td>
                    <td style={td}>{l.source || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </main>
  )
}
