$(function () {

    /* Menu Nav */
    $(".menu__toggle_nav").on('click', function () {
        if ($(document).width() < 1200) {
            $(".nav__menu").slideToggle(500, function () {
                if ($(this).css('display') === 'none') {
                    $(this).removeAttr('style');
                }

            });
        }
    });
    $(window).on('resize', function () {

        if ($(document).width() > 1200) {
            if ($(".nav__menu").css('display') === 'block') {
                $(".nav__menu").removeAttr('style');
            }
        }
    });

    /* Menu Social */
    $(".menu__toggle_social").on('click', function () {
        if ($(document).width() < 1200) {
            $(".social__menu").slideToggle(500, function () {
                if ($(this).css('display') === 'none') {
                    $(this).removeAttr('style');
                }

            });
        }
    });
    $(window).on('resize', function () {

        if ($(document).width() > 1200) {
            if ($(".social__menu").css('display') === 'block') {
                $(".social__menu").removeAttr('style');
            }
        }
    });

    /* Menu User */

    $('.menu__toggle_user').click(function () {
        if (!$('.user__menu_item').hasClass('openDone')) {
            $('.user__menu_item').addClass('openDone');
            $('.user__menu').css("transform", "translateX(calc(100vw - 250px))");
        }
        else {
            $('.user__menu_item').removeClass('openDone');
            $('.user__menu').css("transform", "translateX(100vw)");
        }
    });

    $(window).resize(function () {
        if ($(document).width() > 1200) {
            $('.user__menu').removeAttr('style');
        }
    });

    /* Scroll To Top*/

    let scrl = 0;
    let st = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            if (scrl === 0) {
                scrl = 1
                st.addClass('vis')
            }
        } else if (scrl === 1) {
            scrl = 0
            st.removeClass('vis')
        }
    })
    st.on('click', function () {
        return $('html, body').animate({scrollTop: 0}, 1000)
    })

    /* Slider */
    // $('.slider__items').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     fade: false
    // });
    //
    // $(".slider__arrow-prev").on("click", function () {
    //     $('.slider__items').slick("slickPrev");
    //
    // });
    //
    // $(".slider__arrow-next").on("click", function () {
    //     $('.slider__items').slick("slickNext");
    // });

});
