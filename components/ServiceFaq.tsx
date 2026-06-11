'use client'
import { useState } from 'react'

export default function ServiceFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(-1)
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
          <div className="faq-q">
            {f.q}
            <div className="faq-icon" />
          </div>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  )
}
