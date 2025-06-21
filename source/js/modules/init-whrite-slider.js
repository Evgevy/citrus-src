const slider = document.querySelector('[data-slider="whrite"]');

const initWhriteSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 16,

    navigation: {
      nextEl: '.swiper-button-next.whrite__next',
      prevEl: '.swiper-button-prev.whrite__prev',
    },
    breakpoints: {
          320: {
            slidesPerView: 'auto',
          },
          768: {
            slidesPerView: 2,
          }
        },
  });
};

export {initWhriteSlider};
