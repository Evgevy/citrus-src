const slider = document.querySelector('[data-slider="tape"]');

const initInfoSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    grabCursor: true,
    // navigation: {
    //   nextEl: '.swiper-button-next.team__next',
    //   prevEl: '.swiper-button-prev.team__prev',
    // },
    autoplay: {
      delay: 1000,           
      disableOnInteraction: false,
    },
    speed: 5000,          
    centeredSlides: true,
  });
};

export {initInfoSlider};
