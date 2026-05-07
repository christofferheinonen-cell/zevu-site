<?php get_header(); ?>

<style>
.single-hero{padding:140px 0 60px;border-bottom:1px solid var(--border);max-width:760px;}
.single-back{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--sub);text-decoration:none;margin-bottom:32px;transition:color .15s;}
.single-back:hover{color:var(--text);}
.single-cats{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;}
.single-cat{font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;background:var(--blue-dim);color:var(--blue);padding:4px 12px;border-radius:100px;}
.single-hero h1{font-size:clamp(28px,4vw,52px);font-weight:800;letter-spacing:-1.5px;line-height:1.1;margin-bottom:20px;animation:up .6s ease both .1s;}
.single-meta{display:flex;align-items:center;gap:16px;font-size:13px;color:var(--sub);animation:up .6s ease both .2s;}
.single-meta span{display:flex;align-items:center;gap:6px;}
.single-author-dot{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#3B82F6,#1D4ED8);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;}

.single-thumb{width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;margin:48px 0;box-shadow:var(--sh2);}
.single-thumb img{width:100%;height:100%;object-fit:cover;}
.single-thumb-placeholder{width:100%;height:100%;background:linear-gradient(135deg,#EEF3FD,#DBEAFE);}

.single-content{max-width:680px;padding:0 0 80px;}
.single-content p{font-size:17px;line-height:1.85;color:var(--text);margin-bottom:24px;font-weight:400;}
.single-content h2{font-size:26px;font-weight:800;letter-spacing:-.8px;line-height:1.2;margin:48px 0 16px;color:var(--text);}
.single-content h3{font-size:20px;font-weight:700;letter-spacing:-.4px;line-height:1.3;margin:36px 0 12px;color:var(--text);}
.single-content ul,.single-content ol{margin:0 0 24px 24px;}
.single-content li{font-size:17px;line-height:1.85;color:var(--text);margin-bottom:8px;}
.single-content a{color:var(--blue);text-decoration:none;font-weight:500;border-bottom:1px solid var(--blue-dim);transition:border-color .15s;}
.single-content a:hover{border-color:var(--blue);}
.single-content blockquote{border-left:3px solid var(--blue);padding:16px 24px;margin:32px 0;background:var(--blue-dim);border-radius:0 12px 12px 0;}
.single-content blockquote p{color:var(--text);font-weight:500;margin-bottom:0;}
.single-content img{width:100%;border-radius:12px;margin:16px 0;}
.single-content hr{border:none;border-top:1px solid var(--border);margin:40px 0;}
.single-content code{background:var(--bg);padding:2px 8px;border-radius:6px;font-size:14px;color:var(--text);}
.single-content pre{background:var(--text);color:var(--bg);padding:20px 24px;border-radius:12px;overflow-x:auto;margin:24px 0;}
.single-content pre code{background:none;padding:0;color:inherit;}

.single-footer{padding:40px 0 80px;border-top:1px solid var(--border);max-width:680px;}
.single-footer-title{font-size:13px;font-weight:600;color:var(--sub);margin-bottom:16px;}
.single-tags{display:flex;gap:8px;flex-wrap:wrap;}
.single-tag{font-size:12px;font-weight:600;color:var(--sub);background:var(--white);border:1px solid var(--border);padding:5px 12px;border-radius:100px;text-decoration:none;transition:all .15s;}
.single-tag:hover{background:var(--text);color:var(--white);border-color:var(--text);}

.post-nav{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 0 80px;}
.post-nav-item{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:24px;text-decoration:none;color:inherit;transition:box-shadow .2s,transform .2s;}
.post-nav-item:hover{box-shadow:var(--sh2);transform:translateY(-2px);}
.post-nav-item.next{text-align:right;}
.post-nav-dir{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--sub);margin-bottom:8px;}
.post-nav-title{font-size:15px;font-weight:700;letter-spacing:-.2px;line-height:1.35;color:var(--text);}

.single-cta{background:var(--dark);border-radius:20px;padding:56px;margin:0 0 80px;position:relative;overflow:hidden;}
.single-cta::before{content:'';position:absolute;top:-100px;right:-60px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(37,99,235,.18) 0%,transparent 65%);pointer-events:none;}
.single-cta-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;}
.single-cta h3{font-size:clamp(20px,2.5vw,30px);font-weight:800;letter-spacing:-1px;line-height:1.2;color:var(--bg);margin-bottom:8px;}
.single-cta p{font-size:14px;color:rgba(243,244,246,.4);line-height:1.7;}

