var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var idSet;
button.addEventListener('click', function() {
    openModal();
});

close.addEventListener('click', function() {
    closeModal();
});
function openModal() {
    modal.classList.add('modal_active');
    idSet = setTimeout(function() {
        modal.classList.remove('modal_active');
    }, 5000);
}
function closeModal() {
    modal.classList.remove('modal_active');
    /*Очистим интервал, если закрыли раньше истечения таймера*/
    clearTimeout(idSet);
}
