const slider = document.querySelector('[data-slider="intro"]');

const initIntroSlider = () => {

   if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    effect: "coverflow",
    loop: true, 
    // loopAdditionalSlides: 'auto', 
    // loopedSlides: 1, 
    // initialSlide: 1,
    grabCursor: true,
    centeredSlides: true,
    speed: 700,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
    },
    
  });
};
export{initIntroSlider};