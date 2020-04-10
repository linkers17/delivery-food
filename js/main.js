const cartButton = document.getElementById('cart');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

modal.addEventListener('click', toggleModal);

function toggleModal() {

   modal.classList.toggle('modal-active');

}

new WOW().init();