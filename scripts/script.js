$(document).ready(function () {
    //sticky header (can help for mobile version)
    // $(window).scroll(function(){
    //     if ($(window).scrollTop() >= 0) {
    //         $('header').addClass('sticky-header');
    //     }  else {
    //         $('header').removeClass('sticky-header');
    //     }
    // });
    //modal window
    $('.modal-button').click(function () {
        $('.request').css('display', 'block');
        $('html').css('overflow', 'hidden')
    });

    $('.request__close').click(function () {
        $('.request').css('display', 'none');
        $('.request-after-send').css('display', 'none');
        $('html').css('overflow', 'auto')
    });

    $('#form').submit(function (event) {
        event.preventDefault();
        $('.request').css('display', 'none');
        $('.request-after-send').css('display', 'block');
        const name = $('.request-name').val();
        const email = $('.request-email').val();
        const phone = $('.request-phone').val();
        const data = {
            name: name,
            email: email,
            phone: phone
        };
        console.log(data);
    })

    //slider
    $('.arrow-right-red').click(function() {
        $('.slider-cards').scrollLeft(400);
        $('.slider-cards' ).animate({ "left": "-=470px" }, "slow" );
        $('.arrow-right-red').css('display', 'none');
        $('.arrow-right-gray').css('display', 'block');
        $('.arrow-left-red').css('display', 'block');
        $('.arrow-left-gray').css('display', 'none');
    })

    $('.arrow-left-red').click(function() {
        $('.slider-cards').scrollLeft(400);
        $('.slider-cards' ).animate({ "left": "+=470px" }, "slow" );
        $('.arrow-right-red').css('display', 'block');
        $('.arrow-right-gray').css('display', 'none');
        $('.arrow-left-red').css('display', 'none');
        $('.arrow-left-gray').css('display', 'block');
    })

});