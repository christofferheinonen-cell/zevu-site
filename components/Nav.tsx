'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import MetaMenu from './MetaMenu'
import MobileMenu from './MobileMenu'

export default function Nav() {
  const pathname = usePathname()
  const isBlog = pathname.startsWith('/blog')
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
      <MetaMenu />
      <Link href="/blog" className={`nav-link${isBlog ? ' active' : ''}`}>Blogi</Link>
      <Link href="/#faq" className="nav-link">FAQ</Link>
      <Link href="/#cta" className="nav-btn">Pyydä analyysi →</Link>
      <MobileMenu />
    </nav>
  )
}
