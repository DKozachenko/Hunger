'use strict'

const burger = document.querySelector('.burger'),
  navs = document.querySelectorAll('.nav__left, .nav__right'),
  
  homeInnerDownbutton = document.querySelector('.home__inner-downbutton'),
  home = document.querySelector('.home');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navs.forEach(item => {
    item.classList.toggle('nav_show');
  })
}) 

homeInnerDownbutton.addEventListener('click', () => {
  const homeHeight = home.offsetHeight;
  
  window.scrollTo({
    top: homeHeight,
    behavior: 'smooth'
  })
})