import { ImageResponse } from 'next/og'

export const alt = 'Zevu - Meta mainosten kumppani'
export const size = { width: 1200, height: 1200 }
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
        {/* Glow blob */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 900,
            height: 900,
            marginTop: -450,
            marginLeft: -450,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(37,99,235,0.1) 45%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Large decorative Z */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -380,
            marginLeft: -220,
            fontSize: 760,
            fontWeight: 800,
            lineHeight: 1,
            color: 'rgba(255,255,255,0.05)',
            display: 'flex',
          }}
        >
          Z
        </div>

        {/* Text content — centered column */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 100px',
            textAlign: 'center',
          }}
        >
          {/* Brand badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 56,
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 16,
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
                fontWeight: 800,
                color: '#fff',
              }}
            >
              Z
            </div>
            <div style={{ fontSize: 48, fontWeight: 700, color: '#e2e8f0' }}>
              Zevu
            </div>
          </div>

          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: '-3px',
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            Meta mainosten kumppani.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 34,
              color: '#7c8fa6',
              lineHeight: 1.4,
              maxWidth: 800,
            }}
          >
            Ilman arvailua, geneerisiä kuvia tai tuhlattua budjettia.
          </div>

          {/* URL pill */}
          <div
            style={{
              marginTop: 64,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(37,99,235,0.4)',
              borderRadius: 100,
              padding: '14px 32px',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#3b82f6',
                display: 'flex',
              }}
            />
            <div style={{ fontSize: 28, color: '#93b4e8', fontWeight: 500 }}>
              www.zevu.cc
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
