<?php /*
Template Name: Home
*/ ?>
<?php get_header(); ?>

<div id="middle" class="clearfix">	
    <div id="content" class="full">	

        <?php
        // About section
        get_template_part( 'part-about-home');
        ?>
        
        <?php
        // Projects section
        get_template_part( 'part-projects-home'); ?>

        <?php
        // Featured pages section
        get_template_part( 'part-featured-pages'); ?>
        
        <?php
        // Posts section
        get_template_part( 'part-posts-home'); ?>

        <?php 
            // Home content section - Gets content from HOME page
            while (have_posts()) : the_post(); ?>	
            <?php if($post->post_content) :?>

            <?php $home_content_bkg = of_get_option('ttrust_home_content_bkg'); ?>
                <div id="homeContent" class="full homeSection clearfix <?php if($home_content_bkg) echo "hasBackground"; ?>">	
                    <div class="inside">
                        <?php the_content(); ?>	
                    </div>		
                </div>

            <?php endif; ?>
        <?php endwhile; ?>

        <?php
        // Testimonials section
        get_template_part( 'part-testimonials-home'); ?>

        <?php
        // Contact section
        //get_template_part( 'part-contact-home');
        ?>

    </div>
</div>

<?php get_footer(); ?>	