const slider = document.querySelector('[data-slider="tools"]');

const initStorySlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: true,
    speed: 1000,
    // navigation: {
    //   nextEl: '.swiper-button-next.tools__next',
    //   prevEl: '.swiper-button-prev.tools__prev',
    // },
  });
};

export {initStorySlider};