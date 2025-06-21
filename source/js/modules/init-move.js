// const tops = document.querySelectorAll('.catalog__top');
// const bottoms = document.querySelectorAll('.catalog__bottom');

// const originalPositions = Array.from(bottoms).map(bottom => bottom.parentNode);

const initMove = () => {
    const button = document.querySelector('.header__btn');
    const menu = document.querySelector('.header__menu');
    const nextElement = document.querySelector('.header__next');
    
    if (!button || !menu) return;
  
    function handleResponsiveLayout() {
      // Создаем контейнер для мобильного меню
      let mobileMenuContainer = document.querySelector('.mobile-menu-container');
      
      // Для экранов меньше 620px
      if (window.innerWidth < 620) {
        // Создаем контейнер если его нет
        if (!mobileMenuContainer) {
          mobileMenuContainer = document.createElement('div');
          mobileMenuContainer.className = 'mobile-menu-container';
          menu.appendChild(mobileMenuContainer);
        }
        
        // Перемещаем элементы в контейнер в нужном порядке
        if (nextElement && !nextElement.classList.contains('moved-to-menu')) {
          mobileMenuContainer.appendChild(nextElement);
          nextElement.classList.add('moved-to-menu');
        }
        if (!button.classList.contains('moved-to-menu')) {
          mobileMenuContainer.appendChild(button);
          button.classList.add('moved-to-menu');
          button.style.display = 'block';
        }
      }
      // Для экранов 620px-1149px
      else if (window.innerWidth < 1150) {
        // Удаляем контейнер, если он есть
        if (mobileMenuContainer) {
          mobileMenuContainer.remove();
        }
        
        // Просто перемещаем кнопку в меню
        if (!button.classList.contains('moved-to-menu')) {
          menu.appendChild(button);
          button.classList.add('moved-to-menu');
          button.style.display = 'block';
        }
        // Возвращаем nextElement на исходное место
        if (nextElement && nextElement.classList.contains('moved-to-menu')) {
          document.querySelector('.header__actions')?.appendChild(nextElement);
          nextElement.classList.remove('moved-to-menu');
        }
      }
      // Для экранов 1150px и больше
      else {
        // Удаляем контейнер, если он есть
        if (mobileMenuContainer) {
          mobileMenuContainer.remove();
        }
        
        // Возвращаем все элементы на исходные места
        if (button.classList.contains('moved-to-menu')) {
          document.querySelector('.header__actions')?.appendChild(button);
          button.classList.remove('moved-to-menu');
          button.style.display = 'none';
        }
        if (nextElement && nextElement.classList.contains('moved-to-menu')) {
          document.querySelector('.header__actions')?.appendChild(nextElement);
          nextElement.classList.remove('moved-to-menu');
        }
      }
    }
  
    // Вызываем функцию сразу
    handleResponsiveLayout();
  };
  
  // Инициализируем при загрузке
  document.addEventListener('DOMContentLoaded', initMove);
  // И при изменении размера окна
  window.addEventListener('resize', initMove);
  
  export { initMove };