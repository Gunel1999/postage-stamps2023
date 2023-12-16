let currentSlide = 0;
let isTransitioning = false;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.stamp-slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const translateValue = -currentSlide * 16.666;
  slider.style.transform = `translateX(${translateValue}%)`;
}

function changeSlide(direction) {
  if (!isTransitioning) {
    isTransitioning = true;
    showSlide(currentSlide + direction);

    slider.addEventListener(
      'transitionend',
      () => {
        isTransitioning = false;
      },
      { once: true }
    );
  }
}

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(1);
});

// setInterval(() => {
//   changeSlide(1);
// }, 15000);

const menuBar = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-nav');

menuBar.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', e => {
  const targetElement = e.target;

  if (
    !targetElement.closest('.mobile-nav') &&
    !targetElement.classList.contains('fa-bars')
  ) {
    mobileMenu.classList.add('hidden');
  }
});
