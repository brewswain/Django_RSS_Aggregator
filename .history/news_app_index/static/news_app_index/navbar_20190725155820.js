function expandNavBar() {
  let navbar = document.querySelector(".nav-items");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}
