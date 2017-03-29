<div class="sectionHead">
    <div class="inside">

        <?php
            // Get post title and content for about us
            if( isset($title_content_args) && is_array($title_content_args) ){
            
            $args = $title_content_args;
                } else {
                    $args = array();
                }

            $defaults = array(
                'post_ID' => NULL,
            );

            $args = wp_parse_args( $args, $defaults );

            //$portfolio_page_id = of_get_option('ttrust_portfolio_page');
            $page_ID = $args['post_ID'];
        ?>

        <?php
            echo '<h2>' . get_post_field('post_title', $page_ID) . '</h2>';
            echo '<p class="ers-intro">' . get_post_field('post_content', $page_ID) . '</p>';
        ?>

    </div>
</div>

