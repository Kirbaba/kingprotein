jQuery(window).load(function() { jQuery(".swiper-pagination .swiper-pagination-bullet").each(function(i) { var id = "" + i; jQuery(this).attr("id", id); }); jQuery('.swiper-container .swiper-wrapper .swiper-slide-duplicate').remove(); }); // Carousel \
jQuery('.swiper-pagination .swiper-pagination-bullet').on('click', function(e){ var dataId = this.id; jQuery('.swiper-container .swiper-wrapper .swiper-slide').css('cssText', 'display: none !important'); jQuery('.swiper-container').find("[data-swiper-slide-index='" + dataId + "']").css('cssText', 'display: block !important'); }); 
$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });
});


$(window).scroll(function () {
    if (window.pageYOffset > 100) {
        $(".navigation").addClass("navigation--onScroll");
        //$(".header--onScroll").removeClass(".header");       
    } else {
        // $(".header--onScroll").addClass("header");
        $(".navigation").removeClass("navigation--onScroll");
    }
});


jQuery(document).ready(function ($) {


    //Меню "Готовые двери"
    $('.menu__ready').hover(
        function () {
            $('.menu__ready--open').css("display", "block");
            if ($.browser.msie) {
                $('.menu__ready--open').toggleClass('hover');
            }
        },
        function () {
            if (!$.browser.msie) {
                if (!$('.menu__ready--open').is(":hover")) {
                    $('.menu__ready--open').css("display", "none");
                }
            }
            else {
                if (!$('.menu__ready--open').hasClass('hover')) {
                    $('.menu__ready--open').css("display", "none");                    
                }
            }
        }
    );
    $('.menu__ready--open').hover(
        function () {

        },
        function () {
            $('.menu__ready--open').css("display", "none");
        }
    );

//Меню "Двери на заказ"
    $('.menu__toorder').hover(
        function () {
            $('.menu__toorder--open').css("display", "block");
            if ($.browser.msie) {
                $('.menu__toorder--open').toggleClass('hover');
            }
        },
        function () {
            if (!$.browser.msie) {
                if (!$('.menu__toorder--open').is(":hover")) {
                    $('.menu__toorder--open').css("display", "none");
                }
            }
            else {
                if (!$('.menu__toorder--open').hasClass('hover')) {
                    $('.menu__toorder--open').css("display", "none");                    
                }
            }
        }
    );
    $('.menu__toorder--open').hover(
        function () {
        },
        function () {
            $('.menu__toorder--open').css("display", "none");
        }
    );

//Меню "Отделка дверей"
    $('.menu__facing').hover(
        function () {
            $('.menu__facing--open').css("display", "block");
             if ($.browser.msie) {
                $('.menu__facing--open').toggleClass('hover');
            }
        },
        function () {
            if (!$.browser.msie) {
                if (!$('.menu__facing--open').is(":hover")) {
                    $('.menu__facing--open').css("display", "none");
                }
            }
            else {
                if (!$('.menu__facing--open').hasClass('hover')) {
                    $('.menu__facing--open').css("display", "none");                    
                }
            }
        }
    );
    $('.menu__facing--open').hover(
        function () {
        },
        function () {
            $('.menu__facing--open').css("display", "none");
        }
    );

    //Меню "амки и фурнитура"
    $('.menu__locks').hover(
        function () {
            $('.menu__locks--open').css("display", "block");
            if ($.browser.msie) {
                $('.menu__locks--open').toggleClass('hover');
            }
        },
        function () {
             if (!$.browser.msie) {
                if (!$('.menu__locks--open').is(":hover")) {
                    $('.menu__locks--open').css("display", "none");
                }
            }
            else {
                if (!$('.menu__locks--open').hasClass('hover')) {
                    $('.menu__locks--open').css("display", "none");                    
                }
            }
        }
    );
    $('.menu__locks--open').hover(
        function () {
        },
        function () {
            $('.menu__locks--open').css("display", "none");
        }
    );

    var swiper_arr = [];
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    var swiper_new = new Swiper('.samples-swiper-container', {
        scrollbar: '.new-swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        grabCursor: true,
        nextButton: '.new-swiper-button-next',
        prevButton: '.new-swiper-button-prev'
    });

});













