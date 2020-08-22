'use strict'

const burger = document.querySelector('.burger'),
  navs = document.querySelectorAll('.nav__left, .nav__right'),
  
  homeInnerDownbutton = document.querySelector('.home__inner-downbutton'),
  home = document.querySelector('.home'),
  
  contentNavLinks = document.querySelectorAll('.content__nav-link'),
  columnItems = document.querySelectorAll('.column__item');

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

$('.special__inner-slider').slick({
  infinite: true,
  arrows: false,
  dots: true
});

contentNavLinks.forEach(elem => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const attrNav = elem.dataset.menuNav;
    for (elem of columnItems) {
      const attrRes = elem.dataset.menuResult;
      if (attrRes === attrNav) {
        elem.style.display = 'block';
      } else {
        elem.style.display = 'none';
      }
      //console.log(elem);
    }
  })
});