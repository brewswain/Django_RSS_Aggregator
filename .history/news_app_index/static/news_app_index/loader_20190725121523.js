window.addEventListener("load", () => {
  setInterval(() => {
    const preload = document.querySelector(".loader-container");
    preload.classList.add("preload-finish");
  }, 1000);
});
