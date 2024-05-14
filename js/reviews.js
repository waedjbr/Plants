let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}

function nextSlide() {
  let slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {slideIndex = 0}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  slides[slideIndex-1].style.display = "block";
}

function prevSlide() {
  let slides = document.getElementsByClassName("slide");
  if (slideIndex <= 1) {slideIndex = slides.length + 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex--;
  slides[slideIndex-1].style.display = "block";
}
