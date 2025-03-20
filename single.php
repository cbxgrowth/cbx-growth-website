
<?php get_header(); ?>

<main id="primary" class="site-main">
    <div class="container">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                    
                    <div class="entry-meta">
                        <?php
                        printf(
                            '<span class="posted-on">%1$s <time class="entry-date published" datetime="%2$s">%3$s</time></span>',
                            esc_html__( 'Posted on', 'cbxgrowth' ),
                            esc_attr( get_the_date( 'c' ) ),
                            esc_html( get_the_date() )
                        );
                        echo ' | ';
                        printf(
                            '<span class="byline">%1$s <span class="author vcard"><a href="%2$s">%3$s</a></span></span>',
                            esc_html__( 'by', 'cbxgrowth' ),
                            esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
                            esc_html( get_the_author() )
                        );
                        ?>
                    </div><!-- .entry-meta -->
                </header><!-- .entry-header -->

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail( 'large' ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php
                    the_content(
                        sprintf(
                            wp_kses(
                                /* translators: %s: Name of current post. Only visible to screen readers */
                                __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'cbxgrowth' ),
                                array(
                                    'span' => array(
                                        'class' => array(),
                                    ),
                                )
                            ),
                            wp_kses_post( get_the_title() )
                        )
                    );

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cbxgrowth' ),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div><!-- .entry-content -->

                <footer class="entry-footer">
                    <?php
                    // Display categories
                    if ( has_category() ) {
                        echo '<div class="cat-links">';
                        echo esc_html__( 'Categories: ', 'cbxgrowth' );
                        the_category( ', ' );
                        echo '</div>';
                    }

                    // Display tags
                    if ( has_tag() ) {
                        echo '<div class="tags-links">';
                        echo esc_html__( 'Tags: ', 'cbxgrowth' );
                        the_tags( '', ', ', '' );
                        echo '</div>';
                    }
                    ?>
                </footer><!-- .entry-footer -->
            </article><!-- #post-## -->

            <?php
            // Post navigation
            the_post_navigation(
                array(
                    'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'cbxgrowth' ) . '</span> <span class="nav-title">%title</span>',
                    'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'cbxgrowth' ) . '</span> <span class="nav-title">%title</span>',
                )
            );

            // If comments are open or we have at least one comment, load the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
        endwhile; // End of the loop.
        ?>
    </div>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
