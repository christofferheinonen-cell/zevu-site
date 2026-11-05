import Link from 'next/link'
import { SECTORS } from '@/lib/site-content'
import { Arrow, SectorIllustration } from './Icons'

export default function SectorIndex() {
  return (
    <div className="zv-index">
      {SECTORS.map((s, i) => (
        <Link key={s.slug} href={`/${s.slug}`} className="zv-row" data-rv="" style={{ ['--d' as string]: i * 80 }}>
          <span className="zv-row-n">{s.index}</span>
          <span className="zv-row-t">{s.label}</span>
          <span className="zv-row-d">{s.teaser}</span>
          <span className="zv-row-a"><Arrow /></span>
          <SectorIllustration slug={s.slug} className="zv-row-ill" />
        </Link>
      ))}
    </div>
  )
}
