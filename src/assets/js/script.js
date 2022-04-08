/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function($) {
    'use strict'

    // ----------------------------
    // AOS
    // ----------------------------
    AOS.init({
        once: true
    })

    $(window).on('scroll', function() {
            // .Scroll to top show/hide
            const scrollToTop = $('.scroll-top-to')
            const scroll = $(window).scrollTop()
            if (scroll >= 200) {
                scrollToTop.fadeIn(200)
            } else {
                scrollToTop.fadeOut(100)
            }
        })
        // scroll-to-top
    $('.scroll-top-to').on('click', function() {
        $('body,html').animate({
                scrollTop: 0
            },
            500
        )
        return false
    })

    $(document).ready(function() {
        // navbarDropdown
        if ($(window).width() < 992) {
            $('.main-nav .dropdown-toggle').on('click', function() {
                $(this).siblings('.dropdown-menu').animate({
                        height: 'toggle'
                    },
                    300
                )
            })
        }

        // -----------------------------
        //  Testimonial Slider
        // -----------------------------
        $('.testimonial-slider').slick({
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })

        // -----------------------------
        //  Video Replace
        // -----------------------------
        $('.video-box i').click(function() {
            const video =
                '<iframe class="border-0" allowfullscreen src="' +
                $(this).attr('data-video') +
                '"></iframe>'
            $(this).replaceWith(video)
        })

        // -----------------------------
        //  Count Down JS
        // -----------------------------
        const syoTimer = $('#simple-timer')
        if (syoTimer) {
            $('#simple-timer').syotimer({
                year: 2023,
                month: 9,
                day: 1,
                hour: 0,
                minute: 0
            })
        }

        // -----------------------------
        //  Story Slider
        // -----------------------------
        $('.about-slider').slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        })

        // -----------------------------
        //  Quote Slider
        // -----------------------------
        $('.quote-slider').slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        })

        /*!
         * Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
         * Copyright 2013-2022 Start Bootstrap
         * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
         */
        //
        // Scripts
        // 

        window.addEventListener('DOMContentLoaded', event => {

            // Activate Bootstrap scrollspy on the main nav element
            const mainNav = document.body.querySelector('#mainNav');
            if (mainNav) {
                new bootstrap.ScrollSpy(document.body, {
                    target: '#mainNav',
                    offset: 74,
                });
            }

            // Collapse responsive navbar when toggler is visible
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                document.querySelectorAll('#navbarResponsive .nav-link')
            );
            responsiveNavItems.map(function(responsiveNavItem) {
                responsiveNavItem.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });

        });


        // -----------------------------
        //  Client Slider
        // -----------------------------
        $('.client-slider').slick({
            slidesToShow: 4,
            infinite: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [{
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                }
            ]
        })

        // scroll
        // $('.scrollTo').on('click', function (e) {
        //   e.preventDefault();
        //   var target = $(this).attr('href');
        //   $('html, body').animate({
        //     scrollTop: ($(target).offset().top)
        //   }, 500);
        // });
    })
})(jQuery)