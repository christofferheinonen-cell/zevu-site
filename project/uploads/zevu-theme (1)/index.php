<?php get_header(); ?>

<style>
/* HERO */
.hero{max-width:1160px;margin:0 auto;padding:156px 48px 100px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.hero-kicker{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--sub);background:var(--white);border:1px solid var(--border);border-radius:100px;padding:5px 12px;margin-bottom:28px;animation:up .5s ease both .05s;}
.kicker-dot{width:6px;height:6px;border-radius:50%;background:var(--blue);flex-shrink:0;}
.hero h1{font-size:clamp(40px,5.2vw,70px);font-weight:800;line-height:1.06;letter-spacing:-2.5px;margin-bottom:20px;animation:up .6s ease both .1s;}
.hero h1 .muted{color:var(--sub);font-weight:300;}
.hero-sub{font-size:15px;font-weight:400;line-height:1.75;color:var(--sub);max-width:360px;margin-bottom:36px;animation:up .6s ease both .15s;}
.hero-btns{display:flex;align-items:center;gap:10px;animation:up .6s ease both .2s;}

/* HERO VISUAL */
.hero-visual{position:relative;animation:up .7s ease both .15s;}
.float-pill{position:absolute;background:var(--white);border:1px solid var(--border);border-radius:100px;padding:9px 16px;box-shadow:var(--sh2);display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;white-space:nowrap;z-index:10;}
.fp-1{top:-12px;right:0;animation:float 5s ease-in-out infinite .5s;}
.fp-2{bottom:10px;left:-10px;animation:float 6s ease-in-out infinite 1.8s;}
.pill-icon{width:22px;height:22px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;}
.pill-dot{width:7px;height:7px;border-radius:50%;background:#22C55E;animation:pulse 2s ease infinite;flex-shrink:0;}
.ad-stack{position:relative;width:100%;height:420px;}
.ad-card{position:absolute;background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:var(--sh2);}
.ac-main{width:260px;top:30px;right:0;animation:float 6s ease-in-out infinite 1s;}
.ac-secondary{width:240px;bottom:0;left:0;animation:float 7s ease-in-out infinite 2.5s;}
.ad-topbar{padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--border);}
.ad-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0;}
.av-blue{background:linear-gradient(135deg,#3B82F6,#1D4ED8);}
.av-slate{background:linear-gradient(135deg,#475569,#1E293B);}
.ad-page-name{font-size:12px;font-weight:700;}
.ad-page-meta{font-size:10px;color:var(--sub);}
.ad-sponsored{margin-left:auto;font-size:9px;font-weight:600;color:var(--sub);background:var(--bg);padding:3px 8px;border-radius:4px;}
.ad-image{width:100%;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;}
.ai-wellness{background:linear-gradient(145deg,#DBEAFE 0%,#BFDBFE 60%,#93C5FD 100%);}
.ai-resto{background:linear-gradient(145deg,#D1FAE5 0%,#A7F3D0 60%,#6EE7B7 100%);}
.ad-image-label{font-size:13px;font-weight:700;color:#fff;background:rgba(0,0,0,.35);padding:6px 14px;border-radius:8px;}
.ad-body{padding:12px 14px;}
.ad-body-head{font-size:13px;font-weight:700;margin-bottom:3px;letter-spacing:-.1px;}
.ad-body-sub{font-size:11px;color:var(--sub);margin-bottom:10px;line-height:1.5;}
.ad-cta-btn{display:block;text-align:center;font-size:12px;font-weight:700;padding:8px;border-radius:8px;text-decoration:none;}
.cta-blue{background:var(--blue-dim);color:var(--blue);}
.cta-dark{background:var(--text);color:#fff;}

/* LOGOS */
.logos{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:18px 0;overflow:hidden;display:flex;align-items:center;}
.logos-tag{font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--sub);padding:0 36px;white-space:nowrap;flex-shrink:0;}
.logos-run{display:flex;align-items:center;gap:48px;animation:run 22s linear infinite;white-space:nowrap;padding-right:48px;}
.logos-run span{font-size:13px;font-weight:700;color:#C2C8D4;letter-spacing:-.2px;}
.logos-sep{width:3px;height:3px;border-radius:50%;background:var(--border);}
@keyframes run{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* SECTIONS */
.section{padding:120px 0;}
.feat-intro{text-align:center;margin-bottom:56px;}
.feat-intro .section-h{max-width:520px;margin:0 auto 14px;}
.feat-intro .section-sub{margin:0 auto;}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.feat-card{background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:var(--sh);transition:box-shadow .2s,transform .2s;}
.feat-card:hover{box-shadow:var(--sh2);transform:translateY(-3px);}
.feat-visual{height:160px;padding:20px;display:flex;align-items:flex-end;justify-content:center;overflow:hidden;}
.fv-1{background:linear-gradient(160deg,#EEF3FD 0%,#DBEAFE 100%);}
.fv-2{background:linear-gradient(160deg,#EFF6FF 0%,#DBEAFE 80%);}
.fv-3{background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);}
.mini-ui{background:var(--white);border:1px solid var(--border);border-radius:10px;width:100%;box-shadow:0 4px 16px rgba(0,0,0,.08);overflow:hidden;}
.mini-header{padding:8px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;}
.mini-title{font-size:10px;font-weight:700;}
.mini-badge{font-size:9px;font-weight:700;padding:2px 7px;border-radius:100px;}
.mini-body{padding:10px 12px;}
.mini-row{display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid #F0F2F5;}
.mini-row:last-child{border-bottom:none;}
.mini-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;}
.mini-line{flex:1;height:7px;background:var(--bg);border-radius:3px;}
.mini-val{font-size:10px;font-weight:700;}
.mini-bars{display:flex;align-items:flex-end;gap:3px;height:36px;padding:8px 12px 0;}
.mini-bar{flex:1;border-radius:3px 3px 0 0;}
.feat-text{padding:20px 24px 24px;}
.feat-text h3{font-size:17px;font-weight:700;letter-spacing:-.3px;margin-bottom:8px;}
.feat-text p{font-size:13px;color:var(--sub);line-height:1.75;}

/* PERF */
.perf-section{padding:120px 0;}
.perf-intro{text-align:center;margin-bottom:48px;}
.perf-intro .section-h{max-width:560px;margin:0 auto 14px;}
.perf-intro .section-sub{margin:0 auto;}
.perf-tabs{display:flex;align-items:center;gap:4px;justify-content:center;margin-bottom:32px;flex-wrap:wrap;}
.ptab{font-family:inherit;font-size:13px;font-weight:600;color:var(--sub);background:transparent;border:1.5px solid var(--border);border-radius:100px;padding:8px 18px;cursor:pointer;transition:all .2s;}
.ptab.active,.ptab:hover{background:var(--text);color:var(--white);border-color:var(--text);}
.perf-visual{background:var(--white);border:1px solid var(--border);border-radius:20px;box-shadow:var(--sh2);overflow:hidden;}
.perf-topbar{padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px;}
.perf-dots{display:flex;gap:6px;}
.pd{width:10px;height:10px;border-radius:50%;}
.pd-r{background:#FF5F57;}.pd-y{background:#FFBC2E;}.pd-g{background:#27C93F;}
.perf-body{padding:28px;display:grid;grid-template-columns:240px 1fr;gap:24px;min-height:300px;}
.perf-card-sm{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px;}
.perf-card-sm h4{font-size:12px;font-weight:700;margin-bottom:4px;}
.perf-card-sm p{font-size:11px;color:var(--sub);line-height:1.6;}
.perf-metric{margin-top:10px;}
.perf-metric-val{font-size:22px;font-weight:800;letter-spacing:-1px;}
.perf-metric-label{font-size:10px;color:var(--sub);font-weight:500;}
.perf-main-title{font-size:20px;font-weight:800;letter-spacing:-.5px;margin-bottom:6px;}
.perf-main-sub{font-size:13px;color:var(--sub);margin-bottom:20px;}
.big-chart{background:var(--bg);border-radius:10px;padding:16px;height:160px;display:flex;align-items:flex-end;gap:6px;margin-bottom:16px;}
.big-bar{flex:1;border-radius:5px 5px 0 0;}
.bb-hi{background:#2563EB;}.bb-mid{background:#93C5FD;}.bb-lo{background:#DBEAFE;}
.stat-row{display:flex;gap:12px;}
.stat-item{flex:1;background:var(--bg);border-radius:8px;padding:12px 14px;}
.stat-item-val{font-size:18px;font-weight:800;letter-spacing:-.5px;}
.stat-item-label{font-size:11px;color:var(--sub);margin-top:2px;}

/* DARK CTA */
.dark-section{background:var(--dark);position:relative;overflow:hidden;}
.dark-section::before{content:'';position:absolute;top:-200px;right:-100px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(37,99,235,.18) 0%,transparent 65%);pointer-events:none;}
.dark-section::after{content:'';position:absolute;bottom:-150px;left:-50px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(37,99,235,.08) 0%,transparent 65%);pointer-events:none;}
.dark-inner{position:relative;z-index:1;}
.dark-section .eyebrow{color:rgba(243,244,246,.3);}
.dark-section .section-h{color:var(--bg);}
.dark-section .section-sub{color:rgba(243,244,246,.4);}
.cta-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.cta-form .wpforms-field{margin-bottom:12px;}
.cta-form .wpforms-field label{display:block;font-size:11px;font-weight:600;color:rgba(243,244,246,.35);margin-bottom:8px;letter-spacing:.3px;}
.cta-form .wpforms-field input[type="text"],.cta-form .wpforms-field input[type="email"]{width:100%;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:var(--bg);padding:12px 16px;outline:none;transition:border-color .2s;}
.cta-form .wpforms-field input::placeholder{color:rgba(243,244,246,.22);}
.cta-form .wpforms-field input:focus{border-color:rgba(255,255,255,.28);}
.cta-form .wpforms-submit-container{margin:4px 0 0;padding:0;}
.cta-form .wpforms-submit{width:100%;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;background:var(--white);color:var(--text);border:none;border-radius:10px;padding:14px;cursor:pointer;transition:background .15s,color .15s,transform .15s;}
.cta-form .wpforms-submit:hover{background:var(--blue);color:#fff;transform:translateY(-1px);}
.form-note{font-size:12px;color:rgba(243,244,246,.2);margin-top:10px;text-align:center;}

/* PROOF */
.proof-placeholder{border:1.5px dashed var(--border);border-radius:16px;padding:80px;text-align:center;}
.proof-placeholder strong{display:block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--border);margin-bottom:8px;}
.proof-placeholder p{font-size:13px;color:var(--border);}

/* FAQ */
.faq-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start;}
.faq-item{border-top:1px solid var(--border);padding:20px 0;cursor:pointer;}
.faq-item:last-child{border-bottom:1px solid var(--border);}
.faq-q{display:flex;align-items:center;justify-content:space-between;font-size:15px;font-weight:600;letter-spacing:-.2px;user-select:none;}
.faq-icon{width:22px;height:22px;border-radius:50%;background:var(--bg);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px;transition:transform .2s,background .2s,color .2s;}
.faq-item.open .faq-icon{transform:rotate(45deg);background:var(--text);color:#fff;border-color:var(--text);}
.faq-a{font-size:14px;color:var(--sub);line-height:1.8;max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease;}
.faq-item.open .faq-a{max-height:200px;padding-top:12px;}

@keyframes up{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(.85);}}

@media(max-width:860px){
  .hero{grid-template-columns:1fr;padding:110px 24px 60px;gap:40px;}
  .feat-grid,.perf-body,.cta-grid,.faq-grid{grid-template-columns:1fr;}
  .section,.perf-section{padding:80px 0;}
  .fp-1,.fp-2{display:none;}
}
</style>

<!-- HERO -->
<div class="wrap">
  <div class="hero">
    <div class="hero-left">
      <div class="hero-kicker"><span class="kicker-dot"></span>Meta-mainonta</div>
      <h1>Mainoksesi<br>pyörivät.<br><span class="muted">Asiakkaat<br>eivät tule.</span></h1>
      <p class="hero-sub">Meta mainonta, joka toimii. Ilman arvailua, geneerisiä kuvia tai tuhlattua budjettia.</p>
      <div class="hero-btns">
        <a href="#cta" class="btn-dark">Pyydä ilmainen analyysi →</a>
        <a href="#prosessi" class="btn-outline">Miten toimii</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="float-pill fp-1"><div class="pill-icon" style="background:#EEF3FD;">📈</div>ROAS 4.8× tällä viikolla</div>
      <div class="ad-stack">
        <div class="ad-card ac-main">
          <div class="ad-topbar"><div class="ad-avatar av-blue">TT</div><div><div class="ad-page-name">Terveystekniikka</div><div class="ad-page-meta">Sponsoroitu · 🌐</div></div><div class="ad-sponsored">Mainos</div></div>
          <div class="ad-image ai-wellness"><span class="ad-image-label">Kivunlievitys kotona</span></div>
          <div class="ad-body"><div class="ad-body-head">Tunnetko kipua joka päivä?</div><div class="ad-body-sub">Lääkkeetön hoito kotona — turvallinen ja testattu.</div><a class="ad-cta-btn cta-blue" href="#">Lue lisää →</a></div>
        </div>
        <div class="ad-card ac-secondary">
          <div class="ad-topbar"><div class="ad-avatar av-slate">RK</div><div><div class="ad-page-name">Ravintola Kulta</div><div class="ad-page-meta">Sponsoroitu · 🌐</div></div><div class="ad-sponsored">Mainos</div></div>
          <div class="ad-image ai-resto"><span class="ad-image-label">Illallinen kahdelle</span></div>
          <div class="ad-body"><div class="ad-body-head">Pöytä varattu. Kokemus odottaa.</div><div class="ad-body-sub">Varaa pöytäsi tänään — erikoistarjous viikonlopulle.</div><a class="ad-cta-btn cta-dark" href="#">Varaa pöytä →</a></div>
        </div>
      </div>
      <div class="float-pill fp-2"><span class="pill-dot"></span>Mainos julkaistu juuri nyt</div>
    </div>
  </div>
</div>

<div class="logos">
  <div class="logos-tag">Toimii toimialoilla</div>
  <div style="overflow:hidden;flex:1;"><div class="logos-run"><span>Ravintolat</span><span class="logos-sep"></span><span>Hyvinvointi</span><span class="logos-sep"></span><span>Kiinteistöt</span><span class="logos-sep"></span><span>Remontit</span><span class="logos-sep"></span><span>Kauneus</span><span class="logos-sep"></span><span>Vähittäiskauppa</span><span class="logos-sep"></span><span>Ravintolat</span><span class="logos-sep"></span><span>Hyvinvointi</span><span class="logos-sep"></span><span>Kiinteistöt</span><span class="logos-sep"></span><span>Remontit</span><span class="logos-sep"></span><span>Kauneus</span><span class="logos-sep"></span><span>Vähittäiskauppa</span><span class="logos-sep"></span></div></div>
</div>

<hr class="divider">
<div class="wrap">
  <div class="section">
    <div class="feat-intro reveal">
      <div class="eyebrow">Miten Zevu toimii</div>
      <div class="section-h">Kolme vaihetta. Yksi tavoite.</div>
      <p class="section-sub">Yksinkertainen prosessi ilman turhaa monimutkaisuutta. Sinä kerrot bisneksestäsi — me teemme loput.</p>
    </div>
    <div class="feat-grid" id="prosessi">
      <div class="feat-card reveal d1">
        <div class="feat-visual fv-1"><div class="mini-ui"><div class="mini-header"><span class="mini-title">Mainosanalyysi</span><span class="mini-badge" style="background:#FEE2E2;color:#B91C1C;">3 ongelmaa</span></div><div class="mini-body"><div class="mini-row"><div class="mini-dot" style="background:#EF4444;"></div><div class="mini-line"></div><span class="mini-val" style="color:#B91C1C;">Heikko kuva</span></div><div class="mini-row"><div class="mini-dot" style="background:#EF4444;"></div><div class="mini-line"></div><span class="mini-val" style="color:#B91C1C;">Väärä yleisö</span></div><div class="mini-row"><div class="mini-dot" style="background:#F59E0B;"></div><div class="mini-line"></div><span class="mini-val" style="color:#92400E;">Teksti liian pitkä</span></div></div></div></div>
        <div class="feat-text"><h3>Analyysi</h3><p>Katsomme nykyiset mainoksesi ja löydämme tarkalleen miksi ne eivät toimi.</p></div>
      </div>
      <div class="feat-card reveal d2">
        <div class="feat-visual fv-2"><div class="mini-ui"><div class="mini-header"><span class="mini-title">Uusi luova</span><span class="mini-badge" style="background:#DBEAFE;color:#1D4ED8;">Suunnitteilla</span></div><div class="mini-body"><div style="height:36px;background:linear-gradient(135deg,#BFDBFE,#93C5FD);border-radius:6px;margin-bottom:8px;"></div><div class="mini-row"><div class="mini-line" style="background:#DBEAFE;"></div><div class="mini-line" style="background:#DBEAFE;width:40%;flex:none;"></div></div><div class="mini-row"><div class="mini-line" style="background:#DBEAFE;width:60%;flex:none;"></div></div></div></div></div>
        <div class="feat-text"><h3>Toteutus</h3><p>Suunnittelemme mainokset, jotka pysäyttävät oikean ihmisen oikealla hetkellä.</p></div>
      </div>
      <div class="feat-card reveal d3">
        <div class="feat-visual fv-3"><div class="mini-ui"><div class="mini-header"><span class="mini-title">Tulokset</span><span class="mini-badge" style="background:#DCFCE7;color:#15803D;">↑ +142%</span></div><div class="mini-bars"><div class="mini-bar" style="height:40%;background:#DBEAFE;"></div><div class="mini-bar" style="height:55%;background:#DBEAFE;"></div><div class="mini-bar" style="height:48%;background:#DBEAFE;"></div><div class="mini-bar" style="height:70%;background:#93C5FD;"></div><div class="mini-bar" style="height:85%;background:#60A5FA;"></div><div class="mini-bar" style="height:100%;background:#2563EB;"></div></div></div></div>
        <div class="feat-text"><h3>Tulokset</h3><p>Mainokset julkaistaan, dataa seurataan ja optimoidaan jatkuvasti.</p></div>
      </div>
    </div>
  </div>
</div>

<hr class="divider">
<div class="wrap">
  <div class="perf-section reveal">
    <div class="perf-intro"><div class="eyebrow">Rakennettu tuloksille</div><div class="section-h">Oikea viesti. Oikea ihminen. Oikeaan aikaan.</div><p class="section-sub">Ei geneerisiä mainoksia. Jokaiselle asiakkaalle räätälöity lähestymistapa.</p></div>
    <div class="perf-tabs"><button class="ptab active">Kohdentaminen</button><button class="ptab">Luova suunnittelu</button><button class="ptab">Budjetointi</button><button class="ptab">Raportointi</button></div>
    <div class="perf-visual">
      <div class="perf-topbar"><div class="perf-dots"><div class="pd pd-r"></div><div class="pd pd-y"></div><div class="pd pd-g"></div></div><span style="font-size:12px;color:var(--sub);font-weight:500;margin-left:12px;">Meta Business Suite — Kampanjanäkymä</span></div>
      <div class="perf-body">
        <div><div class="perf-card-sm"><h4>Hyvinvointi-kampanja</h4><p>Naiset 35–64 · Helsinki, Espoo, Vantaa</p><div class="perf-metric"><div class="perf-metric-val">12 400</div><div class="perf-metric-label">tavoitettu tällä viikolla</div></div></div><div class="perf-card-sm"><h4>Ravintola-kampanja</h4><p>25–55 v. · 5 km säde ravintolasta</p><div class="perf-metric"><div class="perf-metric-val">8 100</div><div class="perf-metric-label">tavoitettu tällä viikolla</div></div></div></div>
        <div><div class="perf-main-title">Tavoittavuus kasvaa joka viikko.</div><div class="perf-main-sub">Optimoitu kohdentaminen tuo oikeat asiakkaat — ei pelkkiä klikkejä.</div><div class="big-chart"><div class="big-bar bb-lo" style="height:30%"></div><div class="big-bar bb-lo" style="height:40%"></div><div class="big-bar bb-lo" style="height:35%"></div><div class="big-bar bb-mid" style="height:52%"></div><div class="big-bar bb-mid" style="height:60%"></div><div class="big-bar bb-hi" style="height:75%"></div><div class="big-bar bb-hi" style="height:82%"></div><div class="big-bar bb-hi" style="height:90%"></div><div class="big-bar bb-hi" style="height:100%"></div></div><div class="stat-row"><div class="stat-item"><div class="stat-item-val">26.2k</div><div class="stat-item-label">Tavoitettu / viikko</div></div><div class="stat-item"><div class="stat-item-val">€0.18</div><div class="stat-item-label">Hinta per klikkaus</div></div><div class="stat-item"><div class="stat-item-val">+142%</div><div class="stat-item-label">Kasvu / kk</div></div></div></div>
      </div>
    </div>
  </div>
</div>

<hr class="divider">
<div class="wrap"><div class="section reveal"><div class="eyebrow">Tulokset</div><div class="proof-placeholder"><strong>Asiakastulokset tulossa pian</strong><p>Ensimmäiset asiakastulokset julkaistaan pian.</p></div></div></div>

<div class="dark-section" id="cta">
  <div class="wrap"><div class="section dark-inner reveal"><div class="cta-grid"><div><div class="eyebrow">Aloitetaan</div><div class="section-h">Selvitetään miksi mainoksesi eivät toimi.</div><p class="section-sub">Ilmainen analyysi. Ei sitoumuksia. Vain rehellinen arvio siitä, mitä kannattaa tehdä toisin.</p></div><div class="cta-form"><?php echo do_shortcode('[wpforms id="YOUR_FORM_ID"]'); ?><p class="form-note">Vastaamme 24 tunnin sisällä.</p></div></div></div></div>
</div>

<hr class="divider">
<div class="wrap" id="faq">
  <div class="section reveal">
    <div class="faq-grid">
      <div><div class="eyebrow">FAQ</div><div class="section-h">Kysymyksiä?<br>Meillä on vastaukset.</div><p class="section-sub" style="margin-top:16px;">Etkö löydä vastausta? Ota yhteyttä suoraan.</p><a href="#cta" class="btn-dark" style="margin-top:28px;display:inline-flex;">Ota yhteyttä →</a></div>
      <div>
        <div class="faq-item open"><div class="faq-q">Minkälaisille yrityksille Zevu sopii?<div class="faq-icon">+</div></div><div class="faq-a">Zevu sopii suomalaisille pk-yrityksille, jotka haluavat saada enemmän irti Meta-mainonnasta. Toimimme erityisesti ravintola-, hyvinvointi-, kiinteistö- ja remonttialoilla.</div></div>
        <div class="faq-item"><div class="faq-q">Kuinka nopeasti näen tuloksia?<div class="faq-icon">+</div></div><div class="faq-a">Ensimmäiset mainokset julkaistaan yleensä 1–2 viikon sisällä aloituksesta. Merkittäviä tuloksia nähdään tyypillisesti 4–6 viikon optimoinnin jälkeen.</div></div>
        <div class="faq-item"><div class="faq-q">Mitä ilmainen mainosanalyysi sisältää?<div class="faq-icon">+</div></div><div class="faq-a">Käymme läpi nykyiset mainoksesi ja kerromme konkreettisesti, miksi ne eivät tuota toivottuja tuloksia. Saat selkeän arvion siitä, mitä kannattaa tehdä toisin — ilman sitoumuksia.</div></div>
        <div class="faq-item"><div class="faq-q">Tarvitsenko itse tehdä jotain?<div class="faq-icon">+</div></div><div class="faq-a">Minimaalisen panoksen tarvitset: kerrot bisneksestäsi ja toimitat tarvittavat materiaalit. Me hoidamme kaiken suunnittelusta julkaisuun ja optimointiin.</div></div>
      </div>
    </div>
  </div>
</div>

<script>
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
document.querySelectorAll('.ptab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
</script>

<?php get_footer(); ?>
