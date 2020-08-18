'use strict'

const burger = document.querySelector('.burger'),
  navs = document.querySelectorAll('.nav__left, .nav__right');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navs.forEach(item => {
    item.classList.toggle('nav_show');
  })
}) 