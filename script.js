

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// Register locomotive scroll with ScrollTrigger
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// animation start
var tl = gsap.timeline();
tl.from(".nav", {
  y: -100,
  duration: 0.8,
  opacity: 0
});

tl.from(".text h1", {
  x: 100,
  duration: 1.2,
  opacity: 0
});

tl.from("#home .text h4, #home .text p, #home .text a", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
});

gsap.from("#about .para", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#about .para",
    scroller: ".main",
    start: "top 80%",
   
    toggleActions: "play none none reverse"
  }
});

gsap.from("#about .domain", {
  y: 80,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#about .domain",
    scroller: ".main",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from("#skills .box", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skills .box",
    scroller: ".main",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from("#projects .pj", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#projects .pj",
    scroller: ".main",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from("#contact .contact-form", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#contact .contact-form",
    scroller: ".main",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
