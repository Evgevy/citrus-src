const slider = document.querySelector('[data-slider="workshop"]');
let swiper; 

const initWorkShopSlider = () => {
  if (window.innerWidth <= 1022) {
    if (!slider) {
      return;
    }

    if (!swiper) { 
      swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination.workshop__pagination', 
          clickable: true, 
        },
      });
    }
  } else {
    if (swiper) { 
      swiper.destroy();
      swiper = null;
    }
  }
};


window.addEventListener('resize', initWorkShopSlider);

export { initWorkShopSlider };