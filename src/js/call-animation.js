$(window).on('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('.portfolio__title').offset().top + $('.portfolio__title').height() ;
    if (scroll_pos > element_pos) {
        $('.portfolio__title').addClass('portfolio__launch');
    };
})