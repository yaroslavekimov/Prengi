$(document).ready(function(){
    $('.carousel__item').slick({
        speed: 1200,
        adaptiveHeight: false,
        dots: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/promo/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/promo/next.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    speed: 1000,
                    dots: false,
                    autoplay: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    speed: 1000,
                    dots: false,
                    autoplay: false,
                    arrows: false
                }
            }
        ]
    }),

    $('ul.expert__tabs').on('click', 'li:not(.expert__tab_active)', function() {
        $(this)
          .addClass('expert__tab_active').siblings().removeClass('expert__tab_active')
          .closest('div.container').find('div.expert__content').removeClass('expert__content_active').eq($(this).index()).addClass('expert__content_active');
    });









    // MODAL

    // $('[data-modal=consultation]').on('click', function() {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });
    // $('.modal__close').on('click', function() {
    //     $('.overlay, #consultation, #thanks').fadeOut('slow');
    // });

    // Маска ввода

    // $('input[name=phone]').mask("+7 (999) 999-99-99");

    // $('#cons-mod').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#consultation').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

    // $('#cons-form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });
    
    // $('#questions_form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

    
// // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
//     $("a[href^='#']").click(function(){
//         const _href = $(this).attr("href");
//         $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//         return false;
//     });

    new WOW().init();
});