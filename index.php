
<?php get_header(); ?>

<main id="primary" class="site-main">
    <div class="container">
        <?php
        if ( have_posts() ) :
            echo '<div class="post-grid">';
            
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
                    </header>

                    <div class="entry-content">
                        <?php the_excerpt(); ?>
                        <a href="<?php the_permalink(); ?>" class="read-more">
                            <?php esc_html_e( 'Ler mais', 'cbxgrowth' ); ?>
                        </a>
                    </div>
                </article>
                <?php
            endwhile;
            
            echo '</div>';

            the_posts_pagination(
                array(
                    'prev_text' => esc_html__( 'Anterior', 'cbxgrowth' ),
                    'next_text' => esc_html__( 'Próximo', 'cbxgrowth' ),
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
</main>

<?php 
get_sidebar();
get_footer(); 
?>
