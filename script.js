const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrevious = () => {
  if (counter > 0) { // Check if counter is greater than 0
    counter--;
    slideImage();
  }
};

const goNext = () => {
  if (counter < slides.length - 1) { // Check if counter is less than the last index
    counter++;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
