$(function () {


    $('.header__menu-btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
      });

    $('.header__top-close').on('click', function() {
        $('.header__top').toggle();
    });

    $('.top-slider__inner').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000
    });

    $('.tarla__slider-inner').slick({
        slidesToShow: 3.6,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      });

});