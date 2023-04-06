// This variable keeps track of the slide index
var slideIndex = 1;

// This function is called when the user clicks the "prev" or "next" button
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This function shows the current slide and hides the others
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Hide all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}
