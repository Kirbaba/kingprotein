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

	var doc_w = $(window).width();

	if (doc_w < 737) {

		$('#demo').readmore({
	      moreLink: '<div class="showmore--but"><a href="#">Подробнее <i class="fa fa-chevron-down"></i></a></div>',
	      lessLink: '<div class="showmore--but--less"><a href="#">Скрыть <i class="fa fa-chevron-up"></i></a></div>',
	      collapsedHeight: 190,
	      afterToggle: function(trigger, element, expanded) {
	        if(! expanded) { // The "Close" link was clicked
	          $('html, body').animate({scrollTop: element.offset().top}, {duration: 100});
	        }
	      }
	    });
		
    	jQuery(function ($) {
		    jQuery('.home-news--box').slick({
		        dots: false,
		        infinite: true,
		        autoplay: true,
		        adaptiveHeight: false,
		        speed: 300,
		        arrows: true,        
		        slidesToShow: 1,
		        focusOnSelect: false,
		        slidesToScroll: 1				
			});
		});
		
    	jQuery(function ($) {
		    jQuery('.goods__box').slick({
		        dots: false,
		        infinite: true,
		        autoplay: true,
		        adaptiveHeight: false,
		        speed: 300,
		        arrows: false, 
		        centerMode: true,       
		        slidesToShow: 1,
		        focusOnSelect: false,
		        slidesToScroll: 1			
			});
		});
	}
	// On before slide change
	// $('.goods__box').on('afterChange', function(event, slick, currentSlide, nextSlide){
	//    $('.slick-active').prev().css("opacity", "0");
	//    $('.slick-active').prev().prev().css("opacity", "1");
	// });
});