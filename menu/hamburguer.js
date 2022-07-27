/**
 * Hamburger Nav Open/Close
 */
function initHamburgerNav() {
  // Open/close navigation when clicked .btn-hamburger

  (function () {
    let hamburgerMenu = document.querySelector(".btn-hamburger");
    let mainElement = document.querySelector("main");

    hamburgerMenu.addEventListener("click", function () {
      if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        mainElement.classList.remove("nav-active");
      } else {
        hamburgerMenu.classList.add("active");
        mainElement.classList.add("nav-active");
      }
    });

    document
      .querySelector(".fixed-nav-back")
      .addEventListener("click", function () {
        hamburgerMenu.classList.remove("active");
        mainElement.classList.remove("nav-active");
      });
  })();
}

initHamburgerNav()