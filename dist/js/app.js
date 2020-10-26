const mobileLinks = document.getElementById("menu-links");
const topSocialLinks = document.getElementById("top-social-links");
const burgerBtn = document.querySelector(".menu-btn");
const menuSocial = document.getElementById("menu-social");
const scrollArrows = document.querySelectorAll(".toggleMore span");
const laptopNav = document.querySelector( " nav #main-nav");
let menuOpen = false;

window.scrollTo(0, 0);


// MOBILE MENU TOGGLE
function toggleMenu() {

  if (mobileLinks.style.height === "220px") {
    mobileLinks.style.height = "0px";
    menuSocial.style.opacity = "0";

  } else {
    mobileLinks.style.height = "220px";
    menuSocial.style.opacity = "1";
  }
}

// BURGER MENU ANIMATION
burgerBtn.addEventListener("click", () => {

  if (!menuOpen) {
    burgerBtn.classList.add("open");
    menuOpen = true;
  } else {
    burgerBtn.classList.remove("open");
    menuOpen = false;
  }

  toggleMenu();
});


var x = 0;

var extraPic = document.querySelectorAll("#extra");

// GALLERY SHOW MORE FUNCTION
function showMore() {

  if (x === 0) {

    for (var i = 0; i < extraPic.length; i++) {
      extraPic[i].style.display = "block";
    }

    for (var i = 0; i < scrollArrows.length; i++) {
      scrollArrows[i].style.transform = "rotate(-135deg)";
    }

    x = 1;
  } else {

    for (var i = 0; i < extraPic.length; i++) {
      extraPic[i].style.display = "none";
    }

    for (var i = 0; i < scrollArrows.length; i++) {
      scrollArrows[i].style.transform = "rotate(45deg)";
    }

    x = 0;
  }
}








// SWIPER.JS
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// SCROLL JS
gsap.registerPlugin(ScrollTrigger);

gsap.to(".img-1", {
  scrollTrigger: {
    trigger: ".img-1",
    toggleActions: "restart none none pause",
    start: "top 50%",
    end: "+=100",
    scrub: 1
  },
  y: -80,
  duration: 2

});

gsap.to(".img-2", {
  scrollTrigger: {
    trigger: ".img-2",
    toggleActions: "restart none none pause",
    start: "top 50%",
    end: "+=100",
    scrub: 1
  },
  y: -80,
  duration: 2

});

gsap.to(".img-3", {
  scrollTrigger: {
    trigger: ".img-3",
    toggleActions: "restart none none pause",
    start: "top 50%",
    end: "+=100",
    scrub: 1
  },
  y: -80,
  duration: 2

});

gsap.to(".img-4", {
  scrollTrigger: {
    trigger: ".img-4",
    toggleActions: "restart none none pause",
    start: "top 50%",
    end: "+=100",
    scrub: 1
  },
  y: -80,
  duration: 2

});

gsap.to(".img-5", {
  scrollTrigger: {
    trigger: ".img-5",
    toggleActions: "restart none none pause",
    start: "top 50%",
    end: "+=100",
    scrub: 1
  },
  y: -80,
  duration: 2

});

gsap.to(".gallery-box", {
  scrollTrigger: {
    trigger: "#gallery",
    toggleActions: "play none none pause",
    start: "top 50%",
    end: "+=10"
  },
  scale: 1,
  duration: 1

});