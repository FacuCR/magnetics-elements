const select = (e) => document.querySelector(e);

/**
 * Hamburger Nav Open/Close
 */
function initHamburgerNav() {
  // Open/close navigation when clicked .btn-hamburger

  (function () {
    let hamburgerMenu = select(".btn-hamburger");
    let mainElement = select("main");

    hamburgerMenu.addEventListener("click", function () {
      if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        mainElement.classList.remove("nav-active");
      } else {
        hamburgerMenu.classList.add("active");
        mainElement.classList.add("nav-active");
      }
    });

    select(".fixed-nav-back").addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      mainElement.classList.remove("nav-active");
    });
  })();
}

/**
 * Scrolltrigger Scroll Check
 */
function initScrolltriggerNav() {
  // https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
  // When the user scrolls down 80px from the top of the document
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      select("main").classList.add("scrolled");
    } else {
      select("main").classList.remove("scrolled");
    }
  }
}

initHamburgerNav();
initScrolltriggerNav();
