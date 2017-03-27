///////////////////////////////
// Set Variables
///////////////////////////////

var grid = document.getElementsByClassName('thumbs'),
	$grid	= jQuery(grid);
var colW;
var gridGutter = 0;
var thumbWidth = 350;
var themeColumns = 3;
var homeBannerTextOffset = -20;
var stickyNavOffsetTop;
var topOffest = (jQuery('body').hasClass('admin-bar')) ? 32 : 0;
var OS;

///////////////////////////////
// Mobile Detection
///////////////////////////////

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
    );
}


///////////////////////////////
// Project Filtering
///////////////////////////////

function projectFilterInit() {
	jQuery('#filterNav a').click(function(){
		var selector = jQuery(this).attr('data-filter');
		$grid.isotope({
			filter: selector
		});

		if ( !jQuery(this).hasClass('selected') ) {
			jQuery(this).parents('#filterNav').find('.selected').removeClass('selected');
			jQuery(this).addClass('selected');
		}

		return false;
	});
}


///////////////////////////////
// Isotope Items
///////////////////////////////

function isotopeInit() {
	setColumns();
	$grid.isotope({
		resizable: false,
		layoutMode: 'fitRows',
		masonry: {
			columnWidth: colW
		}
	});

	jQuery(".thumbs .small").css("visibility", "visible");

}

///////////////////////////////
// Isotope Grid Resize
///////////////////////////////

function setColumns()
{
	var columns;
	var gw = $grid.width();
	if(gw<=735){
		columns = 1;
	}else{
		columns = 3;
	}
	colW = Math.floor(gw / columns);
	jQuery('.thumbs .small').each(function(id){
		jQuery(this).css('width',colW+'px');
	});
	jQuery('.thumbs .small').show();
}

function gridResize() {
	setColumns();
	$grid.isotope({
		resizable: false,
		layoutMode: 'fitRows',
		masonry: {
			columnWidth: colW
		}
	});
}

///////////////////////////////
// Set Home Slideshow Height
///////////////////////////////

function setHomeBannerHeight() {
	var windowHeight = jQuery(window).height()-topOffest;
	jQuery('.home #homeBanner').height(windowHeight);
	jQuery('.home #header .bottom').height(windowHeight);

}

///////////////////////////////
// Center Home Slideshow Text
///////////////////////////////

function centerHomeBannerText() {
		var bannerText = jQuery('.home #homeBanner #bannerText');
		var bannerTextTop = (jQuery('.home #header').actual('height')/2) - (jQuery('.home #homeBanner #bannerText').actual('height')/2);
		bannerText.css('margin-top', bannerTextTop+'px');
		bannerText.show();
}

///////////////////////////////
// Home Slideshow Parallax
///////////////////////////////

function homeParallax(){
	if(jQuery('body').hasClass('home')){
		var top = jQuery(this).scrollTop();
		//jQuery('.home #homeBanner #bannerText').css('transform', 'translateY(' + (-top/3) + 'px)');
		jQuery('#homeBanner.hasBackground').css({'background-position' : 'center ' + (-top/6)+"px"});
		//jQuery('.homeSection.hasBackground').css({'background-position' : 'center ' + (-(top-1600)/6)+"px"});
		//Scroll and fade out the banner text
	    jQuery('.home #homeBanner #bannerText').css({'opacity' : 1-(top/700)});
	}
}

///////////////////////////////
// Sticky Nav Offset
///////////////////////////////

function setStickyNavOffset(){
	if(!jQuery('body').hasClass('home')){
		jQuery('#header').css('height', jQuery('#header .top').height() );
	}
}

///////////////////////////////
// SlideNav
///////////////////////////////

function setSlideNav(){

	/** Added the following to prevent the "Double-tap" behavior in ticket #11 */
	jQuery(".menuToggle").on('touchend', function (e) {
		jQuery(this).pageslide({direction: "left"});
	});

	jQuery(".menuToggle").pageslide({ direction: "left"});
}

function setHeaderBackground() {
	var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top

	if (scrollTop > 300 || jQuery(window).width() < 700) {
		jQuery('#header .top').addClass('solid');
	} else {
		jQuery('#header .top').removeClass('solid');
	}
}


///////////////////////////////
// Initialize
///////////////////////////////

jQuery.noConflict();
jQuery(document).ready(function(){
	//Stuff that happens after images are loaded
	jQuery('#container').waitForImages(function(){
		setStickyNavOffset();
		isotopeInit();
		projectFilterInit();
		if(jQuery('body').hasClass('home')){
			setHomeBannerHeight();
			centerHomeBannerText();
		}
		jQuery('#container').css('opacity', '1' );
	});

	setSlideNav();

	setHeaderBackground();
	if(!isMobile() && jQuery(window).width() >700){
		homeParallax();
	}

	//Resize events
	jQuery(window).resize(function(){
		gridResize();
		setHomeBannerHeight();
		centerHomeBannerText();
		setHeaderBackground();
	});

	//Scroll events
	jQuery(window).scroll(function() {
		setHeaderBackground();
		if(!isMobile() && jQuery(window).width() > 700){
			homeParallax();
		}
	});

	//Set Down Arrow Button
	jQuery('#downButton').click(function(){
		jQuery.scrollTo("#middle", 1000, { offset:-(jQuery('#header .top').height()+topOffest), axis:'y' });
	});

	jQuery('img').attr('title','');
	jQuery("#content").fitVids();
});
