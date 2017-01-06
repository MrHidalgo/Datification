$(window).on("load resize ready", function(){

    if($(window).width() > '991') {
        $(".nav, .nav__link-mobile").removeClass("active");
        $(".nav__list").removeClass("nav__list_small");
        $(".nav__list").attr("style", "");
    } else {
        $(".nav__list").addClass("nav__list_small");
    }
});


$(document).ready(function() {

    /* BODY CLICK */
    $('body').on('click', function (e) {
        var classForBody = ".nav__item, .search__btn, " +
            ".search__input, .lang__btn, " +
            ".lang__drop, .nav__link-mobile, .nav__list, .nav__list_small";

        if (!$(e.target).closest(classForBody).length) {
            $('.nav__item, .search, .lang, .nav__link-mobile, .nav').removeClass('active');
            $(".search__form").fadeOut(300);
            $(".lang__drop, .nav__list_small").slideUp(300);
        }
    });


    /* MENU */
    $(".nav__link").on("click", function(e) {
        e.preventDefault();

        $(".nav__item").removeClass("active");
        $(this).closest(".nav__item").addClass("active");
    });


    /* SEARCH */
    $(".search__btn").on("click", function(e) {
        e.preventDefault();

        $(this).closest(".search").toggleClass("active");

        $(".search__form").fadeToggle(300);

        $(".lang__drop, .nav__list_small").slideUp(300);
        $('.lang, .nav, .nav__link-mobile').removeClass('active');
    });


    /* LANG */
    $(".lang__btn").on("click", function(e) {
        e.preventDefault();

        $(this).closest(".lang").toggleClass("active");
        $(this).siblings(".lang__drop").slideToggle(300);

        $(".search__form").fadeOut(300);
        $(".nav__list_small").slideUp(300);
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
        })
    }
});