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
	//setFourColumns();
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

// Set four columns;
function setFourColumns() {
	
	var columns;
	var gw = $grid.width();

	if(gw<=735){
		columns = 1;
	} else {
		columns = 4;
	}

	colW = Math.floor(gw / columns);

	jQuery('.thumbs--four-col, .small--four-col').each(function(id){
		jQuery(this).css('width',colW+'px');
	});
	
	jQuery('.thumbs--four-col, .small--four-col').show();

};


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
	//setFourColumns();
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


// Scroll to content 
function arrowDownScrollTo() {

	jQuery.extend(jQuery.easing, {
		def: 'easeInOutQuart',
		easeInOutQuart: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		}
	});

	var $button = jQuery('#downButton'),
		$content = jQuery('#content'),
		$doc = jQuery('html, body'),
		speed = 1000;

	$button.on('click', function(){
		$doc.animate({
        	scrollTop: $content.offset().top - 83
    	}, speed, 'easeInOutQuart');
	});

}



		function do_scrollTo() {

            jQuery.extend(jQuery.easing, {
              def: 'easeInOutQuart',
                easeInOutQuart: function (x, t, b, c, d) {
                  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                }
              });

		  jQuery('a[href*=\\#]:not([href=\\#])').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    $target = jQuery(target);

		    jQuery('html, body').stop().animate({
		      'scrollTop': $target.offset().top - 63
          }, 800, 'easeInOutQuart');
		  });
		}

        
function historyBack() {
	
	var $back = jQuery('#back, #sideBack');

	$back.click(function(){
		parent.history.back();
		return false;
	});
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
		arrowDownScrollTo();
		historyBack();
		do_scrollTo();
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


var myButton = document.getElementById('myButton'),
	myContainer = document.getElementById('myContainer'),
	spinner = document.getElementById('spinner'),
	url = 'http://psiad.dev/wp-json/wp/v2/posts';

	if( myButton ) {
		myButton.addEventListener('click', function(){
			
			var ourRequest = new XMLHttpRequest();

			ourRequest.open( 'GET', url );

			ourRequest.onload = function() {
				if( ourRequest.status >= 200 && ourRequest.status < 400 ) {
					var data = JSON.parse(ourRequest.responseText);
					//console.log( data );
					createHTML( data, showSpinner() );
				} else {
					document.write('Error!');
				}
			};

			ourRequest.onerror = function() {
				console.log('Connection Error!');
			};

			ourRequest.send();

		});
	}

// Show spinner
function showSpinner() {
	spinner.style.display = 'block';
	
	setTimeout( function removeButton(){
		myButton.remove();
	}, 1000);

}

function createHTML( postsData ) {
	
	var ourHTMLString = '';
	
	for( i=0; i < postsData.length; i++ ) {
		ourHTMLString += '<h2>' + postsData[i].title.rendered + '</h2>';
		ourHTMLString += postsData[i].content.rendered;
	}
	myContainer.innerHTML = ourHTMLString;
}