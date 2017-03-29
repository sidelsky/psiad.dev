<?php $home_testimonial_count = intval(of_get_option('ttrust_home_testimonials_count')); ?>
<?php if($home_testimonial_count > 0) : ?>
<?php $testimonails_bkg = of_get_option('ttrust_testimonials_bkg'); ?>

<div id="testimonials" class="full homeSection clearfix <?php if($testimonails_bkg) echo "hasBackground"; ?>">

    <?php
        // Include page title and content
        $title_content_args = array(
            'post_ID' => 67
        );
        include('partials/title-content.php');
    ?>
	
	<div class="wrap">
		<div class="testimonials thumbs clearfix">
			
			<?php 
				$args = array(
				'ignore_sticky_posts' => 1,    	
				'post_type' => array(				
				'testimonial'					
				),
				'posts_per_page' => $home_testimonial_count,
			);
			
			$testimonials = new WP_Query( $args );

			while ($testimonials->have_posts()) : $testimonials->the_post(); ?>			    
			<div <?php post_class('small'); ?>>		
				<div class="inside">		
					<?php the_post_thumbnail("ttrust_square_medium", array('class' => '', 'alt' => ''.get_the_title().'', 'title' => ''.get_the_title().'')); ?>						
					<span class="title"><span><?php the_title(); ?></span></span>
					<?php the_content(); ?>	
				</div>		
			</div>
			<?php endwhile; ?>		
			
		</div>
	</div>

</div>
<?php endif; ?>