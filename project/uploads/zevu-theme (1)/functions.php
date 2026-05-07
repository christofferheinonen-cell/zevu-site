<?php
function zevu_enqueue_assets() {
    wp_enqueue_style(
        'zevu-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
        array(), null
    );
}
add_action( 'wp_enqueue_scripts', 'zevu_enqueue_assets' );

// Remove block library styles
add_action( 'wp_enqueue_scripts', function() {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'global-styles' );
}, 100 );

// Shortcodes in content
add_filter( 'the_content', 'do_shortcode' );

// Hide admin bar on front end
add_filter( 'show_admin_bar', '__return_false' );

// Register nav menus (optional, for future use)
register_nav_menus( array(
    'primary' => __( 'Primary Menu' ),
) );

// Add theme support
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
