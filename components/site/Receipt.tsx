import { RECEIPT } from '@/lib/site-content'
import { SpainTime } from './Clock'

export default function Receipt() {
  return (
    <div className="zv-receipt-wrap" aria-label="What every Zevu website includes">
      <div className="zv-receipt">
        <div className="zv-receipt-h">zevu.</div>
        <div className="zv-receipt-sub">Website studio · España</div>
        <div className="zv-receipt-row"><span>Mesa 04 · Covers 2</span><span><SpainTime mode="date" /></span></div>
        <div className="zv-receipt-row"><span>Server: Zevu</span><span><SpainTime /></span></div>
        <hr />
        <ol>
          {RECEIPT.map((item, i) => (
            <li key={item} style={{ ['--i' as string]: i }}>
              <b>1×</b> {item}
            </li>
          ))}
        </ol>
        <hr />
        <div className="zv-receipt-total"><span>TOTAL</span><span>More regulars</span></div>
        <div className="zv-barcode" aria-hidden="true" />
        <div className="zv-receipt-thanks">*** GRACIAS · VUELVA PRONTO ***</div>
      </div>
      <div className="zv-stamp" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs><path id="zv-stamp-c" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
          <text fill="currentColor" fontSize="10.5" letterSpacing="2.6" fontFamily="system-ui, sans-serif" fontWeight="600">
            <textPath href="#zv-stamp-c">BILINGUAL · FAST · YOURS · </textPath>
          </text>
        </svg>
        <strong>EN·ES</strong>
      </div>
    </div>
  )
}
