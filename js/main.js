const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', toggleMode);
close.addEventListener('click', toggleMode);

function toggleMode() {
   modal.classList.toggle("is-open");
}

new WOW().init();