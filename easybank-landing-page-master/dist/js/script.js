const menuMobile = document.querySelector('.js-hamburger');
const overlay = document.querySelector('.overlay');
const links = document.querySelector('.js-links');
function callback() {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        overlay.classList.remove('open');
        links.classList.remove('open');

    }else {
        menuMobile.classList.add('open');
        overlay.classList.add('open');
        links.classList.add('open');
    }
}
menuMobile.addEventListener('click', callback);