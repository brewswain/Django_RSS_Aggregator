window.addEventListener("load", () => {
  const preload = document.querySelector(".loader-container");
  setInterval(() => {
    preload.classList.add("preload-finish");
  }, 2900);
});

function myFunction() {
  var x = document.querySelector(".navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
