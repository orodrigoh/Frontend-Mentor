const menuMobile = document.querySelector('.header');


function callback() {
    menuMobile.classList.toggle('open');
}
menuMobile.addEventListener('click', callback);