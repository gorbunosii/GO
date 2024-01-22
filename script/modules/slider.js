new Swiper('.one', {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 10000,
  },
});

new Swiper('.two', {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7000,
  },
});

new Swiper('.three', {
  grabCursor: true,
  spaceBetween: 20,
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    0: {
      direction: 'vertical',
    },
    320: {
      direction: 'horizontal',
    },
  },
});
