const initGradeSlider = () => {
  const slider = document.querySelector('[data-slider="grade"]');
  if (!slider) return;

  let swiperInstance = null;

  const checkResolution = () => {
    const isMobile = window.innerWidth <= 1120;

    if (isMobile && !swiperInstance) {
      
      swiperInstance = new Swiper(slider, {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        speed: 700,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        },
        touchReleaseOnEdges: true,
        resistanceRatio: 0.7,
        watchSlidesProgress: false,
        preloadImages: true,
        observer: true,
        observeParents: true,
      });

      
      slider.classList.add('swiper-initialized');
    } 
    else if (!isMobile && swiperInstance) {
      
      swiperInstance.destroy(true, true);
      swiperInstance = null;
      slider.classList.remove('swiper-initialized');
    }
  };

  
  checkResolution();
  
  window.addEventListener('resize', checkResolution);
};

export { initGradeSlider };