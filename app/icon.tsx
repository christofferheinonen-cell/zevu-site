import { ImageResponse } from 'next/og'

export const size = { width: 96, height: 96 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0C1121',
          color: '#FFFFFF',
          fontSize: 66,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          borderRadius: 21,
        }}
      >
        Z
      </div>
    ),
    { ...size }
  )
}
