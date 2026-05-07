import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

export default function CreativesShowcase() {
  return (
    <div className="wrap" id="creatives">
      <RevealWrapper className="section">
        <div className="creatives-intro">
          <div className="eyebrow">Esimerkkejä työstämme</div>
          <div className="section-h">Mainoksia, jotka pysäyttävät selauksen.</div>
          <p className="section-sub">Asiakkaillemme suunniteltuja luovia. Sama tuote, eri kulma — sama tavoite: pysäyttää oikea ihminen oikealla hetkellä.</p>
        </div>

        <div className="cr-legend">
          <div className="cr-legend-item"><div className="cr-legend-dot" style={{ background: '#FB923C' }}></div>Hyvinvointi · B-Cure Laser</div>
          <div className="cr-legend-item"><div className="cr-legend-dot" style={{ background: 'var(--blue)' }}></div>4 luovaa · 1 kampanja</div>
          <div className="cr-legend-item"><div className="cr-legend-dot" style={{ background: '#22C55E' }}></div>+142 % kasvu / kk</div>
        </div>

        <div className="cr-pills">
          <div className="cr-pill"><div className="cr-pill-icon">📈</div>ROAS 4.8× tällä viikolla</div>
          <div className="cr-pill"><div className="cr-pill-icon" style={{ background: '#DCFCE7' }}>↑</div>CTR 3.2 % · CPC 0,18 €</div>
        </div>

        <div className="cr-stage">
          <div className="cr-grid">
            <div className="cr-card cr-c1">
              <div className="cr-top">
                <div className="cr-av cr-av-orange">BC</div>
                <div>
                  <div className="cr-name">B-Cure Laser</div>
                  <div className="cr-meta-row">Sponsoroitu · 🌐</div>
                </div>
                <div className="cr-tag">Mainos</div>
              </div>
              <div className="cr-img">
                <Image src="/creatives/creative-1.jpg" alt="Hyödyt" width={300} height={533} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="cr-body">
                <div className="cr-body-h">Tuhannet suomalaiset ilman kipua taas.</div>
                <div className="cr-body-p">Lääkkeetön hoito kotona — kokeile ensin, vuokraus mahdollinen.</div>
                <span className="cr-cta cta-blue">Lue lisää →</span>
              </div>
            </div>

            <div className="cr-card cr-c2">
              <div className="cr-top">
                <div className="cr-av cr-av-orange">BC</div>
                <div>
                  <div className="cr-name">B-Cure Laser</div>
                  <div className="cr-meta-row">Sponsoroitu · 🌐</div>
                </div>
                <div className="cr-tag">Mainos</div>
              </div>
              <div className="cr-img">
                <Image src="/creatives/creative-2.jpg" alt="Käyttötilanne" width={300} height={533} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="cr-body">
                <div className="cr-body-h">Kivunlievitys olohuoneen sohvalta.</div>
                <div className="cr-body-p">Niveliin, selkään, lihaksiin. Kliinisesti testattu — ei sivuvaikutuksia.</div>
                <span className="cr-cta cta-dark">Tilaa kotiin →</span>
              </div>
            </div>

            <div className="cr-card cr-c3">
              <div className="cr-top">
                <div className="cr-av cr-av-orange">BC</div>
                <div>
                  <div className="cr-name">B-Cure Laser</div>
                  <div className="cr-meta-row">Sponsoroitu · 🌐</div>
                </div>
                <div className="cr-tag">Mainos</div>
              </div>
              <div className="cr-img">
                <Image src="/creatives/creative-3.jpg" alt="Diagnoosikohdistus" width={300} height={533} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="cr-body">
                <div className="cr-body-h">Tehokas kivunlievitys ilman lääkkeitä.</div>
                <div className="cr-body-p">Nivelrikko, hermosärky, fibromyalgia. Tuhansien suomalaisten valinta.</div>
                <span className="cr-cta cta-blue">Katso lisää →</span>
              </div>
            </div>

            <div className="cr-card cr-c4">
              <div className="cr-top">
                <div className="cr-av cr-av-rose">JP</div>
                <div>
                  <div className="cr-name">B-Cure Laser</div>
                  <div className="cr-meta-row">Sponsoroitu · 🌐</div>
                </div>
                <div className="cr-tag">Mainos</div>
              </div>
              <div className="cr-img">
                <Image src="/creatives/creative-4.jpg" alt="Asiakastarina" width={300} height={533} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="cr-body">
                <div className="cr-body-h">&ldquo;Polvi oli kipeä 7 kuukautta…&rdquo;</div>
                <div className="cr-body-p">Lue Johannan tarina — ja miksi B-Cure on Suomen suosituin kotilaserlaite.</div>
                <span className="cr-cta cta-light">Lue tarina →</span>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
