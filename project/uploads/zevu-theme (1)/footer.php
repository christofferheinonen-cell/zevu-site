<div class="footer-dark">
  <div class="footer-inner wrap" style="padding-top:80px;padding-bottom:0;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">
    <div>
      <div class="footer-logo">Zevu</div>
      <p class="footer-tagline">Meta mainonta, joka toimii. Suomalaisille yrityksille, jotka haluavat kasvaa.</p>
      <div class="footer-contact">Sähköposti: <a href="mailto:hei@zevu.fi">hei@zevu.fi</a></div>
    </div>
    <div>
      <div class="footer-form-title">Aloita tänään.</div>
      <div class="footer-wpform">
        <?php echo do_shortcode('[wpforms id="YOUR_FORM_ID"]'); ?>
      </div>
    </div>
  </div>
  <div class="wrap">
    <div class="footer-bar">
      <p>© <?php echo date('Y'); ?> Zevu</p>
      <p>Helsinki, Suomi</p>
    </div>
  </div>
</div>
<div class="footer-big">
  <a href="mailto:hei@zevu.fi" class="footer-big-email">hei@zevu.fi</a>
</div>

<style>
.footer-dark{background:var(--dark2);}
.footer-logo{font-size:18px;font-weight:800;letter-spacing:-.4px;color:var(--bg);margin-bottom:14px;}
.footer-tagline{font-size:14px;color:rgba(243,244,246,.3);line-height:1.7;max-width:260px;margin-bottom:28px;}
.footer-contact{font-size:14px;color:rgba(243,244,246,.35);}
.footer-contact a{color:var(--bg);text-decoration:none;font-weight:600;}
.footer-contact a:hover{color:var(--blue);}
.footer-form-title{font-size:17px;font-weight:700;color:var(--bg);letter-spacing:-.3px;margin-bottom:20px;}
.footer-bar{padding:28px 0;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(243,244,246,.06);}
.footer-bar p{font-size:12px;color:rgba(243,244,246,.18);}
.footer-big{background:var(--dark);padding:56px 48px;text-align:center;border-top:1px solid rgba(243,244,246,.05);}
.footer-big-email{font-size:clamp(24px,4vw,52px);font-weight:800;letter-spacing:-2px;color:rgba(243,244,246,.12);text-decoration:none;transition:color .2s;}
.footer-big-email:hover{color:var(--blue);}

/* WPForms footer styling */
.footer-wpform .wpforms-field{margin-bottom:12px;}
.footer-wpform .wpforms-field label{display:block;font-size:11px;font-weight:600;color:rgba(243,244,246,.35);margin-bottom:8px;}
.footer-wpform .wpforms-field input[type="email"],.footer-wpform .wpforms-field input[type="text"]{width:100%;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:var(--bg);padding:12px 16px;outline:none;}
.footer-wpform .wpforms-field input:focus{border-color:rgba(255,255,255,.28);}
.footer-wpform .wpforms-submit-container{margin:0;padding:0;}
.footer-wpform .wpforms-submit{width:100%;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;background:var(--white);color:var(--text);border:none;border-radius:10px;padding:14px;cursor:pointer;transition:background .15s;}
.footer-wpform .wpforms-submit:hover{background:var(--blue);color:#fff;}

@media(max-width:860px){
  .footer-inner{grid-template-columns:1fr!important;gap:48px!important;padding-bottom:0;}
  .footer-bar{flex-direction:column;gap:8px;text-align:center;}
  .footer-big{padding:40px 24px;}
}
</style>

<script>
const io = new IntersectionObserver(e => {
  e.forEach(el => { if (el.isIntersecting) el.target.classList.add('on'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
</script>

<?php wp_footer(); ?>
</body>
</html>
