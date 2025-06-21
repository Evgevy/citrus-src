const headMobile = () => {
    
    function isMobile() {
        return window.innerWidth <= 1150;
      }
      
      document.querySelectorAll('.header__item > .header__link').forEach(link => {
        link.addEventListener('click', function(e) {
          if (!isMobile()) {
            return;
          }
      
          const headerItem = this.parentElement; 
          const subList = headerItem.querySelector('.header__sub-list');
      
          if (!subList) {
            
            return;
          }
      
          
          e.preventDefault();
          headerItem.classList.toggle('open');
        });
      });
      

}
export{headMobile};