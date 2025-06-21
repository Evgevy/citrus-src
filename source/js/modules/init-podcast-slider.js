const slider = document.querySelector('[data-slider="podcast"]');

const initPodcastSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next.podcast__next',
      prevEl: '.swiper-button-prev.podcast__prev',
    },
  });
};

export {initPodcastSlider};