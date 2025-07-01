const slider = document.querySelector('[data-slider="reviews"]');

const initRevSlider = () => {
    if (!slider) {
        return;
    }

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        speed: 1000,
        navigation: {
        nextEl: '.swiper-button-next.reviews__next',
        prevEl: '.swiper-button-prev.reviews__prev',
        },
    })

}

export{initRevSlider};