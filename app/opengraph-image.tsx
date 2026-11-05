import { ImageResponse } from 'next/og'
import { loadGoogleFont } from '@/lib/og-font'

export const alt = 'Zevu — Websites for restaurants, bars & coffee shops in Spain'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const LINE1 = 'Websites that'
const LINE2 = 'fill tables.'

export default async function OpengraphImage() {
  const [regular, italic] = await Promise.all([
    loadGoogleFont('Fraunces', 'opsz,wght@144,340', `${LINE1}zevu`),
    loadGoogleFont('Fraunces', 'ital,opsz,wght@1,144,340', `${LINE2}zevu.`),
  ])
  const fonts = [
    regular && { name: 'Fraunces', data: regular, style: 'normal' as const, weight: 400 as const },
    italic && { name: 'Fraunces', data: italic, style: 'italic' as const, weight: 400 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; style: 'normal' | 'italic'; weight: 400 }[]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f2ece1',
          color: '#1a1612',
          padding: '64px 72px',
          fontFamily: fonts.length ? 'Fraunces' : 'serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'sans-serif', fontSize: 22, letterSpacing: 3, color: '#554b40' }}>
          <div style={{ display: 'flex', fontFamily: fonts.length ? 'Fraunces' : 'serif', fontStyle: 'italic', fontSize: 52, letterSpacing: -2, color: '#1a1612' }}>
            zevu<span style={{ color: '#d4452a' }}>.</span>
          </div>
          <div style={{ display: 'flex' }}>RESTAURANTS · BARS · COFFEE SHOPS — SPAIN</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 150, lineHeight: 0.92, letterSpacing: -6 }}>
          <div style={{ display: 'flex' }}>{LINE1}</div>
          <div style={{ display: 'flex', fontStyle: 'italic', color: '#d4452a' }}>{LINE2}</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  )
}
