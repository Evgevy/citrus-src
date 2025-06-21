

const initIntroSlider = () => {
  const sliderContainer = document.querySelector('[data-slider="intro"]');
  if (!sliderContainer) return;

  sliderContainer.style.overflow = 'visible';

  const swiper = new Swiper(sliderContainer, {
    
    slidesPerView: 3, 
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,       
    },
    navigation: {
      nextEl: '.swiper-button-next.intro__next',
      prevEl: '.swiper-button-prev.intro__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1.3,
      },
      550: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.8,
      },
      1024: {
        slidesPerView: 2.5,
      },
      1380: {
        slidesPerView: 3,
      }
    },
    on: {
    slideChange: function () {
      
      const slides = this.slides;
      const activeSlide = slides[this.activeIndex];
      
      const slideDark = document.querySelector('.slide-dark')
      const slideGreen = document.querySelector('.slide-green');
      const slideWhite = document.querySelector('.slide-white');
      
      if (activeSlide.classList.contains('slide-white')) {
       
        slideGreen.style.opacity = '0';
      } else if (activeSlide.classList.contains('slide-green')) {
        slideWhite.style.opacity = '0';
        slideGreen.style.opacity = '1';
      } else {
        slideGreen.style.opacity = '1';
        slideWhite.style.opacity = '1';
      }

        
      
    }
  }
  
  });

  return swiper;
};

export { initIntroSlider };
