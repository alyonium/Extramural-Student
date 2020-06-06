$(document).ready(function () {
    console.log('i love Dima');
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
        $('html').css('overflow-y', 'hidden');
    });

    $('.request__close').click(function () {
        $('.request').css('display', 'none');
        $('html').css('overflow-y', 'scroll');
    });

});