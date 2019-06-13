$(function() {
    console.log('call-map.js');
    var map = $('#map');
    var mapTop = map.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > mapTop) {
            console.log('scrolled...');
            $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad877624aab15bf2ba617e4d3c61c687e465ccffe9f874026662608da9717eeb6&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
            $(window).unbind('scroll');
        }
    });
});