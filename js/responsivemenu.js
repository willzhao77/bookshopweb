
// function for responsive menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("myIcon");
  y.classList.toggle("change");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
