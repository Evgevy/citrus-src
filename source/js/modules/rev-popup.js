const revPopup = () => {
    const popupOverlay = document.querySelector('.popup-overlay');
        const popupCloseBtn = popupOverlay.querySelector('.popup-close');
        const popupText = popupOverlay.querySelector('.popup-text');
        const popupName = popupOverlay.querySelector('.popup-name');
        const popupPosition = popupOverlay.querySelector('.popup-position');
        const popupAvatar = popupOverlay.querySelector('.popup-avatar');

        const slides = document.querySelectorAll('.swiper-slide');

        function openPopup({ name, position, avatarSrc, text }) {
            popupName.textContent = name;
            popupPosition.textContent = position;
            popupAvatar.src = avatarSrc;
            popupText.textContent = text;

            popupOverlay.style.display = 'flex';

            document.body.style.overflow = 'hidden';
        }

        function closePopup() {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }

        
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                const name = slide.querySelector('.reviews__name').textContent.trim();
                const position = slide.querySelector('span').textContent.trim();
                const avatarSrc = slide.querySelector('.reviews__image img').src;
                const text = slide.querySelector('.reviews__text').textContent.trim();

                openPopup({ name, position, avatarSrc, text });
            });
        });

        
        popupCloseBtn.addEventListener('click', closePopup);

        popupOverlay.addEventListener('click', e => {
        if (e.target === popupOverlay) {
            closePopup();
        }
        }); 


}

export{revPopup};