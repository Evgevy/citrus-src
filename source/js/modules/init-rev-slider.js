const slider = document.querySelector('[data-slider="reviews"]');

const initRevSlider = () => {
    if (!slider) {
        return;
    }

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        speed: 1000,
        loop: true,
        resistance: true, // Добавляет "упругость" при перетаскивании
    resistanceRatio: 0.6, // Уровень сопротивления
    followFinger: false, // Отключает следование за пальцем (для плавности)
    touchReleaseOnEdges: true, // Позволяет "отпускать" слайды у краев
    initialSlide: 1,
    // Параметры для плавности
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Функция плавности
    grabCursor: true, // Меняет курсор при наведении
    
    // Оптимизации
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2
    },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
        navigation: {
        nextEl: '.swiper-button-next.reviews__next',
        prevEl: '.swiper-button-prev.reviews__prev',
        },
    })

}

export{initRevSlider};