const headerScroll = () => {
    const header = document.querySelector('.header');

    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let scrollingDown = false;
    let scrollingUp = false;
    let hasScrolledDown = false;

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
            if (currentScroll > lastScroll) {
                
                scrollingDown = true;
                scrollingUp = false;
                hasScrolledDown = true;
        
                
                header.classList.add('header--hidden');
                header.classList.remove('header--visible');
            } else if (currentScroll < lastScroll) {
                
                scrollingDown = false;
                scrollingUp = true;
        
                
                if (hasScrolledDown) {
                header.classList.add('header--visible');
                header.classList.remove('header--hidden');
                }
            }
        
            
            if (currentScroll <= 0) {
                hasScrolledDown = false;
                header.classList.remove('header--hidden');
                header.classList.remove('header--visible');
            }
        
            lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        });
    }
    

}
export{headerScroll};