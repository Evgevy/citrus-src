const sliderDelivery = document.querySelector('[data-slider="delivery"]')

const initDeliverySlider = () => {
    if(!sliderDelivery) {
        return;
    }

    const swiper = new Swiper(sliderDelivery, {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination.delivery__pagination', 
            clickable: true, 
        },
        navigation: {
            nextEl: '.swiper-button-next.delivery__next',
            prevEl: '.swiper-button-prev.delivery__prev',
        },
    })
}

export{initDeliverySlider};