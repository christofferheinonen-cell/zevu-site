import type { SiteContent } from '@/lib/content'
import { SpainTime } from './Clock'

export default function Receipt({ t }: { t: SiteContent['receipt'] }) {
  return (
    <div className="zv-receipt-wrap" aria-label={t.aria}>
      <div className="zv-receipt">
        <div className="zv-receipt-h">zevu.</div>
        <div className="zv-receipt-sub">{t.sub}</div>
        <div className="zv-receipt-row"><span>{t.table}</span><span><SpainTime mode="date" /></span></div>
        <div className="zv-receipt-row"><span>{t.server}</span><span><SpainTime /></span></div>
        <hr />
        <ol>
          {t.items.map((item, i) => (
            <li key={item} style={{ ['--i' as string]: i }}>
              <b>1×</b> {item}
            </li>
          ))}
        </ol>
        <hr />
        <div className="zv-receipt-total"><span>{t.total}</span><span>{t.totalValue}</span></div>
        <div className="zv-barcode" aria-hidden="true" />
        <div className="zv-receipt-thanks">{t.thanks}</div>
      </div>
      <div className="zv-stamp" aria-hidden="true">
        {/* Ring text sits on a circle near the edge; textLength stretches it to close the loop exactly in any language. */}
        <svg className="zv-stamp-ring" viewBox="0 0 100 100">
          <defs><path id="zv-stamp-c" d="M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0" /></defs>
          <text fill="currentColor" fontSize="7.4" fontFamily="system-ui, sans-serif" fontWeight="700" textLength="251" lengthAdjust="spacing">
            <textPath href="#zv-stamp-c" textLength="251" lengthAdjust="spacing">{t.ring}</textPath>
          </text>
        </svg>
        <svg className="zv-stamp-inner" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.4 1.6" opacity="0.7" />
        </svg>
        <strong>EN<i>·</i>ES</strong>
      </div>
    </div>
  )
}
