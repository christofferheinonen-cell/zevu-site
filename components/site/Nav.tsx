'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Clock from './Clock'
import { Arrow } from './Icons'
import { CONTACT_EMAIL } from '@/lib/seo'

const LINKS = [
  { href: '/restaurants', label: 'Restaurants' },
  { href: '/bars', label: 'Bars' },
  { href: '/coffee-shops', label: 'Coffee shops' },
  { href: '/#work', label: 'Work' },
  { href: '/#prices', label: 'Prices' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const travel = useRef(0)

  useEffect(() => {
    // Hide on the way down, show again only after a deliberate upward scroll.
    // Small back-and-forth jitter (iOS momentum, address bar resizing, reveal
    // animations) accumulates in `travel` and is ignored until it passes the
    // threshold, so the bar no longer pops in at every section.
    const SHOW_AFTER = 120
    const HIDE_AFTER = 24
    let frame = 0
    const update = () => {
      frame = 0
      const y = Math.max(0, window.scrollY)
      const dy = y - lastY.current
      lastY.current = y
      setScrolled(y > 24)
      if (y < 160) {
        travel.current = 0
        setHidden(false)
        return
      }
      // Reset the accumulator whenever direction flips.
      if ((dy > 0 && travel.current < 0) || (dy < 0 && travel.current > 0)) travel.current = 0
      travel.current += dy
      if (travel.current > HIDE_AFTER) setHidden(true)
      else if (travel.current < -SHOW_AFTER) setHidden(false)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const cls = ['zv-nav', scrolled && !open && 'is-scrolled', hidden && !open && 'is-hidden'].filter(Boolean).join(' ')

  return (
    <>
      <header className={cls}>
        <div className="zv-wrap zv-nav-in">
          <Link href="/" className="zv-logo" aria-label="Zevu, home">
            zevu<i>.</i>
          </Link>
          <nav className="zv-nav-links" aria-label="Main">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="zv-nav-right">
            <span className="zv-clock-wrap"><Clock /></span>
            <Link href="/contact" className="zv-btn zv-btn--sm">
              Start a project
              <span className="zv-btn-ico"><Arrow size={14} /></span>
            </Link>
            <button
              className="zv-burger"
              aria-expanded={open}
              aria-controls="zv-sheet"
              onClick={() => setOpen(o => !o)}
            >
              {open ? 'Close' : 'Menu'} <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div id="zv-sheet" className={`zv-sheet${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav className="zv-sheet-links" aria-label="Mobile">
          {[...LINKS, { href: '/other-businesses', label: 'Other businesses' }, { href: '/contact', label: 'Contact' }].map((l, i) => (
            <Link key={l.href} href={l.href} style={{ ['--i' as string]: i }} onClick={() => setOpen(false)}>
              <small>0{i + 1}</small>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="zv-sheet-foot">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <Clock />
        </div>
      </div>
    </>
  )
}
