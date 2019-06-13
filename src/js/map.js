// Как только будет загружен API и готов DOM, выполняем инициализацию
ymaps.ready(init);
console.log('map')
// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;

    $('#map').hover(function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [55.611409, 37.201122],
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                });
            }
        }
    );
}