// script for auto slideshow
var slideIndex = 1;
var myTimer;
var changetime=2000;
window.addEventListener("load", function() {
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, changetime);
})


function plusSlides(n){
  clearInterval(myTimer);
  if(n < 0 ){
    showSlides(slideIndex -= 1);
    } else {
    showSlides(slideIndex += 1);
    }

  if( n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, changetime);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, changetime);
  }
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1 ){
    slideIndex = slides.length;
  }
  for (i =0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className +=" active";

}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, changetime);
  showSlides(slideIndex = n);
}
