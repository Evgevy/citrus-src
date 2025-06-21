const slider = document.querySelector('[data-slider="hack"]');

const initHackSlider = () => {
    if (!slider) {
        return;
    }

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 8,
        grabCursor: true,
        navigation: {
        nextEl: '.swiper-button-next.hack__next',
        prevEl: '.swiper-button-prev.hack__prev',
        },
    })

}

export{initHackSlider};