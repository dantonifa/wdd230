function toggle(navlink) {
  var element = document.querySelector(".nav-link");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

//
// Path: chamber/scripts/scroll.js
// Compare this snippet from chamber/scripts/scroll.js:
// const scrollLinks = document.querySelectorAll(".scroll");
//
