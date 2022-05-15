$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
	
//    Main Slider
    $(".main-section .main-slider").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 4000
    });
    $(".main-section .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-section .main-slider").trigger("prev.owl.carousel");
    });
    $(".main-section .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-section .main-slider").trigger("next.owl.carousel");
    });

    
//    gallery slider
    $(".gallery-section .gallery-slider .gslides").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: false,
        active: true,
        smartSpeed: 1500,
//        autoplay: true,
        autoplaySpeed: 4500,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            992 : {
                items: 4
            }
        }
    });
    
//    service details slider
    $(".sdetails-slider .sslides").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        active: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 4500
    });

    
});

