import Link from 'next/link'
import { pathFor, type SiteContent } from '@/lib/content'
import { Arrow, SectorIllustration } from './Icons'

export default function SectorIndex({ c }: { c: SiteContent }) {
  return (
    <div className="zv-index">
      {c.sectors.map((s, i) => (
        <Link key={s.key} href={pathFor(c.locale, s.key)} className="zv-row" data-rv="" style={{ ['--d' as string]: i * 80 }}>
          <span className="zv-row-n">{s.index}</span>
          <span className="zv-row-t">{s.label}</span>
          <span className="zv-row-d">{s.teaser}</span>
          <span className="zv-row-a"><Arrow /></span>
          <SectorIllustration slug={s.key} className="zv-row-ill" />
        </Link>
      ))}
    </div>
  )
}
