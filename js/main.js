let boton = document.querySelector('.bx-menu')
let nav = document.querySelector('nav')
let mainDisplay = document.querySelector('.mainDisplay')
let header = document.querySelector('header')
let astro = document.querySelector('.astro')
let flechita = document.querySelector('.bx-chevron-right')
let carrito = document.querySelector('.bx-cart')


boton.addEventListener('click', function () {
    nav.classList.toggle('active');
    mainDisplay.classList.toggle('active');
    header.classList.toggle('active');
    astro.classList.toggle('active');
    flechita.classList.toggle('active');
    carrito.classList.toggle('active');
    
});
