function toggle() {
  var element = document.querySelector("#menu");
  var cross = document.querySelector("#close_menu");
  var hamb_button = document.querySelector("#hamburger_menu");
  if (element.style.display === "none") {
    hamb_button.style.display = "none";
    element.style.display = "block";
    cross.style.display = "block";
  } else {
    element.style.display = "none";
    cross.style.display = "none";
    hamb_button.style.display = "block";
  }
}
