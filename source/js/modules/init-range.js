const initRange = () => {
    const rangeSlider = document.querySelector('.range-slider__input');
    const progress = document.querySelector('.range-slider__progress');
    const valueDisplay = document.querySelector('.range-slider__value');

    if(rangeSlider) {
      rangeSlider.addEventListener('input', function() {
        const value = this.value;
        progress.style.width = `${value}%`;
        valueDisplay.textContent = `${value}%`;
        valueDisplay.style.left = `${value}%`;
      });


    
        const fileInput = document.getElementById('file-input');
        const previewContainer = document.querySelector('.file-upload__preview');
        const fileNameElement = document.querySelector('.file-upload__filename');
        const removeButton = document.querySelector('.file-upload__remove');
      
        
        previewContainer.style.display = 'none';
      
        fileInput.addEventListener('change', function() {
          if (this.files.length > 0) {
            fileNameElement.textContent = this.files[0].name;
            previewContainer.style.display = 'flex';
          } else {
            previewContainer.style.display = 'none';
          }
        });
      
        removeButton.addEventListener('click', function() {
          fileInput.value = '';
          previewContainer.style.display = 'none';
        });
    }
   
      

}

export {initRange};