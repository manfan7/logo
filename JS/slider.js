/*feedback*/
// Получаем элементы слайдера
const slider = document.querySelector('.namesBlock_feedback');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('spanSlide'));
const slideCount = slides.length;
let slideIndex = 0;

let size = window.innerWidth
if (size <= 1400) {
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
  updateSlider();
}

window.addEventListener('resize', function () {
  let resize = window.innerWidth
  if (resize <= 1400) {
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
    updateSlider();
  }
  else {
    if (resize>=1401) {
      slides.forEach((slide, index) => {
          slide.style.display = 'block';
      });
    }
  }
});

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

}

/*partners*/
// Получаем элементы слайдера
const slider1 = document.querySelector('.imagesMob_partners');
const prevButton1 = document.querySelector('.prev-button1');
const nextButton1 = document.querySelector('.next-button1');
const slides1 = Array.from(slider1.querySelectorAll('img'));
const slideCount1 = slides1.length;
let slideIndex1 = 0;

let slideIndex2 = 0;
let slideIndexNext2=1;

let size1 = window.innerWidth
if (size1 <= 699) {
  slider1.style='display: grid; grid-template-rows: 100px;';
  prevButton1.addEventListener('click', showPreviousSlide1);
  nextButton1.addEventListener('click', showNextSlide1);
  updateSlider1();
}
else {
  if(size1 >= 700 && size1 <= 1400 ){
    slider1.style='display: grid; grid-template-columns: 1fr 1fr; grid-gap: 65px; grid-template-rows: 100px;';
    prevButton1.addEventListener('click', showPreviousSlide2);
    nextButton1.addEventListener('click', showNextSlide2);
    updateSlider2();
  }
  if(size1 >= 1401){
    slider1.style='display: none'
  }
}

window.addEventListener('resize', function () {
  let resize1 = window.innerWidth
  if (resize1 <= 699) {
    slider1.style='display: grid; grid-template-rows: 100px;';
    prevButton1.removeEventListener('click', showPreviousSlide2);
    nextButton1.removeEventListener('click', showNextSlide2);
    prevButton1.addEventListener('click', showPreviousSlide1);
    nextButton1.addEventListener('click', showNextSlide1);
    updateSlider1();
  }
  else {
    if(resize1 >= 700 && resize1 <= 1400 ){
      slider1.style='display: grid; grid-template-columns: 1fr 1fr; grid-gap: 65px; grid-template-rows: 100px;';
      prevButton1.removeEventListener('click', showPreviousSlide1);
      nextButton1.removeEventListener('click', showNextSlide1);
      prevButton1.addEventListener('click', showPreviousSlide2);
      nextButton1.addEventListener('click', showNextSlide2);
      updateSlider2();
    }
    else {
      if(resize1 >=1401){
        slider1.style='display: none';
      }
    }
  }
});

// Функция для показа предыдущего слайда
function showPreviousSlide1() {
  slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
  updateSlider1();
}

// Функция для показа следующего слайда
function showNextSlide1() {
  slideIndex1 = (slideIndex1 + 1) % slideCount1;
  updateSlider1();
}

// Функция для обновления отображения слайдера
function updateSlider1() {
  slides1.forEach((slide, index) => {
    if (index === slideIndex1) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

/*slides on 2 images*/
// Функция для показа предыдущего слайда
// Функция для показа предыдущего слайда
function showPreviousSlide2() {
  slideIndex2 = (slideIndex2 - 2 + slideCount1) % slideCount1;
  slideIndexNext2 = (slideIndexNext2 - 2 + slideCount1) % slideCount1;
  updateSlider2();
}

// Функция для показа следующего слайда
function showNextSlide2() {
  slideIndex2 = (slideIndex2 + 2) % slideCount1;
  slideIndexNext2 = (slideIndexNext2 + 2) % slideCount1;
  updateSlider2();
}

// Функция для обновления отображения слайдера
function updateSlider2() {
  slides1.forEach((slide, index) => {
    if (index === slideIndex2 || index === slideIndexNext2) {
      slide.style.display = 'block';
    } 
    else {
      slide.style.display = 'none';
    }
  });
}
