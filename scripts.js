function $doc(elem) {
  return document.querySelector(elem);
}
function hasClass(el, className) {
  return el.classList
    ? el.classList.contains(className)
    : new RegExp('(^| )' + className + '( |$doc)', 'gi').test(el.className);
}
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}
function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(
      new RegExp(
        '(^|\\b)' + className.split(' ').join('|') + '(\\b|$doc)',
        'gi',
      ),
      ' ',
    );
  }
}

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

// Todas as divs da página
let buttonsAction = document.querySelector('.bullets');
let buttons = document.querySelectorAll('.btn');
let slider = document.querySelector('.slider');
let counter = 0;

buttonsAction.addEventListener('click', function ({ target }) {
  const data = target.attributes['data_index'];
  if (data) {
    const index = +data.value;
    if (!hasClass(target, 'active')) {
      for (let i = 0; i < buttons.length; i++) {
        removeClass(buttons[i], 'active');
      }
      addClass(target, 'active');
      slider.setAttribute('data_index', index);
      counter = index;
    }
  }
});

let previous;
let timer = setInterval(function () {
  if (counter >= 4) {
    counter = 0;
  }

  if (counter == 0) {
    previous = 3;
  }

  slider.setAttribute('data_index', counter);
  removeClass(buttonsAction.children[previous], 'active');
  addClass(buttonsAction.children[counter], 'active');
  counter++;
  previous = counter - 1;
}, 5000);

$(document).ready(function () {
  $('.slider-cursos').lightSlider({
    item: 3,
    autoWidth: true,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: '',
    mode: 'slide',
    useCSS: true,
    cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: 'linear', //'for jquery animation',////

    speed: 400, //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: true,
    controls: true,
    prevHtml: '',
    nextHtml: '',

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: false,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'middle',

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });
});

// $('.slider-cursos').slick({
//   variableWidth: true,
//   arrows: false,
//   dots: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 5,
//   slidesToScroll: 4,
//   centerMode: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         arrows: true,
//         slidesToShow: 4,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         arrows: true,
//         slidesToShow: 3,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });

(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using anime.js
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      console.log(this);
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        anime({
          targets: 'html, body',
          scrollTop: target.offset().top - 72,
          duration: 1000,
          easing: 'easeInOutExpo',
        });
        return false;
      }
    }
  });

  // // Scroll to top button appear
  // $(document).scroll(function () {
  //   var scrollDistance = $(this).scrollTop();
  //   if (scrollDistance > 100) {
  //     $('.scroll-to-top').fadeIn();
  //   } else {
  //     $('.scroll-to-top').fadeOut();
  //   }
  // });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function () {
  //   $('.navbar-collapse').collapse('hide');
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 80,
  // });

  // Collapse Navbar
  // var navbarCollapse = function () {
  //   if ($('#mainNav').offset().top > 100) {
  //     $('#mainNav').addClass('navbar-shrink');
  //   } else {
  //     $('#mainNav').removeClass('navbar-shrink');
  //   }
  // };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  // $(function () {
  //   $('body')
  //     .on('input propertychange', '.floating-label-form-group', function (e) {
  //       $(this).toggleClass(
  //         'floating-label-form-group-with-value',
  //         !!$(e.target).val(),
  //       );
  //     })
  //     .on('focus', '.floating-label-form-group', function () {
  //       $(this).addClass('floating-label-form-group-with-focus');
  //     })
  //     .on('blur', '.floating-label-form-group', function () {
  //       $(this).removeClass('floating-label-form-group-with-focus');
  //     });
  // });
})(jQuery); // End of use strict
