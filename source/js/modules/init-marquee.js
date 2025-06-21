const initMarquee = () => {
    const marqueeContent = document.querySelector('.tape__conw-content');
    
    if (!marqueeContent) return;

    const originalContent = marqueeContent.innerHTML;
    marqueeContent.innerHTML = originalContent + originalContent;
    

    const contentWidth = marqueeContent.scrollWidth / 2; 
    
    marqueeContent.style.animation = `marquee ${contentWidth / 100}s linear infinite`;
    
    marqueeContent.style.willChange = 'transform';
};

document.addEventListener('DOMContentLoaded', initMarquee);
export { initMarquee };