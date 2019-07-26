window.addEventListener("load", () => {
  const preload = document.querySelector(".loader-container");
  setInterval(() => {
    preload.classList.add("preload-finish");
  }, 2900);
});

function expandNavbar() {
  let navbar = document.querySelector(".navbar");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}
