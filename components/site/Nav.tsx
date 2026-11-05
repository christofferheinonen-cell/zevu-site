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

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 240 && y > lastY.current + 4)
      if (y < lastY.current - 4 || y < 240) setHidden(false)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
