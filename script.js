
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


  // const cards = document.querySelectorAll(".award-card");

  // function revealOnScroll() {
  //   const triggerBottom = window.innerHeight * 0.8;

  //   cards.forEach(card => {
  //     const cardTop = card.getBoundingClientRect().top;

  //     if (cardTop < triggerBottom) {
  //       card.classList.add("show");
  //     }
  //   });
  // }

  // window.addEventListener("scroll", revealOnScroll);
  // revealOnScroll();





  //Javascript for event.html


const galleries = [
  {
    title: "Inter-University Cultural Fest (Student Graphest) – 2022",
    images: [
      "images/img12.png",
      "images/img15.jpg",
      "images/img16.jpg"
    ]
  },
  {
    title: "Cultural Festival – Tula’s Institute – 2023",
    images: [
      "images/e2_1.jpg",
      "images/e2_2.jpg",
      "images/e2_3.jpg",
      "images/e2_4.jpg"
    ]
  },
  {
    title: "ISCON – 2022",
    // role: "My role: Performer & Presenter",
    images: [
      "images/iscon-3.jpeg",
      "images/iscon-2.jpeg",
      "images/iscon-1.jpeg",
      "images/iscon-4.jpeg"
    ]
  },
  {
    title: "VigyanDham UCOST – 2023",
    // role: "My role: Performer & Presenter",
    images: [
      "images/img2.jpg",
      "images/img3.jpg",
      "images/vgdham-1.jpeg",
      "images/vgdham-2.jpeg"
    ]
  },
  {
    title: "Grafest-2025",
    images: [
      "images/graphest-2.jpeg",
      "images/graphest2025(2).jpeg",
      "images/graphest-3.jpeg"
    ]
  },
  {
    title: "Alive-2026",
    // role: "My role: Performer & Presenter",
    images: [
      "images/alive-1.jpg",
      "images/alive-2.jpg"
    ]
  }
  
];

let currentGallery = 0;
let currentImage = 0;

function openGallery(index){
  currentGallery = index;
  currentImage = 0;

  document.getElementById("lightbox").style.display="flex";
  showImage();
}

function closeGallery(){
  document.getElementById("lightbox").style.display="none";
}

// function showImage(){
//   const data = galleries[currentGallery];
//   document.getElementById("lightbox-img").src = data.images[currentImage];
//   document.getElementById("lightbox-title").innerText = data.title;
//   document.getElementById("lightbox-role").innerText = data.role;
// }
function showImage(){
  const data = galleries[currentGallery];

  document.getElementById("lightbox-title").innerText = data.title;
  document.getElementById("lightbox-role").innerText = data.role;

  const galleryContainer = document.getElementById("lightbox-gallery");
  galleryContainer.innerHTML = ""; // Clear old images

  data.images.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    galleryContainer.appendChild(img);
  });
}

// function nextImage(){
//   const total = galleries[currentGallery].images.length;
//   currentImage = (currentImage + 1) % total;
//   showImage();
// }

// function prevImage(){
//   const total = galleries[currentGallery].images.length;
//   currentImage = (currentImage - 1 + total) % total;
//   showImage();
// }

/* Filters */

const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".event-card");

filterButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filterButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card=>{
      if(filter==="all" || card.dataset.category===filter){
        card.style.display="block";
      }else{
        card.style.display="none";
      }
    });
  });
});




//Events and Performances page script
