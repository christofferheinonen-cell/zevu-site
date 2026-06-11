'use client'
import { useEffect, useRef, useState } from 'react'

interface Stat { prefix?: string; value: number; decimals?: number; suffix?: string; label: string }

function StatItem({ s, run }: { s: Stat; run: boolean }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const dur = 1300
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setV(s.value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, s.value])

  const num = s.decimals ? v.toFixed(s.decimals) : Math.round(v).toString()
  return (
    <div className="stat-item">
      <div className="stat-num">{s.prefix ?? ''}{num}{s.suffix ?? ''}</div>
      <div className="stat-label">{s.label}</div>
    </div>
  )
}

export default function StatStrip({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); o.disconnect() }
    }, { threshold: 0.35 })
    o.observe(el)
    return () => o.disconnect()
  }, [])

  return (
    <div className="stat-strip" ref={ref}>
      {stats.map((s, i) => <StatItem key={i} s={s} run={on} />)}
    </div>
  )
}
