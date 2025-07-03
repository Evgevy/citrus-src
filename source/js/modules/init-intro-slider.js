const slider = document.querySelector('[data-slider="intro"]');

const initIntroSlider = () => {

   if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    speed: 800,
    slidesPerView: 'auto',
    autoplay: {
      delay: 4000,
    },

    coverflowEffect: {
      rotate: 0,
      stretch: 50, 
      depth: 150,   
      modifier: 1, 
      slideShadows: false,
    },
    spaceBetween: 55,
    touchReleaseOnEdges: true, 
    resistance: true,         
    resistanceRatio: 0.7,  

    
    watchSlidesProgress: false, 
    updateOnWindowResize: true, 
    
    preloadImages: true,
    observer: true,
    observeParents: true,
    // breakpoints: {
    //   300: {
    //     autoplay: false,
    //   },
    //   768: {
    //     delay: 4000,
    //   },
    // },
    
  });
};
export{initIntroSlider};