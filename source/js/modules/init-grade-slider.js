const slider = document.querySelector('[data-slider="card"]');
let swiper1 = null;

const initGradeSlider = () => {
  if (!slider) return;

  
  const handleResize = () => {
    if (window.innerWidth <= 1120) {
      if (!swiper1) {
        swiper1 = new Swiper(slider, {
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
    // navigation: {
    //   nextEl: '.swiper-button-next.intro__next',
    //   prevEl: '.swiper-button-prev.intro__prev',
    // },
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
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          },
          on: {
            slideChange: function () {
              
              const slides = this.slides;
              const activeSlide = slides[this.activeIndex];
              
              const slideDark = document.querySelector('.slide-dark1')
              const slideGreen = document.querySelector('.slide-green1');
              const slideWhite = document.querySelector('.slide-white1');
              
              if (activeSlide.classList.contains('slide-dark1')) {
                slideDark.style.opacity = '1';
                slideGreen.style.opacity = '0';
              } else if (activeSlide.classList.contains('slide-green1')) {
                slideDark.style.opacity = '0';
                slideGreen.style.opacity = '1';
              } else {
                slideGreen.style.opacity = '1';
                slideWhite.style.opacity = '1';
                slideDark.style.opacity = '1';
              }
        
                
              
            }
          }
          
        });
      }
    } else {
      if (swiper1) {
        swiper1.destroy(true, true);
        swiper1 = null;
      }
    }
  };

  handleResize();

  window.addEventListener('resize', handleResize);
};

export { initGradeSlider };