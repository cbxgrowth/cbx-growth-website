
<?php get_header(); ?>

<main id="primary" class="site-main">
    <div class="container">
        <?php if ( have_posts() ) : ?>

            <header class="page-header">
                <?php
                the_archive_title( '<h1 class="page-title">', '</h1>' );
                the_archive_description( '<div class="archive-description">', '</div>' );
                ?>
            </header><!-- .page-header -->

            <div class="post-grid">
                <?php
                /* Start the Loop */
                while ( have_posts() ) :
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail( 'medium' ); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <header class="entry-header">
                            <?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>

                            <div class="entry-meta">
                                <?php
                                printf(
                                    '<span class="posted-on">%1$s <time class="entry-date published" datetime="%2$s">%3$s</time></span>',
                                    esc_html__( 'Posted on', 'cbxgrowth' ),
                                    esc_attr( get_the_date( 'c' ) ),
                                    esc_html( get_the_date() )
                                );
                                ?>
                            </div><!-- .entry-meta -->
                        </header><!-- .entry-header -->

                        <div class="entry-summary">
                            <?php the_excerpt(); ?>
                        </div><!-- .entry-summary -->

                        <footer class="entry-footer">
                            <a href="<?php the_permalink(); ?>" class="read-more">
                                <?php esc_html_e( 'Read More', 'cbxgrowth' ); ?>
                            </a>
                        </footer><!-- .entry-footer -->
                    </article><!-- #post-## -->
                    <?php
                endwhile;
                ?>
            </div><!-- .post-grid -->

            <?php
            the_posts_pagination(
                array(
                    'prev_text' => esc_html__( 'Previous', 'cbxgrowth' ),
                    'next_text' => esc_html__( 'Next', 'cbxgrowth' ),
                )
            );

        else :
            ?>
            <section class="no-results">
                <header class="page-header">
                    <h1 class="page-title"><?php esc_html_e( 'Nada encontrado', 'cbxgrowth' ); ?></h1>
                </header>

                <div class="page-content">
                    <p><?php esc_html_e( 'Parece que não encontramos o que você está procurando.', 'cbxgrowth' ); ?></p>
                    <?php get_search_form(); ?>
                </div>
            </section>
            <?php
        endif;
        ?>
    </div>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
