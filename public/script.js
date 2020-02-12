const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementById("navbar-links");
const navLinks = document.getElementsByClassName("navlinks")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// navLinks.addEventListener("click", () => {
//   navbarLinks.classList.toggle("active");
// });
