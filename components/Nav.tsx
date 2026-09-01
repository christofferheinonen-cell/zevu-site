'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Nav() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) { setHidden(false); lastY.current = y; return }
      if (y > lastY.current + 6) setHidden(true)
      else if (y < lastY.current - 6) setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav-wrap${hidden ? ' nav-hidden' : ''}`}>
      <Link href="/" className="nav-logo">Zevu</Link>
      <div className="nav-links">
        <Link href="/#palvelut" className="nav-link">Palvelut</Link>
        <Link href="/#prosessi" className="nav-link">Prosessi</Link>
        <Link href="/#hinnat" className="nav-link">Hinnat</Link>
      </div>
      <Link href="/#ota-yhteytta" className="nav-btn">Aloita projekti →</Link>
      <MobileMenu />
    </nav>
  )
}
