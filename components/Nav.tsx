'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isBlog = pathname.startsWith('/blog')

  return (
    <nav className="nav-wrap">
      <Link href="/" className="nav-logo">Zevu</Link>
      <Link href="/#prosessi" className="nav-link">Prosessi</Link>
      <Link href="/blog" className={`nav-link${isBlog ? ' active' : ''}`}>Blogi</Link>
      <Link href="/#faq" className="nav-link">FAQ</Link>
      <Link href="/#cta" className="nav-btn">Pyydä analyysi →</Link>
    </nav>
  )
}
