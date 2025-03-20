
<?php
/**
 * CBX Growth functions and definitions
 *
 * @package CBX_Growth
 */

if ( ! defined( 'CBXGROWTH_VERSION' ) ) {
    // Replace the version number whenever you make significant changes to the theme
    define( 'CBXGROWTH_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function cbxgrowth_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support( 'post-thumbnails' );

    // Register menu locations
    register_nav_menus(
        array(
            'menu-1' => esc_html__( 'Menu Principal', 'cbxgrowth' ),
            'footer' => esc_html__( 'Menu Rodapé', 'cbxgrowth' ),
        )
    );

    // Switch default core markup to output valid HTML5
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Add theme support for selective refresh for widgets
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add support for custom logo
    add_theme_support(
        'custom-logo',
        array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );
}
add_action( 'after_setup_theme', 'cbxgrowth_setup' );

/**
 * Set the content width in pixels, based on the theme's design.
 *
 * @global int $content_width
 */
function cbxgrowth_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'cbxgrowth_content_width', 1200 );
}
add_action( 'after_setup_theme', 'cbxgrowth_content_width', 0 );

/**
 * Register widget area.
 */
function cbxgrowth_widgets_init() {
    register_sidebar(
        array(
            'name'          => esc_html__( 'Sidebar', 'cbxgrowth' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Adicione widgets aqui.', 'cbxgrowth' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}
add_action( 'widgets_init', 'cbxgrowth_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function cbxgrowth_scripts() {
    wp_enqueue_style( 'cbxgrowth-style', get_stylesheet_uri(), array(), CBXGROWTH_VERSION );
    
    // Navigation JavaScript
    wp_enqueue_script( 'cbxgrowth-navigation', get_template_directory_uri() . '/js/navigation.js', array(), CBXGROWTH_VERSION, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'cbxgrowth_scripts' );

/**
 * Custom template tags for this theme.
 */
// require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
// require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
// require get_template_directory() . '/inc/customizer.php';
