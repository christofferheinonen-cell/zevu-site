'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Clock from './Clock'
import { Arrow } from './Icons'
import { CONTACT_EMAIL } from '@/lib/seo'
import type { Locale } from '@/lib/content'

export interface NavProps {
  locale: Locale
  homeHref: string
  contactHref: string
  links: { href: string; label: string }[]
  sheetExtra: { href: string; label: string }[]
  t: { start: string; menu: string; close: string; clock: string; home: string; langLabel: string }
  /** [en, es] path pairs for the language switcher. */
  pairs: [string, string][]
}

function otherLanguagePath(pathname: string, locale: Locale, pairs: [string, string][]) {
  const pair = pairs.find(([en, es]) => (locale === 'en' ? en : es) === pathname)
  if (pair) return locale === 'en' ? pair[1] : pair[0]
  return locale === 'en' ? '/es' : '/'
}

export default function Nav({ locale, homeHref, contactHref, links, sheetExtra, t, pairs }: NavProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const travel = useRef(0)

  useEffect(() => {
    // Hide on the way down, show again only after a deliberate upward scroll.
    // Small back-and-forth jitter (iOS momentum, address bar resizing) is
    // accumulated in `travel` and ignored until it passes the threshold.
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
  const altHref = otherLanguagePath(pathname, locale, pairs)

  const lang = (
    <div className="zv-lang" role="group" aria-label={t.langLabel}>
      {locale === 'en' ? (
        <><span aria-current="true">EN</span><Link href={altHref} hrefLang="es" lang="es">ES</Link></>
      ) : (
        <><Link href={altHref} hrefLang="en" lang="en">EN</Link><span aria-current="true">ES</span></>
      )}
    </div>
  )

  return (
    <>
      <header className={cls}>
        <div className="zv-wrap zv-nav-in">
          <Link href={homeHref} className="zv-logo" aria-label={t.home}>
            zevu<i>.</i>
          </Link>
          <nav className="zv-nav-links" aria-label="Main">
            {links.map(l => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="zv-nav-right">
            <span className="zv-clock-wrap"><Clock label={t.clock} /></span>
            {lang}
            <Link href={contactHref} className="zv-btn zv-btn--sm">
              {t.start}
              <span className="zv-btn-ico"><Arrow size={14} /></span>
            </Link>
            <button className="zv-burger" aria-expanded={open} aria-controls="zv-sheet" onClick={() => setOpen(o => !o)}>
              {open ? t.close : t.menu} <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div id="zv-sheet" className={`zv-sheet${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav className="zv-sheet-links" aria-label="Mobile">
          {[...links, ...sheetExtra].map((l, i) => (
            <Link key={l.href} href={l.href} style={{ ['--i' as string]: i }} onClick={() => setOpen(false)}>
              <small>0{i + 1}</small>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="zv-sheet-foot">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <Clock label={t.clock} />
        </div>
      </div>
    </>
  )
}
