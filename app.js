angular.module('ngLiveHighlights', ['datatables']);

// jQuery(document).ready(function($) {
// 	var navbar = $('.navbar');
// 	var navbar2 = $('.SportFiltre');
// 	        if (navbar.length) distance = navbar.offset().top;
// 	        if (navbar2.length) distance2 = navbar2.offset().top;
// 	    $window = $(window);

// 	$window.scroll(function() {
// 	    if ($window.scrollTop() >= distance) {
// 	        navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
// 	        $("body").css("padding-top", "70px");
// 	    } else {
// 	        navbar.removeClass('navbar-fixed-top');
// 	        $("body").css("padding-top", "0px");
// 	    }


// 	});
// });

 $(document).ready(function(){
    $('ul.tabs').tabs();
  });
      
      