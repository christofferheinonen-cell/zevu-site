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
          background: '#080e1c',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow blob behind Z */}
        <div
          style={{
            position: 'absolute',
            right: 120,
            top: '50%',
            width: 520,
            height: 520,
            marginTop: -260,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0.12) 45%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Large decorative Z */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            marginTop: -210,
            fontSize: 420,
            fontWeight: 800,
            letterSpacing: '-16px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.06)',
            display: 'flex',
          }}
        >
          Z
        </div>

        {/* Text content */}
        <div
          style={{
            position: 'absolute',
            left: 90,
            top: 0,
            bottom: 0,
            width: 720,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                fontWeight: 800,
                color: '#fff',
              }}
            >
              Z
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: '#e2e8f0' }}>
              Zevu
            </div>
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            Meta mainosten kumppani.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: '#7c8fa6',
              lineHeight: 1.4,
              maxWidth: 620,
            }}
          >
            Ilman arvailua, geneerisiä kuvia tai tuhlattua budjettia.
          </div>

          {/* URL pill */}
          <div
            style={{
              marginTop: 48,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(37,99,235,0.4)',
              borderRadius: 100,
              padding: '10px 24px',
              width: 'fit-content',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#3b82f6',
                display: 'flex',
              }}
            />
            <div style={{ fontSize: 22, color: '#93b4e8', fontWeight: 500 }}>
              www.zevu.cc
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
