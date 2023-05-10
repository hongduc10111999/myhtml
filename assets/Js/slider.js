$(document).ready(function () {
    $(function () {
        // banner slider
        $('.slider-bg').slick({
            dots: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/Images/arrow-left.svg'/></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/Images/arrow-right.svg'/></button>",
            autoplay: true,
            speed: 400
        });
    });


    // $('.menu-tag .tablinks').on('click', function () {
    //     $(this).addClass('menu-tag__active');

    //     $(".tablinks").each(function (index) {
    //         var __this = $(this);
    //         __this.removeClass('menu-tag__active');
    //     });

    //     setTimeout(function () {
    //         $(".content-wapper .tab-content").each(function (index) {
    //             $(this).removeClass('active');
    //             let contentIndex = $(this).attr("data-link");
    //             let tagIndex = $('.menu-tag__active').data('index');

    //             if (contentIndex == tagIndex) {
    //                 $(this).addClass('active');
    //             }
    //         });
    //     }, 200);

    //     $(this).addClass('menu-tag__active');
    // });
})