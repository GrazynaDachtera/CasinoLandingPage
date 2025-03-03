/*3-Step Process Animation:
This block animates the steps in the registration process.
It waits until the DOM is fully loaded, then makes each step appear one by one. */

  document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.registration-process-section .step');
    //For each step, I set initial styles to hide them and move them down 40px.
    steps.forEach(step => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(40px)';
    });

  /* Loop through each step and set a timeout to animate them sequentially.
  Each step will become visible after a delay based on its position (index). */
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add('visible');
        step.style.opacity = '';
        step.style.transform = '';
      }, (index + 1) * 500);
    });
  });
  
/*Carousel/Slider Animation:
  This block creates an automatic image carousel that transitions between slides.
  It also clones the first image and appends it to the end for a smooth looping effect.*/
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('.slider-image');
  const totalImages = images.length;
  let index = 0;
  const slideDuration = 3000;      // time between slides in milliseconds
  const transitionDuration = 500;  // Duration of the slide transition effect

  /*Clone the first image and append it to the carousel.
    This clone will allow a smooth transition when looping back to the start.*/
  const firstClone = images[0].cloneNode(true);
  carousel.appendChild(firstClone);

  // Calculate the total number of slides (original images + the cloned image)
  const totalSlides = totalImages + 1;
  // Use setInterval to automatically advance the carousel at regular intervals.
  setInterval(() => {
    index++;
    carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    carousel.style.transform = `translateX(-${index * 100}%)`;

    /*When we reach the cloned image (the end of the carousel),
      reset the carousel back to the start without any transition.*/
    if (index === totalSlides - 1) {
      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0)`;
        index = 0;
      }, transitionDuration);
    }
  }, slideDuration);
});
