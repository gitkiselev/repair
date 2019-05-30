var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    /** */
    var idSet = setTimeout(function() {
        modal.classList.remove('modal_active');
    }, 5000);
    clearTimeout('idSet');
});

close.addEventListener('click', function() {
    modal.classList.remove('modal_active');
    /*Очистим интервал, если закрыли раньше истечения таймера*/
    clearTimeout('idSet');
});
