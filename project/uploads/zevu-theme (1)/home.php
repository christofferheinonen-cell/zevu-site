<?php get_header(); ?>

<style>
.blog-hero{padding:140px 0 80px;border-bottom:1px solid var(--border);}
.blog-hero h1{font-size:clamp(36px,5vw,72px);font-weight:800;letter-spacing:-2.5px;line-height:1.06;margin-bottom:16px;animation:up .6s ease both .1s;}
.blog-hero p{font-size:16px;color:var(--sub);max-width:400px;line-height:1.75;animation:up .6s ease both .2s;}

.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:80px 0 120px;}
.post-card{background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:var(--sh);transition:box-shadow .2s,transform .2s;text-decoration:none;color:inherit;display:block;}
.post-card:hover{box-shadow:var(--sh2);transform:translateY(-3px);}
.post-thumb{width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#EEF3FD,#DBEAFE);position:relative;overflow:hidden;}
.post-thumb img{width:100%;height:100%;object-fit:cover;}
.post-thumb-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;}
.thumb-cat{position:absolute;top:12px;left:12px;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;background:var(--white);color:var(--text);padding:4px 10px;border-radius:100px;}
.post-body{padding:20px 24px 24px;}
.post-meta{display:flex;align-items:center;gap:12px;font-size:12px;color:var(--sub);margin-bottom:10px;}
.post-meta span{display:flex;align-items:center;gap:4px;}
.post-title{font-size:17px;font-weight:700;letter-spacing:-.3px;line-height:1.35;margin-bottom:10px;color:var(--text);}
.post-excerpt{font-size:13px;color:var(--sub);line-height:1.7;}
.post-card:hover .post-title{color:var(--blue);}

.blog-pagination{display:flex;justify-content:center;gap:8px;padding-bottom:80px;}
.page-btn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;color:var(--sub);border:1.5px solid var(--border);transition:all .15s;}
.page-btn:hover,.page-btn.current{background:var(--text);color:var(--white);border-color:var(--text);}
.page-btn-prev,.page-btn-next{width:auto;padding:0 16px;gap:6px;}

.no-posts{text-align:center;padding:80px 0;color:var(--sub);}
.no-posts h2{font-size:24px;font-weight:700;margin-bottom:12px;color:var(--text);}

@keyframes up{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}

@media(max-width:860px){
  .blog-hero{padding:110px 0 60px;}
  .blog-grid{grid-template-columns:1fr;padding:48px 0 80px;}
}
</style>

<div class="wrap">
  <div class="blog-hero reveal">
    <div class="eyebrow">Blogi</div>
    <h1>Meta-mainonnan<br>parhaat käytännöt.</h1>
    <p>Vinkkejä, strategioita ja tapaustutkimuksia suomalaisille yrittäjille.</p>
  </div>

  <?php if ( have_posts() ) : ?>
    <div class="blog-grid">
      <?php while ( have_posts() ) : the_post(); ?>
        <a href="<?php the_permalink(); ?>" class="post-card reveal">
          <div class="post-thumb">
            <?php if ( has_post_thumbnail() ) : ?>
              <?php the_post_thumbnail('medium_large'); ?>
            <?php else : ?>
              <div class="post-thumb-placeholder" style="background:linear-gradient(135deg,#EEF3FD,#DBEAFE);"></div>
            <?php endif; ?>
            <?php
              $cats = get_the_category();
              if ( $cats ) echo '<span class="thumb-cat">' . esc_html($cats[0]->name) . '</span>';
            ?>
          </div>
          <div class="post-body">
            <div class="post-meta">
              <span><?php echo get_the_date('j.n.Y'); ?></span>
              <span>·</span>
              <span><?php echo ceil(str_word_count(strip_tags(get_the_content())) / 200); ?> min lukuaika</span>
            </div>
            <div class="post-title"><?php the_title(); ?></div>
            <div class="post-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?></div>
          </div>
        </a>
      <?php endwhile; ?>
    </div>

    <div class="blog-pagination">
      <?php
        $prev = get_previous_posts_link('← Uudemmat');
        $next = get_next_posts_link('Vanhemmat →');
        if ($prev) echo '<a class="page-btn page-btn-prev">' . $prev . '</a>';
        echo paginate_links(array(
          'type'      => 'list',
          'prev_text' => '←',
          'next_text' => '→',
          'before_page_number' => '<span class="page-btn">',
          'after_page_number'  => '</span>',
        ));
        if ($next) echo '<a class="page-btn page-btn-next">' . $next . '</a>';
      ?>
    </div>

  <?php else : ?>
    <div class="no-posts">
      <h2>Ei vielä julkaisuja.</h2>
      <p>Tulossa pian — palaa takaisin pian.</p>
    </div>
  <?php endif; ?>
</div>

<?php get_footer(); ?>
