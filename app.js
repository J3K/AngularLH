angular.module('ngLiveHighlights', ['ui.bootstrap','wu.masonry','datatables']);

jQuery(document).ready(function($) {
	var navbar = $('.navbar');
	        if (navbar.length) distance = navbar.offset().top;
	    $window = $(window);

	$window.scroll(function() {
	    if ($window.scrollTop() >= distance) {
	        navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
	        $("body").css("padding-top", "70px");
	    } else {
	        navbar.removeClass('navbar-fixed-top');
	        $("body").css("padding-top", "0px");
	    }
	});
});