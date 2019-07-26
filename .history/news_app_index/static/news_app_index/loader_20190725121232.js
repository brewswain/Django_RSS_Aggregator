const feed = document.querySelector(".wrapper");

feed.addEventListener("load", () => {
  const preload = document.querySelector(".loader-container");
  preload.classList.add("preload-finish");
});
