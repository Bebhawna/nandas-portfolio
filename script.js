
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

// Clone first slide and append it for seamless transition
const firstClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstClone);

let index = 0;

function showNextSlide() {
  index++;
  slidesContainer.style.transition = "transform 3s ease-in-out";
  slidesContainer.style.transform = `translateX(-${index * 100}vw)`;

  // Reset to first slide after reaching clone
  if (index === totalSlides) {
    setTimeout(() => {
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform = `translateX(0)`;
      index = 0;
    }, 3000); // same as transition duration
  }
}

// Change slide every 8 seconds
setInterval(showNextSlide, 8000);


// Fade-in effect when About Us section enters view
window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about-us");
  const rect = aboutSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 150) {
    aboutSection.classList.add("visible");
  }
});

// // Fade-in animation on scroll
// const fadeEls = document.querySelectorAll('.fade-in');

// window.addEventListener('scroll', () => {
//   fadeEls.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       el.classList.add('show');
//     }
//   });
// });

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
fadeElements.forEach(el => observer.observe(el));


  const cards = document.querySelectorAll(".award-card");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();