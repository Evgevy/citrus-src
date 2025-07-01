const initClassesWithoutSlider = () => {
    const sliderContent = document.querySelector('.tape__slider-content');
    if (!sliderContent) return;
  
    const originalHTML = sliderContent.innerHTML;
    
    sliderContent.innerHTML = originalHTML.repeat(2);
  
    const updateAnimation = () => {
      const slides = sliderContent.querySelectorAll('.swiper-slide');
      const totalWidth = Array.from(slides).reduce(
        (sum, slide) => sum + slide.offsetWidth, 
        0
      );
      
      const speed = 100; 
      const duration = totalWidth / speed;
      
      sliderContent.style.animation = `marquee ${duration}s linear infinite`;
      sliderContent.style.width = `${totalWidth}px`;
    };
  
    const duplicateInterval = setInterval(() => {
      sliderContent.innerHTML += originalHTML;
      updateAnimation();
    }, 3000);
  
    
    updateAnimation();
  
    return () => clearInterval(duplicateInterval);
};
export{initClassesWithoutSlider}