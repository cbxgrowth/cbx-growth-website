
<?php get_header(); ?>

<main id="primary" class="site-main">
    <div class="container">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                    </header>

                    <div class="entry-content">
                        <?php
                        the_content();
                        wp_link_pages(
                            array(
                                'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cbxgrowth' ),
                                'after'  => '</div>',
                            )
                        );
                        ?>
                    </div>
                </article>
                <?php
            endwhile;

            the_posts_navigation();
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
</main>

<?php get_footer(); ?>
