'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

const PER_PAGE = 6

export default function BlogList({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(posts.length / PER_PAGE)
  const slice = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <>
      <div className="blog-grid">
        {slice.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card reveal on">
            <div className={`post-thumb ${p.grad}`}>
              {p.image
                ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                : <div className="post-thumb-placeholder">[ kuva — {p.cats[0].toLowerCase()} ]</div>
              }
              <span className="thumb-cat">{p.cats[0]}</span>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span>{p.date}</span><span>·</span><span>{p.read} min lukuaika</span>
              </div>
              <div className="post-title">{p.title}</div>
              <div className="post-excerpt">{p.excerpt}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="blog-pagination">
        <button
          className="page-btn page-btn-prev"
          disabled={page === 1}
          onClick={() => { setPage(p => p - 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >← Edellinen</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
          <button
            key={n}
            className={`page-btn${n === page ? ' current' : ''}`}
            onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >{n}</button>
        ))}
        <button
          className="page-btn page-btn-next"
          disabled={page === totalPages}
          onClick={() => { setPage(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >Seuraava →</button>
      </div>
    </>
  )
}