@keyframes up{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}

@media(max-width:860px){
  .single-hero{padding:110px 0 48px;}
  .post-nav{grid-template-columns:1fr;}
  .single-cta-inner{grid-template-columns:1fr;}
  .single-cta{padding:36px 28px;}
}
</style>

<?php while ( have_posts() ) : the_post(); ?>

<div class="wrap">
  <div class="single-hero reveal">
    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="single-back">← Takaisin blogiin</a>
    <?php
      $cats = get_the_category();
      if ($cats) {
        echo '<div class="single-cats">';
        foreach ($cats as $cat) {
          echo '<span class="single-cat">' . esc_html($cat->name) . '</span>';
        }
        echo '</div>';
      }
    ?>
    <h1><?php the_title(); ?></h1>
    <div class="single-meta">
      <span><div class="single-author-dot">C</div><?php the_author(); ?></span>
      <span>·</span>
      <span><?php echo get_the_date('j. F Y'); ?></span>
      <span>·</span>
      <span><?php echo ceil(str_word_count(strip_tags(get_the_content())) / 200); ?> min lukuaika</span>
    </div>
  </div>

  <?php if ( has_post_thumbnail() ) : ?>
    <div class="single-thumb"><<?php the_post_thumbnail('full'); ?></div>
  <?php else : ?>
    <div class="single-thumb"><div class="single-thumb-placeholder"></div></div>
  <?php endif; ?>

  <div class="single-content reveal">
    <?php the_content(); ?>
  </div>

  <?php
    $tags = get_the_tags();
    if ($tags) :
  ?>
  <div class="single-footer reveal">
    <div class="single-footer-title">Aihetunnisteet</div>
    <div class="single-tags">
      <?php foreach ($tags as $tag) : ?>
        <a href="<?php echo get_tag_link($tag->term_id); ?>" class="single-tag"><?php echo esc_html($tag->name); ?></a>
      <?php endforeach; ?>
    </div>
  </div>
  <?php endif; ?>

  <!-- Inline CTA -->
  <div class="single-cta reveal">
    <div class="single-cta-inner">
      <div>
        <h3>Haluatko parempia tuloksia Meta-mainonnalla?</h3>
        <p>Pyydä ilmainen mainosanalyysi — kerromme mitä tehdä toisin.</p>
      </div>
      <a href="<?php echo home_url('/#cta'); ?>" class="btn-dark" style="flex-shrink:0;">Pyydä analyysi →</a>
    </div>
  </div>

  <!-- Post navigation -->
  <div class="post-nav reveal">
    <?php
      $prev_post = get_previous_post();
      $next_post = get_next_post();
    ?>
    <?php if ($prev_post) : ?>
      <a href="<?php echo get_permalink($prev_post); ?>" class="post-nav-item">
        <div class="post-nav-dir">← Edellinen</div>
        <div class="post-nav-title"><?php echo get_the_title($prev_post); ?></div>
      </a>
    <?php else : ?>
      <div></div>
    <?php endif; ?>
    <?php if ($next_post) : ?>
      <a href="<?php echo get_permalink($next_post); ?>" class="post-nav-item next">
        <div class="post-nav-dir">Seuraava →</div>
        <div class="post-nav-title"><?php echo get_the_title($next_post); ?></div>
      </a>
    <?php endif; ?>
  </div>
</div>

<?php endwhile; ?>

<?php get_footer(); ?>
