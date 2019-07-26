const feed = document.querySelector(".feed");

feed.addEventListener("load", () => {
  const preload = document.querySelector(".loader-container");
  preload.classList.add("preload-finish");
});
