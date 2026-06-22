import { ImageResponse } from 'next/og'

export const alt = 'Zevu - Meta mainosten kumppani'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background:
            'linear-gradient(135deg, #0C1121 0%, #111827 60%, #0C1121 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 116,
            fontWeight: 800,
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          Zevu
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 46,
            fontWeight: 600,
            letterSpacing: '-1px',
            maxWidth: 880,
            lineHeight: 1.15,
          }}
        >
          Meta-mainonta, joka toimii.
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 28,
            color: '#9aa3b2',
            maxWidth: 820,
            lineHeight: 1.3,
          }}
        >
          Ilman arvailua, geneerisiä kuvia tai tuhlattua budjettia.
        </div>
        <div
          style={{
            marginTop: 52,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              background: '#2563EB',
            }}
          />
          <div style={{ fontSize: 26, color: '#cbd2dd', fontWeight: 500 }}>
            www.zevu.cc
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
