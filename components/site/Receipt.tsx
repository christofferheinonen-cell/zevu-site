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
        <svg viewBox="0 0 100 100">
          <defs><path id="zv-stamp-c" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
          <text fill="currentColor" fontSize="9" letterSpacing="2.2" fontFamily="system-ui, sans-serif" fontWeight="600">
            <textPath href="#zv-stamp-c">{t.ring}</textPath>
          </text>
        </svg>
        <strong>EN·ES</strong>
      </div>
    </div>
  )
}
