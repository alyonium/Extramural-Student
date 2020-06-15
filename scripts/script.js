$(document).ready(function () {
    //sticky header (for mobile version)
    if($(window).width() < 577) {
        $('.header-wrapper').css('background-color', 'transparent')

        $(window).scroll(function(){
            if ($(window).scrollTop() > 0) {
                $('.header-wrapper').css('transition', '0.5s');
                $('.header-wrapper').css('background-color', '#fff')

            }  else {
                $('.header-wrapper').css('background-color', 'transparent');
            }
        });
    }

    //modal window
    $('.modal-button').click(function () {
        $('.request').css('display', 'block');
        $('html').css('overflow-y', 'hidden')
    });

    $('.request__close').click(function () {
        $('.request').css('display', 'none');
        $('.request-after-send').css('display', 'none');
        $('html').css('overflow-y', 'auto')
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
    // $('.arrow-right-red').click(function() {
    //     $('.slide-wrapper').scrollLeft(400);
    //     $('.slider-cards' ).animate({ "left": "-=470px" }, "slow" );
    //     $('.arrow-right-red').css('display', 'none');
    //     $('.arrow-right-gray').css('display', 'block');
    //     $('.arrow-left-red').css('display', 'block');
    //     $('.arrow-left-gray').css('display', 'none');
    // })
    // //
    // $('.arrow-left-red').click(function() {
    //     $('.slide-wrapper').scrollLeft(0);
    //     $('.slider-cards' ).animate({ "left": "+=470px" }, "slow" );
    //     $('.arrow-right-red').css('display', 'block');
    //     $('.arrow-right-gray').css('display', 'none');
    //     $('.arrow-left-red').css('display', 'none');
    //     $('.arrow-left-gray').css('display', 'block');
    // })

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.arrow-left-red'),
        nextArrow: $('.arrow-right-red'),
        responsive: [
            {
                breakpoint: 1161,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '35px',
                }
            },


        ]


    });

});