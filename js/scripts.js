document.addEventListener("DOMContentLoaded", function () {
  console.log("Dom Loaded");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    console.log("Hamburger", hamburger);
    console.log("NavMenu", navMenu);
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("hamburger-active");
  });
});
