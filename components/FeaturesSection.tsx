import RevealWrapper from './RevealWrapper'

export default function FeaturesSection() {
  return (
    <div className="wrap">
      <div className="section" id="prosessi">
        <RevealWrapper className="feat-intro">
          <div className="eyebrow">Miten Zevu toimii</div>
          <div className="section-h">Kolme vaihetta. Yksi tavoite.</div>
          <p className="section-sub">Yksinkertainen prosessi ilman turhaa monimutkaisuutta. Sinä kerrot bisneksestäsi — me teemme loput.</p>
        </RevealWrapper>
        <div className="feat-grid">
          <RevealWrapper className="feat-card d1">
            <div className="feat-visual fv-1">
              <div className="mini-ui">
                <div className="mini-header">
                  <span className="mini-title">Mainosanalyysi</span>
                  <span className="mini-badge" style={{ background: '#FEE2E2', color: '#B91C1C' }}>3 ongelmaa</span>
                </div>
                <div className="mini-body">
                  <div className="mini-row"><div className="mini-dot" style={{ background: '#EF4444' }}></div><div className="mini-line"></div><span className="mini-val" style={{ color: '#B91C1C' }}>Heikko kuva</span></div>
                  <div className="mini-row"><div className="mini-dot" style={{ background: '#EF4444' }}></div><div className="mini-line"></div><span className="mini-val" style={{ color: '#B91C1C' }}>Väärä yleisö</span></div>
                  <div className="mini-row"><div className="mini-dot" style={{ background: '#F59E0B' }}></div><div className="mini-line"></div><span className="mini-val" style={{ color: '#92400E' }}>Teksti liian pitkä</span></div>
                </div>
              </div>
            </div>
            <div className="feat-text"><h3>Analyysi</h3><p>Katsomme nykyiset mainoksesi ja löydämme tarkalleen miksi ne eivät toimi.</p></div>
          </RevealWrapper>
          <RevealWrapper className="feat-card d2">
            <div className="feat-visual fv-2">
              <div className="mini-ui">
                <div className="mini-header">
                  <span className="mini-title">Uusi luova</span>
                  <span className="mini-badge" style={{ background: '#DBEAFE', color: '#1D4ED8' }}>Suunnitteilla</span>
                </div>
                <div className="mini-body">
                  <div style={{ height: '36px', background: 'linear-gradient(135deg,#BFDBFE,#93C5FD)', borderRadius: '6px', marginBottom: '8px' }}></div>
                  <div className="mini-row"><div className="mini-line" style={{ background: '#DBEAFE' }}></div><div className="mini-line" style={{ background: '#DBEAFE', width: '40%', flex: 'none' }}></div></div>
                  <div className="mini-row"><div className="mini-line" style={{ background: '#DBEAFE', width: '60%', flex: 'none' }}></div></div>
                </div>
              </div>
            </div>
            <div className="feat-text"><h3>Toteutus</h3><p>Suunnittelemme mainokset, jotka pysäyttävät oikean ihmisen oikealla hetkellä.</p></div>
          </RevealWrapper>
          <RevealWrapper className="feat-card d3">
            <div className="feat-visual fv-3">
              <div className="mini-ui">
                <div className="mini-header">
                  <span className="mini-title">Tulokset</span>
                  <span className="mini-badge" style={{ background: '#DCFCE7', color: '#15803D' }}>↑ +142%</span>
                </div>
                <div className="mini-bars">
                  <div className="mini-bar" style={{ height: '40%', background: '#DBEAFE' }}></div>
                  <div className="mini-bar" style={{ height: '55%', background: '#DBEAFE' }}></div>
                  <div className="mini-bar" style={{ height: '48%', background: '#DBEAFE' }}></div>
                  <div className="mini-bar" style={{ height: '70%', background: '#93C5FD' }}></div>
                  <div className="mini-bar" style={{ height: '85%', background: '#60A5FA' }}></div>
                  <div className="mini-bar" style={{ height: '100%', background: '#2563EB' }}></div>
                </div>
              </div>
            </div>
            <div className="feat-text"><h3>Tulokset</h3><p>Mainokset julkaistaan, dataa seurataan ja optimoidaan jatkuvasti.</p></div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  )
}
