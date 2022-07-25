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

  tl.to(".loading-screen", {
    duration: 1,
    height: "100%",
    bottom: "100%",
    ease: "Power4.easeOut",
    delay: 0.3,
  });
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
          contentAnimation();
          initMagneticButtons();
        },

        async once(data) {
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

initTransition();
