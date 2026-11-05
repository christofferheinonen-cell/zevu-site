import type { Article } from '@/lib/articles/types'
import { SectorIllustration } from './Icons'

/** Brand-style cover drawn from the article itself when there's no photo. */
export default function ArticleCover({ a, label, size = 'lg' }: { a: Article; label: string; size?: 'lg' | 'sm' }) {
  if (a.coverImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={`zv-cover zv-cover--${size} zv-cover--img`} src={a.coverImage} alt={a.coverAlt} loading={size === 'sm' ? 'lazy' : 'eager'} />
  }
  return (
    <div className={`zv-cover zv-cover--${size} zv-cover--${a.sector}`} aria-hidden="true">
      <span className="zv-cover-label">{label}</span>
      {a.sector !== 'general' ? <SectorIllustration slug={a.sector} className="zv-cover-ill" /> : <span className="zv-cover-mark">z.</span>}
      <span className="zv-cover-kw">{a.focusKeyword || a.title}</span>
    </div>
  )
}
