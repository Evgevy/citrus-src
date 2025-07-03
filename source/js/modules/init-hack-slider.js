const slider = document.querySelector('[data-slider="hack"]');

const initHackSlider = () => {
    if (!slider) {
        return;
    }

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 8,
        grabCursor: true,
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
        nextEl: '.swiper-button-next.hack__next',
        prevEl: '.swiper-button-prev.hack__prev',
        },
    })

}

export{initHackSlider};