'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * One observer for the whole page: anything with [data-rv] or .zv-lines
 * gets `.is-in` the first time it scrolls into view.
 */
export default function Reveal() {
  const pathname = usePathname()
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.zv [data-rv]:not(.is-in), .zv .zv-lines:not(.is-in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return null
}
