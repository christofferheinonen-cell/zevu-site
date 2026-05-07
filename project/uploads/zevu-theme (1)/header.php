<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php wp_title('—', true, 'right'); ?><?php bloginfo('name'); ?></title>
<?php wp_head(); ?>
<style>
:root {
  --bg:       #F3F4F6;
  --white:    #FFFFFF;
  --text:     #09090F;
  --sub:      #5C6578;
  --border:   #DDE1E9;
  --blue:     #2563EB;
  --blue-dim: #EEF3FD;
  --dark:     #0C1121;
  --dark2:    #111827;
  --sh:       0 1px 3px rgba(0,0,0,.05), 0 4px 16px rgba(0,0,0,.06);
  --sh2:      0 2px 8px rgba(0,0,0,.05), 0 16px 48px rgba(0,0,0,.10);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  background:var(--bg);color:var(--text);
  font-family:'Plus Jakarta Sans',sans-serif;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

/* NAV */
.nav-wrap{
  position:fixed;top:16px;left:50%;transform:translateX(-50%);
  z-index:200;
  display:flex;align-items:center;
  background:rgba(255,255,255,0.92);
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border:1px solid var(--border);
  border-radius:100px;
  padding:6px 6px 6px 20px;
  gap:4px;
  box-shadow:0 2px 12px rgba(0,0,0,.07);
  white-space:nowrap;
}
.nav-logo{font-size:15px;font-weight:800;letter-spacing:-.4px;color:var(--text);text-decoration:none;margin-right:24px;}
.nav-link{font-size:13px;font-weight:500;color:var(--sub);text-decoration:none;padding:6px 14px;border-radius:100px;transition:background .15s,color .15s;}
.nav-link:hover,.nav-link.active{background:var(--bg);color:var(--text);}
.nav-btn{
  font-family:inherit;font-size:13px;font-weight:600;
  background:var(--text);color:var(--white);
  border:none;cursor:pointer;
  padding:9px 18px;border-radius:100px;margin-left:8px;
  transition:background .15s;text-decoration:none;display:inline-block;
}
.nav-btn:hover{background:var(--blue);}

/* SHARED UTILS */
.wrap{max-width:1160px;margin:0 auto;padding:0 48px;}
.btn-dark{
  display:inline-flex;align-items:center;gap:6px;
  font-family:inherit;font-size:13px;font-weight:600;
  background:var(--text);color:var(--white);
  padding:11px 22px;border-radius:100px;border:none;
  cursor:pointer;text-decoration:none;
  transition:background .15s,transform .15s;
}
.btn-dark:hover{background:var(--blue);transform:translateY(-1px);}
.btn-outline{
  display:inline-flex;align-items:center;gap:6px;
  font-family:inherit;font-size:13px;font-weight:600;
  background:transparent;color:var(--text);
  padding:11px 20px;border-radius:100px;
  border:1.5px solid var(--border);cursor:pointer;
  text-decoration:none;transition:border-color .15s,background .15s;
}
.btn-outline:hover{border-color:var(--text);background:var(--white);}
.eyebrow{font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--sub);margin-bottom:20px;}
.section-h{font-size:clamp(28px,3.6vw,48px);font-weight:800;letter-spacing:-1.5px;line-height:1.1;margin-bottom:16px;}
.section-sub{font-size:15px;color:var(--sub);line-height:1.75;max-width:480px;}
.divider{border:none;border-top:1px solid var(--border);}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1);}
.reveal.on{opacity:1;transform:translateY(0);}
.d1{transition-delay:.08s;}.d2{transition-delay:.16s;}.d3{transition-delay:.24s;}

@media(max-width:860px){
  .nav-link{display:none;}
  .wrap{padding-left:24px;padding-right:24px;}
}
</style>
</head>
<body <?php body_class(); ?>>

<nav class="nav-wrap">
  <a href="<?php echo home_url(); ?>" class="nav-logo">Zevu</a>
  <a href="<?php echo home_url('/#prosessi'); ?>" class="nav-link">Prosessi</a>
  <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="nav-link <?php echo is_home() || is_singular('post') ? 'active' : ''; ?>">Blogi</a>
  <a href="<?php echo home_url('/#faq'); ?>" class="nav-link">FAQ</a>
  <a href="<?php echo home_url('/#cta'); ?>" class="nav-btn">Pyydä analyysi →</a>
</nav>
