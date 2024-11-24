function toggle() {
  var element = document.querySelector(".nav-link");
  var cross = document.querySelector(".cross");
  var hamb_button = document.querySelector(".hamburger-menu");
  if (element.style.display === "none") {
    hamb_button.style.display = "none";
    element.style.display = "block";
    cross.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
//Use an api to find the current temperature in San Pedro Sula.

//
// Path: chamber/scripts/scroll.js
// Compare this snippet from chamber/scripts/scroll.js:
// const scrollLinks = document.querySelectorAll(".scroll");
//
