'use client'
import { useEffect, useState } from 'react'

export default function Rotator({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI(n => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])
  const prev = (i - 1 + words.length) % words.length
  return (
    <span className="zv-rotator" aria-hidden="true">
      {words.map((w, n) => (
        <span key={w} className={n === i ? 'is-on' : n === prev ? 'is-out' : ''}>
          {w}
        </span>
      ))}
    </span>
  )
}
