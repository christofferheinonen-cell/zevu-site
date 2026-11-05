'use client'
import { useEffect } from 'react'

const SELECTOR = '.zv [data-rv]:not(.is-in), .zv .zv-lines:not(.is-in)'

/**
 * One observer for the whole site: anything with [data-rv] or .zv-lines gets
 * `.is-in` the first time it scrolls into view. A MutationObserver picks up
 * content that streams in after hydration (async pages) or on client-side
 * navigation, so nothing is left invisible.
 */
export default function Reveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      const showAll = () => document.querySelectorAll(SELECTOR).forEach(el => el.classList.add('is-in'))
      showAll()
      const mo = new MutationObserver(showAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
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
    const watched = new WeakSet<Element>()
    const scan = () =>
      document.querySelectorAll(SELECTOR).forEach(el => {
        if (!watched.has(el)) {
          watched.add(el)
          io.observe(el)
        }
      })
    scan()
    let queued = false
    const mo = new MutationObserver(() => {
      if (queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        scan()
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [])
  return null
}
