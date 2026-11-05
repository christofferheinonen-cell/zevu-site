import { MARQUEE } from '@/lib/site-content'
import { Asterisk } from './Icons'

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div className="zv-marquee-item" aria-hidden={hidden || undefined}>
      {MARQUEE.map(m => (
        <span key={m} style={{ display: 'inline-flex', alignItems: 'center', gap: 36 }}>
          {m} <Asterisk />
        </span>
      ))}
    </div>
  )
  return (
    <div className="zv-marquee">
      <div className="zv-marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
