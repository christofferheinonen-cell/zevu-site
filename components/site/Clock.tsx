'use client'
import { useEffect, useState } from 'react'

const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', ...opts }).format(d)

/** Live local time in Spain. Renders a stable placeholder until hydrated. */
export function SpainTime({ mode = 'time' }: { mode?: 'time' | 'date' }) {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 15_000)
    return () => clearInterval(t)
  }, [])
  if (!now) return <span suppressHydrationWarning>{mode === 'time' ? '--:--' : '--/--/----'}</span>
  return (
    <span suppressHydrationWarning>
      {mode === 'time'
        ? fmt(now, { hour: '2-digit', minute: '2-digit', hour12: false })
        : fmt(now, { day: '2-digit', month: '2-digit', year: 'numeric' })}
    </span>
  )
}

export default function Clock({ label = 'Spain' }: { label?: string }) {
  return (
    <span className="zv-clock">
      <span className="zv-clock-dot" aria-hidden="true" />
      {label} <SpainTime />
    </span>
  )
}
