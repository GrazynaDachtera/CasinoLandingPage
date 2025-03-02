document.addEventListener("DOMContentLoaded", () => {
  // Lazy-load videos marked with a data-src attribute
  function lazyLoadVideos() {
    const videos = document.querySelectorAll("video[data-src]");
    const config = { root: null, threshold: 0.25 };

    const loadVideo = (video) => {
      const dataSrc = video.getAttribute("data-src");
      if (dataSrc) {
        video.src = dataSrc;
        video.removeAttribute("data-src");
        video.load();
      }
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadVideo(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, config);
      videos.forEach(video => observer.observe(video));
    } else {
      videos.forEach(video => loadVideo(video));
    }
  }
  lazyLoadVideos();

  /*
  // Smooth carousel/slider logic for images
  const slidesContainer = document.querySelector(".carousel");
  if (slidesContainer) {
    let slides = slidesContainer.querySelectorAll("img.slider-image");
    if (slides.length > 1) {
      // Clone the first slide for a seamless loop
      const firstSlideClone = slides[0].cloneNode(true);
      slidesContainer.appendChild(firstSlideClone);
      
      // Update the slides NodeList after cloning
      slides = slidesContainer.querySelectorAll("img.slider-image");
      const totalSlides = slides.length;
      let currentIndex = 0;
      const slideInterval = 6000; // time between slides
      const transitionTime = 2000; // slide transition duration

      function nextSlide() {
        currentIndex++;
        slidesContainer.style.transition = `transform ${transitionTime}ms ease-in-out`;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      // When the transition ends, reset if we've reached the clone
      slidesContainer.addEventListener("transitionend", () => {
        if (currentIndex >= totalSlides - 1) {
          slidesContainer.style.transition = "none";
          slidesContainer.style.transform = "translateX(0)";
          currentIndex = 0;
          // Force reflow to immediately apply the non-transitioned state
          void slidesContainer.offsetWidth;
        }
      });

      setInterval(nextSlide, slideInterval);
    }
  }
  */

  // 3-Step Process Animation
  const steps = document.querySelectorAll('.registration-process-section .step');
  steps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(40px)';
  });
  steps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add('visible');
      step.style.opacity = '';
      step.style.transform = '';
    }, (index + 1) * 1000);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('.slider-image');
  const totalImages = images.length;
  let index = 0;
  const slideDuration = 3000;      // time between slides in milliseconds
  const transitionDuration = 500;  // CSS transition duration in milliseconds

  // Clone the first image to append it at the end for a smooth infinite loop
  const firstClone = images[0].cloneNode(true);
  carousel.appendChild(firstClone);

  // New total slide count (original images + clone)
  const totalSlides = totalImages + 1;

  setInterval(() => {
    index++;
    carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    carousel.style.transform = `translateX(-${index * 100}%)`;

    // When we reach the cloned slide, reset to the start without transition
    if (index === totalSlides - 1) {
      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0)`;
        index = 0;
      }, transitionDuration);
    }
  }, slideDuration);
});
