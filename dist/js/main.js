var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var cardLink = document.querySelectorAll('.card__link');

var idSet;
button.addEventListener('click', function(e) {
    
    openModal();
});
for (var i = 0; i < cardLink.length; i++) {
    cardLink[i].addEventListener('click', function(e){
        e.preventDefault();
        openModal();
    });
}
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
console.log('main.js');