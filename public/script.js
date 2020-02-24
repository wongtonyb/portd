const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementById("navbar-links");
const navLinks1 = document.getElementsByClassName("navlinks")[0];
const navLinks2 = document.getElementsByClassName("navlinks")[1];
const navLinks3 = document.getElementsByClassName("navlinks")[2];
const navLinks4 = document.getElementsByClassName("navlinks")[3];
const navLinks5 = document.getElementsByClassName("navlinks")[4];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks1.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks2.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks3.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks4.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks5.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
