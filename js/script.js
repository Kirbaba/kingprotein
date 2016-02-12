$( document ).ready(function() {
    $(".content__sidebar-left--toggle").click(function(e) {
        e.preventDefault();
        $(".content__sidebar-left--catalog--list").slideToggle("slow");
    });
    $(".header--catalog").click(function(e) {
        e.preventDefault();
        $(".header--catalog--list").slideToggle("slow");
    });
    jQuery(function ($) {
	    jQuery('.home-comments--body').slick({
	        dots: false,
	        infinite: true,
	        autoplay: true,
	        adaptiveHeight: true,
	        speed: 300,
	        arrows: true,        
	        slidesToShow: 1,
	        focusOnSelect: false,
	        slidesToScroll: 1,
			responsive: [
				{
				    breakpoint: 770,
				    settings: {
				        adaptiveHeight: false
				    }
				}
			]
		});

	});
});