import type { SectorKey } from '@/lib/content'

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Asterisk() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2v24M2 14h24M5.5 5.5l17 17M22.5 5.5l-17 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

/** Hand-drawn style line illustrations, one per sector. */
export function SectorIllustration({ slug, className }: { slug: SectorKey; className?: string }) {
  const common = {
    viewBox: '0 0 120 120',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  }
  switch (slug) {
    case 'restaurants':
      return (
        <svg {...common}>
          <circle cx="62" cy="64" r="36" />
          <circle cx="62" cy="64" r="24" />
          <path d="M18 22v26c0 4 3 7 7 7M25 22v30M32 22v26c0 4-3 7-7 7M25 55v45" />
          <path d="M104 20c-8 4-12 16-12 30 0 5 4 8 8 8h4v42" />
          <path d="M52 58c4-6 14-6 18 0" />
        </svg>
      )
    case 'bars':
      return (
        <svg {...common}>
          <path d="M22 24h76L60 66 22 24Z" />
          <path d="M60 66v34M42 102h36" />
          <path d="M34 37h52" />
          <circle cx="84" cy="22" r="9" />
          <path d="M78 15l16-11" />
          <circle cx="54" cy="44" r="4" />
        </svg>
      )
    case 'coffee-shops':
      return (
        <svg {...common}>
          <path d="M24 52h62v12c0 18-14 32-31 32S24 82 24 64V52Z" />
          <path d="M86 58h6c7 0 12 5 12 11s-5 11-12 11h-9" />
          <path d="M14 104h86" />
          <path d="M44 40c-6-6 6-10 0-18M58 38c-6-6 6-10 0-18M72 40c-6-6 6-10 0-18" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M16 46 26 18h68l10 28" />
          <path d="M16 46c0 7 5 12 11 12s11-5 11-12c0 7 5 12 11 12s11-5 11-12c0 7 5 12 11 12s11-5 11-12c0 7 5 12 11 12s11-5 11-12" />
          <path d="M22 58v44h76V58" />
          <path d="M48 102V74h24v28" />
          <path d="M8 102h104" />
        </svg>
      )
  }
}
