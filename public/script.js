const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementById("navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
