<div id="homePosts" class="full homeSection clearfix">

    <?php
        // Include page title and content
        $title_content_args = array(
            'post_ID' => 27
        );
        include('partials/title-content.php');
    ?>

    <div class="wrap">

        <div class="posts clearfix thumbs">

        <?php
            $args = array(
                'post_type' => 'about-us',
                'posts_per_page' => -1,
                'orderby' => 'post_date',
                'order' => 'DEC'
            );
            $recentPosts = new WP_Query( $args );
	    ?>    
        
        <?php while ($recentPosts->have_posts()) : $recentPosts->the_post(); ?>		    
            <?php get_template_part( 'part-post-small'); ?>
        <?php endwhile; ?>	
        
        </div>
	</div>

</div>