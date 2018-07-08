$(function () {

    /* Menu Nav */
    $(".menu__toggle_nav").on('click', function () {
        $(".nav__menu").slideToggle(500, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
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
        $(".social__menu").slideToggle(500, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
    $(window).on('resize', function () {

        if ($(document).width() > 1200) {
            if ($(".social__menu").css('display') === 'block') {
                $(".social__menu").removeAttr('style');
            }
        }
    });

    /* Scroll To Top*/
    let scrl = 0;
    let st = $('.scroll-to-top');
    let umt = $('.user__menu_toggle');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            if (scrl === 0) {
                scrl = 1
                st.addClass('vis');
            }
        } else if (scrl === 1) {
            scrl = 0
            st.removeClass('vis');
        }
    })
    st.on('click', function () {
        return $('html, body').animate({scrollTop: 0}, 1000)
    })


    /* Slider */
    $('.slider__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });


    /* Footer Menu */
    $(".footer__heading").on('click', function () {
        if ($(document).width() < 576) {

            $(this).siblings(".footer__block_menu, .footer__block_connect-inner").slideToggle(500, function () {
                $(this).prev().hasClass("open") || $(this).removeAttr("style")
            });
            $(this).toggleClass("open");

        }
    })


/* Footer Subscrube Form*/

    $("#subscribe").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find(".footer__form_input").val("");
            $(".form__result").text("Thank you for registering! Soon we will contact you.");
            $("#subscribe").trigger("reset").fadeOut(2000);


        });
        return false;
    });


    /* Smooth scroll to the pages block
          ====================================*/

    $(".nav__menu_link").on("click", function(e) {
        console.log($(this));
        e.preventDefault();

        let currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset
        }, 2000);

    });

    let $links = $('.nav__menu_link');

    $links.on('click', function(e) {
        e.preventDefault();

        let link = $(this);
        link.parent('li').addClass('actived');
        $links.not(link).parent('li').removeClass('actived');
    });







});