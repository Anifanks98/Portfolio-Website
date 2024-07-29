function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

gsap.from(".section-container", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".section-container",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".about-details-container", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about-details-container",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".experience-details-container", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".experience-details-container",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});
