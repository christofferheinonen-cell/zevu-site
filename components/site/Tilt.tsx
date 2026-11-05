'use client'
import { useRef } from 'react'

/** Gentle 3D tilt following the pointer (mouse only). */
export default function Tilt({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty('--ry', `${x * 5}deg`)
    ref.current.style.setProperty('--rx', `${-y * 4}deg`)
  }
  const reset = () => {
    ref.current?.style.setProperty('--ry', '0deg')
    ref.current?.style.setProperty('--rx', '0deg')
  }
  return (
    <div ref={ref} className={className} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </div>
  )
}
