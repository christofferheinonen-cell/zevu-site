import { ImageResponse } from 'next/og'
import { loadGoogleFont } from '@/lib/og-font'

export const size = { width: 96, height: 96 }
export const contentType = 'image/png'

export default async function Icon() {
  const italic = await loadGoogleFont('Fraunces', 'ital,opsz,wght@1,144,500', 'z.')
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1612',
          color: '#f2ece1',
          fontSize: 84,
          fontStyle: 'italic',
          fontFamily: italic ? 'Fraunces' : 'serif',
          borderRadius: 22,
          paddingBottom: 14,
        }}
      >
        z<span style={{ color: '#d4452a' }}>.</span>
      </div>
    ),
    { ...size, fonts: italic ? [{ name: 'Fraunces', data: italic, style: 'italic', weight: 500 }] : undefined }
  )
}
