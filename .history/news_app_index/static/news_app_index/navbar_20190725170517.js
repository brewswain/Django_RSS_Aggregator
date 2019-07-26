const menuSlider = document.querySelector(".menu-toggle");
const menuBars = document.querySelector(".fa-bars");
const nav = document.querySelector(".navbar");

let menuSliderToggle = function() {
  if (nav.classList.contains("nav-active")) {
    nav.classList.replace("nav-active", "nav-collapse");
  } else if (nav.classList.contains("nav-collapse")) {
    nav.classList.replace("nav-collapse", "nav-active");
  } else {
    nav.classList.toggle("nav-active");
  }
};

menuSlider.addEventListener("click", () => {
  menuSliderToggle();
  console.log("Hello");
});
