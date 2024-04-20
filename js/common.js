$(document).ready(function () {
    //Скролл к верху страницы
    $('.footer__to-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('.article_info_like').on('click', function () {
        $(this).addClass('active');
    });



    //слайдер
    var swiperGallery = new Swiper(".slider_gallery", {
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // открытие картинки во весь экран
    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: false,
        Image: {
            zoom: false,
        },
    });

});