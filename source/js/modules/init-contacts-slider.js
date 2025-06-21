const sliderContacts = document.querySelector('[data-slider="video"]');

const initContactsSlider = () => {
  if (!sliderContacts) {
    return;
  }

  const swiper = new Swiper(sliderContacts, {
    slidesPerView: 'auto',
    
    // centeredSlides: true, 
    freeMode: true, 
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next.video__next',
      prevEl: '.swiper-button-prev.video__prev',
    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //   },
    //   768: {
    //     slidesPerView: 'auto',
    //   }
    // },
  });
};


export{initContactsSlider};