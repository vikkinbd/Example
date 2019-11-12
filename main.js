import 'slick-carousel';
import 'magnific-popup';

const $win = $(window);
const $doc = $(document);

$win.on( 'load' , function () {
	if ($(window).width() > 1024) {
		var s = skrollr.init({forceHeight: false});
	}
});

// Navigation

$( '.nav-burger' ).on( 'click', function(e) {
	e.preventDefault();
	$( 'body' ).toggleClass( 'nav-opened' );
});

$( '.qty' ).on( 'click', function(e) {
    e.preventDefault();
    $( '.screen-reader-text' ).hide();
});

// Add ID

$( '.section' ).first().attr('id', 'first-section');

// Button scroll

var $buttonTop = $('.btn--top');

$buttonTop.on( 'click' , function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1400);
});

// Video Popup
$('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

// Slider

$( '.slider .slider__slides' ).slick({
	dots: true,
	arrows: true,
	autoplay: true,
	infinite: true,
	speed: 500,
	fade: true,
	adaptiveHeight: true,
	cssEase: 'linear',
});

// Scrolling fade effect

$( '.section' ).addClass( 'scrolled' );
	const winH = $win.height();
$( '.scrolled' ).each(function() {
	const $element = $(this);

	$win.on( 'scroll load', function() {
   		if ( $element.offset().top <= $doc.scrollTop() + winH - 80 ) {
     		setTimeout(function() {
        		$element.addClass('visible');
     		}, 1);
   		} else {
     		$element.removeClass('visible');
   		}
  	});
});


var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
if ( $win.width() < 1024 ) {
	$('.nav .menu-item-has-children > a').one('click', false);
}
    
// Equal height

$.fn.equalizeHeight = function() {
    var maxHeight = 0, itemHeight;    
    this.css('height', '');

    for (var i = 0; i < this.length; i++) {
        itemHeight = $(this[i]).height();
        if (maxHeight < itemHeight) {
            maxHeight = itemHeight;
        }
    }     
    return this.height(maxHeight);
    }
$win.on('load resize', function() {
    $('.profile .profile__body').equalizeHeight();
});

//Paralax

var onScroll = function() {
	var scrollTop = $(this).scrollTop();
	$('.paralax').each(function(index, elem) {
		var $elem = $(elem);
   		$elem.find('img').css('top', scrollTop - $elem.offset().top);
 	});
};
onScroll.apply(window);
$win.on( 'scroll' , onScroll);

// Shop Slider

$( '.single_product_gallery_slider .slider__slides' ).slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    adaptiveHeight: true,
    cssEase: 'linear',
});