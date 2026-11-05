import Link from 'next/link'
import { Arrow } from './Icons'

export default function Button({
  href,
  children,
  variant,
  size,
}: {
  href: string
  children: React.ReactNode
  variant?: 'light' | 'tomato'
  size?: 'sm'
}) {
  const cls = ['zv-btn', variant && `zv-btn--${variant}`, size && `zv-btn--${size}`].filter(Boolean).join(' ')
  return (
    <Link href={href} className={cls}>
      {children}
      <span className="zv-btn-ico"><Arrow /></span>
    </Link>
  )
}
