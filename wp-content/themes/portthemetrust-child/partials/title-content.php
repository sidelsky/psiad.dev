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
            $title_content = get_post_field('post_title', $page_ID);
            $post_content = get_post_field('post_content', $page_ID);

            if( $title_content ) {
                echo '<h2>' . $title_content . '</h2>';
            }

            if( $post_content ) {
                echo '<p class="ers-intro">' . $post_content . '</p>';
            }
        ?>

    </div>
</div>

<button id="myButton" class="button">
    <div id="spinner" style="display:none; background-image: url('https://i.stack.imgur.com/h6viz.gif'); background-position: center center; width: 100%; height: 30px"></div>Click me fool</button>
<div id="myContainer"></div>

<?php
    // Object
    // $object = new stdClass;
    // $object->names = ['Errol', 'Bob', 'Trevor'];

    // //echo $object->name;
    // foreach($object->names as $name) {
    //     //echo $name . '<br>';
    // } 

?>