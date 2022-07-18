initMagneticButtons();
/**
 * Magnetic Buttons
 */
function initMagneticButtons() {
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  let magnets = document.querySelectorAll(".magnetic");
  let strength = 100;

  // START : If screen is bigger as 540 px do magnetic
  if (window.innerWidth > 540) {
    // Mouse Reset
    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.parentNode.classList.remove("not-active");
      magnet.addEventListener("mouseleave", function (event) {
        gsap.to(event.currentTarget, 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        });
        gsap.to(magnet.querySelectorAll(".btn-text"), 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        });
      });
    });

    // Mouse move
    function moveMagnet(event) {
      let magnetButton = event.currentTarget;
      let bounding = magnetButton.getBoundingClientRect();
      let magnetsStrength = magnetButton.getAttribute("data-strength");
      let magnetsStrengthText = magnetButton.getAttribute("data-strength-text");

      gsap.to(magnetButton, 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut,
      });
      gsap.to(this.querySelectorAll(".btn-text"), 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrengthText,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut,
      });
    }
  } // END : If screen is bigger as 540 px do magnetic

  // Mouse Enter
  document.querySelectorAll(".btn-click.magnetic").forEach((magnet) => {
    magnet.addEventListener("mouseenter", function () {
      if (magnet.querySelectorAll(".btn-fill").length) {
        gsap.to(magnet.querySelectorAll(".btn-fill"), 0.6, {
          startAt: { y: "76%" },
          y: "0%",
          ease: Power2.easeInOut,
        });
      }
      if (magnet.querySelectorAll(".btn-text-inner.change").length) {
        gsap.to(magnet.querySelectorAll(".btn-text-inner.change"), 0.3, {
          startAt: { color: "#1C1D20" },
          color: "#FFFFFF",
          ease: Power3.easeIn,
        });
      }
      magnet.parentNode.classList.remove("not-active");
    });
  });

  // Mouse Leave
  document.querySelectorAll(".btn-click.magnetic").forEach((magnet) => {
    magnet.addEventListener("mouseleave", function () {
      if (magnet.querySelectorAll(".btn-fill").length) {
        gsap.to(
          magnet
            .querySelectorAll(".btn-fill"),
          0.6,
          {
            y: "-76%",
            ease: Power2.easeInOut,
          }
        );
      }
      if (magnet.querySelectorAll(".btn-text-inner.change").length) {
        gsap.to(magnet.querySelectorAll(".btn-text-inner.change"), 0.3, {
          color: "#1C1D20",
          ease: Power3.easeOut,
          delay: 0.3,
        });
      }
      magnet.parentNode.classList.remove("not-active");
    });
  });
}
