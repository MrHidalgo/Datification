function scrollWindowNavigationFixedLarge() {
    var countScroll = $(window).scrollTop(),
        navigationBlock = $('.header'),
        body = $("body");

    if (countScroll > 110) {
        body.addClass("fixed");
        navigationBlock.addClass("slideInDown");
    }
    else {
        body.removeClass("fixed");
        navigationBlock.removeClass("slideInDown");
    }
}


$(window).on("load resize ready scroll", function(){
    if($(window).width() > '1024') {
        scrollWindowNavigationFixedLarge();
    }


    var containerOffserLeft = $(".blocks__fixed").offset().left + 15;
    $('.blocks__fixed .blocks__right').css(
        {
            "right" : containerOffserLeft
        }
    );
});


$(document).ready(function() {

    /* BODY CLICK */
    $('body').on('click', function (e) {
        var classForBody = ".nav__item, .search__btn, " +
            ".search__input, .lang__btn, " +
            ".lang__drop, .nav__link-mobile, " +
            ".nav__list, .nav__list_small, .nav__more";

        if (!$(e.target).closest(classForBody).length) {
            $('.nav__item, .search, .lang, .nav__link-mobile, .nav').removeClass('active');

            if($(window).width() > '767') {
                $(".search__form").fadeOut(300);
            }
            $(".lang__drop, .nav__list").slideUp(300);
        }
    });


    /* LOGO CLICK SCROLL TO TOP */
    $(".logotype").on("click", function(e) {
        $('body,html').animate(
            {
                scrollTop: 0
            }, 1000
        );
    });


    /* MENU */
    $(".nav__link").on("click", function(e) {
        e.preventDefault();

        $(".nav__item").removeClass("active");
        $(this).closest(".nav__item").addClass("active");
    });
    $(".nav__more").on("click", function(e) {
        e.preventDefault();

        $(".nav__list").slideToggle("300");
        $(".lang__drop").slideUp(300);
    });
    if($(".nav__item").length < 5) {
        $(".nav__list").addClass("show");
    } else {
        $(".nav__more, .nav").addClass("show");
    }


    /* SEARCH */
    $(".search__btn").on("click", function(e) {
        e.preventDefault();

        $(this).closest(".search").toggleClass("active");

        if($(window).width() > '767') {
            $(".search__form").fadeToggle(300);
        }

        $(".lang__drop, .nav__list").slideUp(300);
        $('.lang, .nav, .nav__link-mobile').removeClass('active');
    });


    /* LANG */
    $(".lang__btn").on("click", function(e) {
        e.preventDefault();

        $(this).closest(".lang").toggleClass("active");
        $(this).siblings(".lang__drop").slideToggle(300);


        if($(window).width() > '767') {
            $(".search__form").fadeOut(300);
        }
        $(".nav__list").slideUp(300);
        $('.search, .nav, .nav__link-mobile').removeClass('active');
    });


    /* MOBILE MENU */
    $(".nav__link-mobile").on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $(".nav__list").slideToggle(300);

        $(".lang__drop").slideUp(300);
        $('.lang').removeClass('active');
    });


    /* LATTER */
    $(".dictionary__btn").on("click", function(e) {
        e.preventDefault();

        var letterLinkAttr = $(this).attr("data-letter");

        $(".dictionary__list").removeClass("active");
        $(this).closest(".dictionary__list").addClass("active");

        $(".dictionary__row").removeClass("active");
        $(".dictionary__row-" + letterLinkAttr).addClass("active");
    });
    $(".dictionary__btn-link").on("click", function(e) {
        e.preventDefault();

        var linkAttr = $(this).attr("data-cotnent");

        if(linkAttr !== undefined && linkAttr < 3) {
            $('.dictionary__left').removeClass("active");
            $('.dictionary__left-' + linkAttr).addClass("active");
        }
    });


    /* EVENTS */
    if($('.events__carousel').length > 0) {
        $('.events__carousel').owlCarousel({
            loop:true,
            margin:10,
            dots: false,
            nav:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                992:{
                    items: 3
                }
            }
        });
    }


    /* RIGHT CONTENT FIXED in SCROLL */

});