burger = document.querySelector('.burger');
nav = document.querySelector('.nav');
logo = document.querySelector('.logo');
navbar = document.querySelector('.navbar');
logo1 = document.querySelector('.logo-class');

burger.addEventListener('click', () => {
    logo.classList.toggle('v-class');
    nav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    logo1.classList.toggle('v-class');

})