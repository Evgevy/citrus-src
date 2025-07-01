// let caroSlider1 = null;
// const BREAKPOINT = 1120;

const initGradeSlider = () => {
  // if (caroSlider1 || window.innerWidth >= BREAKPOINT) return;

  // const sliderContainer1 = document.querySelector('.card__slider');
  // if (!sliderContainer1) return;

  // // Инициализация слайдера с плавным переходом
  // caroSlider1 = new MicroSlider(sliderContainer1, {
  //   indicators: true,
  //   indicatorText: '',
  //   transitionDuration: 300,
  //   easing: 'ease-in-out'
  // });

  // // Инициализация Hammer.js для свайпов
  // const hammer = new Hammer(sliderContainer1);
  // hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 1, velocity: 0.05 });

  // hammer.on('swipeleft', () => {
  //   caroSlider1.next();
  //   //console.log('swipe left — next slide');
  // });

  // hammer.on('swiperight', () => {
  //   caroSlider1.prev();
  //   //console.log('swipe right — previous slide');
  // });

  // Если не нужно останавливать автоплей (его нет), обработчики клика/тапа можно убрать
  // Но если хотите, например, для будущих целей, можно оставить:
  // sliderContainer1.addEventListener('click', () => {/* можно добавить логику */});
  // hammer.on('tap', () => {/* можно добавить логику */});
};

// const destroyGradeSlider = () => {
//   if (!caroSlider1) return;

//   if (typeof caroSlider1.destroy === 'function') {
//     caroSlider1.destroy();
//   }
//   caroSlider1 = null;
// };

// const checkGradeSlider = () => {
//   if (window.innerWidth < BREAKPOINT) {
//     initGradeSlider();
//   } else {
//     destroyGradeSlider();
//   }
// };

// let resizeTimeout;
// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(checkGradeSlider, 100);
// });

// document.addEventListener('DOMContentLoaded', checkGradeSlider);

export { initGradeSlider };