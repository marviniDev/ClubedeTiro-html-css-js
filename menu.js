let openMenu = document.querySelector('.button-open-menu');
let closeMenu = document.querySelector('.button-close-menu');
let body = document.querySelector('body');

const OpenMenu = () => {
  let menu = document.querySelector('.menu-horizontal');
  menu.classList.remove('menu-close');
  body.style.overflow = 'hidden';
  menu.classList.add('menu-active');
};

const CloseMenu = () => {
  let menu = document.querySelector('.menu-horizontal');
  menu.classList.remove('menu-active');
  body.style.overflow = 'auto';
  menu.classList.add('menu-close');
  setTimeout(() => {
    menu.classList.remove('menu-close');
  }, 100);
};

openMenu.addEventListener('click', OpenMenu);
closeMenu.addEventListener('click', CloseMenu);