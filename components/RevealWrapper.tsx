'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: 0 | 1 | 2 | 3
}

const DELAY_MAP = { 0: '', 1: 'd1', 2: 'd2', 3: 'd3' }

export default function RevealWrapper({ children, className = '', id, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('on') },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = DELAY_MAP[delay as 0 | 1 | 2 | 3] || ''

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`.trim()} id={id}>
      {children}
    </div>
  )
}
