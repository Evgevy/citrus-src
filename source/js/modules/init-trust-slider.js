const slider = document.querySelector('[data-slider="trust"]');

const initTrustSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 16,

    navigation: {
      nextEl: '.swiper-button-next.trust__next',
      prevEl: '.swiper-button-prev.trust__prev',
    },
    // breakpoints: {
    //       320: {
    //         slidesPerView: 'auto',
    //       },
    //       768: {
    //         slidesPerView: 2,
    //       }
    //     },
  });
};

export {initTrustSlider};
