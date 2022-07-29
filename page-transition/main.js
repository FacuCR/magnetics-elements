function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();

  tl.set(".loading-screen", { bottom: "-100%" });

  tl.to(".loading-screen", {
    duration: 1,
    height: "100%",
    bottom: "0%",
    ease: "Power4.easeIn",
  });

  tl.to(".loading-screen__title", {
    duration: 0.5,
    opacity: 1,
    ease: "Power4.easeOut",
    delay: 0.3,
  });

  tl.to(".loading-screen", {
    duration: 1,
    height: "100%",
    bottom: "100%",
    ease: "Power4.easeOut",
    delay: 0.3,
  });

  tl.set(".loading-screen__title", { opacity: "0" });

  tl.set(".loading-screen", { bottom: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  });
}

// Animation - First Page Load
function initLoader() {
  var tl = gsap.timeline();

  tl.set(".loading-screen", { height: "100%", bottom: "0" });

  tl.to(".loading-screen", {
    duration: 1,
    height: "100%",
    bottom: "0%",
    ease: "Power4.easeIn",
  });

  tl.to(".loading-screen__title", {
    duration: 0.5,
    opacity: 1,
    ease: "Power4.easeOut",
    delay: 0.3,
  });

  tl.to(".loading-screen", {
    duration: 1,
    height: "100%",
    bottom: "100%",
    ease: "Power4.easeOut",
    delay: 0.3,
  });

  tl.set(".loading-screen__title", { opacity: "0" });

  tl.set(".loading-screen", { bottom: "-100%" });
}

function initTransition() {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          deleteNextWord();
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          initNextWord(data);
          topFunction()
          contentAnimation();
          initMagneticButtons();
        },

        async once(data) {
          initLoader();
          await delay();
          topFunction()
          contentAnimation();
        },
      },
    ],
  });
}

function initNextWord(data) {
  // update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, "text/html");
  let nextProjects = dom.querySelector(".loading-screen__title");
  document.querySelector(".loading-screen__title").innerHTML =
    nextProjects.innerHTML;
}

function deleteNextWord() {
  document.querySelector(".loading-screen__title").innerHTML = "";
}

// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the page load scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

initTransition();
