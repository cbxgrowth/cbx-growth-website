
    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="site-info">
                <a href="<?php echo esc_url( __( 'https://cbxgrowth.com.br', 'cbxgrowth' ) ); ?>">
                    <?php
                    /* translators: %s: CMS name, i.e. WordPress. */
                    printf( esc_html__( 'Desenvolvido por %s', 'cbxgrowth' ), 'CBX Growth' );
                    ?>
                </a>
                <span class="sep"> | </span>
                    <?php
                    /* translators: 1: Theme name, 2: Theme author. */
                    printf( esc_html__( 'Tema: %1$s por %2$s.', 'cbxgrowth' ), 'CBX Growth', '<a href="https://cbxgrowth.com.br">Caio Borges</a>' );
                    ?>
            </div><!-- .site-info -->
            
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'footer',
                    'menu_id'        => 'footer-menu',
                    'depth'          => 1,
                )
            );
            ?>
        </div>
    </footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
