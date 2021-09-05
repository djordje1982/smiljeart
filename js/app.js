anime({
  targets: "#loader",
  opacity: 0,
  easing: "easeInOutQuad",
  duration: 1800,
  delay: 4500,
  zIndex: -5,
});
setTimeout(() => {
  document.getElementById("main-container").style.display = "block";
}, 4000);
anime({
  targets: "#main-container",
  opacity: 1,
  duration: 2500,
  delay: 3000,
  zIndex: 1,
});

/**** LIGHTBOX */
lightbox.option({
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  albumLabel: "Slika %1 of %2",
  resizeDuration: 500,
});

/************ */

const slike = document.querySelector(".slide1");
const ikone = document.querySelector(".slide2");
let order = 1;
let easing = "easeInQuad";
function slideS() {
  anime({
    targets: slike,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: ikone,
    opacity: 1,
    duration: 3000,
    easing: easing,
  });
  order = 2;
}
function slideI() {
  anime({
    targets: slike,
    opacity: 1,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: ikone,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  order = 1;
}

setInterval(() => {
  if (order === 1) {
    slideS();
  } else {
    slideI();
  }
}, 6500);

const strelica = document.getElementById("dole-str");
strelica.addEventListener("click", () => {
  document.querySelector("#dole-str").scrollIntoView({
    behavior: "smooth",
  });
});

/*--------------------- ANIMACIJA NAVIGACIJE ---------------------*/

// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   burger.addEventListener("click", () => {
//     // Toggle nav
//     nav.classList.toggle("nav-active");
//     // Animate links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 1
//         }s`;
//       }
//     });
//     // Burger animation
//     burger.classList.toggle("toggle");
//   });
// };

// navSlide();

/*------------------------- ANIMACIJA DUGMETA -------------------------*/

/*-------------------------Prva varijanta (Djole)-------------------------*/
/*
const dugme1 = document.getElementById("button1");

dugme1.addEventListener("click", () => {
  const dugme2 = document.getElementById("button2");
  const dugme3 = document.getElementById("button3");
  const position1 = dugme1.offsetTop;
  const position2 = dugme2.offsetTop;

  const duration = 250;
  if (position1 === position2) {
    const anim = anime({
      targets: [dugme2, dugme3],
      top: 50,
      duration: duration,
      easing: "easeInSine",
    });
    anim.finished.then(() => {
      anime({
        targets: dugme3,
        top: 100,
        duration: duration,
        easing: "easeInSine",
      });
    });
  } else {
    const anim = anime({
      targets: dugme3,
      top: 50,
      duration: duration,
      easing: "easeInSine",
    });
    anim.finished.then(() => {
      anime({
        targets: [dugme2, dugme3],
        top: 0,
        duration: duration,
        easing: "easeInSine",
      });
    });
*/

/*-------------------------Druga varijanta (Janko-neuspesna)-------------------------*/
/*
const dugme1 = document.getElementById("button1");

dugme1.addEventListener("click", (e) => {
  const dugme2 = document.getElementById("button2");
  const dugme3 = document.getElementById("button3");
  const position1 = dugme1.offsetTop;
  const position2 = dugme2.offsetTop;

  const duration = 700;
  if (position1 === position2) {
    const anim = anime({
      targets: dugme2,
      keyframes: [{ translateY: 50 }, { translateX: -100 }],
      duration: duration,
      easing: "easeOutExpo",
    });
    anim.finished.then((e) => {
      anime({
        targets: dugme3,
        keyframes: [{ translateY: 50 }, { translateX: 100 }],
        duration: duration,
        easing: "easeOutExpo",
      });
    });
  } else {
    const anim = anime({
      targets: dugme2,
      keyframes: [{ translateY: -50 }, { translateX: 100 }],
      duration: duration,
      easing: "easeOutExpo",
    });
    anim.finished.then(() => {
      anime({
        targets: dugme3,
        keyframes: [{ translateY: -50 }, { translateX: -100 }],
        duration: duration,
        easing: "easeOutExpo",
      });
    });
  }
  console.log(e.target);
});
*/
/*-------------------------Treca varijanta (Janko)-------------------------*/

// document.getElementById("btn-g").addEventListener("click", toggleDivs);

// function toggleDivs() {
//   var btn = document.getElementById("btn-g");
//   var btn1 = document.getElementById("btn-s");
//   var btn2 = document.getElementById("btn-i");

//   if (btn.style.display == "block") {
//     btn1.style.display = "none";
//     btn2.style.display = "none";
//   } else {
//     btn.style.display = "none";
//     btn1.style.display = "block";
//     btn2.style.display = "block";
//   }
// }

function otvoriHome() {
  homeW.style.display = "block";
  homeW.scrollIntoView({
    behavior: "smooth",
  });
  anime({
    targets: homeW,
    opacity: 1,
    zIndex: 2,
    duration: trans,
    easing: easing,
  });
  let animacija1 = anime({
    targets: slikeW,
    opacity: 0,
    zIndex: -2,
    duration: trans,
    easing: easing,
  });
  animacija1.finished.then(() => {
    slikeW.style.display = "none";
  });
  let animacija2 = anime({
    targets: ikoneW,
    opacity: 0,
    zIndex: -2,
    duration: trans,
    easing: easing,
  });
  animacija2.finished.then(() => {
    ikoneW.style.display = "none";
  });
}

function otvoriSlike() {
  slikeW.style.display = "block";
  slikeW.scrollIntoView({
    behavior: "smooth",
  });
  anime({
    targets: slikeW,
    opacity: 1,
    zIndex: 2,
    duration: trans,
    easing: easing,
  });
  let animacija1 = anime({
    targets: homeW,
    opacity: 0,
    zIndex: -2,
    duration: trans,
    easing: easing,
  });
  animacija1.finished.then(() => {
    homeW.style.display = "none";
  });
  let animacija2 = anime({
    targets: ikoneW,
    opacity: 0,
    zIndex: -2,
    duration: trans,
    easing: easing,
  });
  animacija2.finished.then(() => {
    ikoneW.style.display = "none";
  });
}

function otvoriIkone() {
  ikoneW.style.display = "block";
  ikoneW.scrollIntoView({
    behavior: "smooth",
  });
  anime({
    targets: ikoneW,
    opacity: 1,
    zIndex: 2,
    duration: trans,
    easing: easing,
  });

  let animacija1 = anime({
    targets: homeW,
    opacity: 0,
    zIndex: -2,
    duration: trans,
    easing: easing,
  });
  animacija1.finished.then(() => {
    homeW.style.display = "none";
  });
  let animacija2 = anime({
    targets: slikeW,
    opacity: 0,
    zIndex: -2,
    duration: trans,
    easing: easing,
  });
  animacija2.finished.then(() => {
    slikeW.style.display = "none";
  });
}

const homeW = document.getElementById("homeW");
const slikeW = document.getElementById("slikeW");
const ikoneW = document.getElementById("ikoneW");

let trans = 1300;

/* naslovna */
const homeBtn1 = document.getElementById("homeBtn1");
const slikeBtn1 = document.getElementById("slikeBtn1");
const ikoneBtn1 = document.getElementById("ikoneBtn1");

homeBtn1.addEventListener("click", () => {});
slikeBtn1.addEventListener("click", () => {
  otvoriSlike();
});
ikoneBtn1.addEventListener("click", () => {
  otvoriIkone();
});

/************************ SLIKE */

const homeBtn2 = document.getElementById("homeBtn2");
const slikeBtn2 = document.getElementById("slikeBtn2");
const ikoneBtn2 = document.getElementById("ikoneBtn2");

homeBtn2.addEventListener("click", () => {
  otvoriHome();
});
slikeBtn2.addEventListener("click", () => {});
ikoneBtn2.addEventListener("click", () => {
  otvoriIkone();
});

/************************ IKONE */

const homeBtn3 = document.getElementById("homeBtn3");
const slikeBtn3 = document.getElementById("slikeBtn3");
const ikoneBtn3 = document.getElementById("ikoneBtn3");

homeBtn3.addEventListener("click", () => {
  otvoriHome();
});
slikeBtn3.addEventListener("click", () => {
  otvoriSlike();
});
ikoneBtn3.addEventListener("click", () => {});

/************************* SLIDER */

const slikeSLideBtn = document.getElementById("slikeSLideBtn");
const ikoneSLideBtn = document.getElementById("ikoneSLideBtn");

slikeSLideBtn.addEventListener("click", () => {
  otvoriSlike();
});

ikoneSLideBtn.addEventListener("click", () => {
  otvoriIkone();
});

const logoBtn1 = document.getElementById("logobtn1");
const logoBtn2 = document.getElementById("logobtn2");
const logoBtn3 = document.getElementById("logobtn3");

logoBtn1.addEventListener("click", () => {
  otvoriHome();
});

logoBtn2.addEventListener("click", () => {
  otvoriHome();
});

logoBtn3.addEventListener("click", () => {
  otvoriHome();
});

/********HEADER *******/

const meni = document.getElementById("burger-oko");
const menu = document.getElementById("menu");
meni.addEventListener("click", () => {
  meni.classList.toggle("open");
  if (meni.classList.contains("open")) {
    menu.style.display = "block";
    anime({
      targets: menu,
      right: 0,
      easing: "easeInOutQuad",
      duration: 750,
    });
  } else {
    const animation = anime({
      targets: menu,
      right: "-80vw",
      easing: "easeInOutQuad",
      duration: 750,
    });
    animation.finished.then(function () {
      menu.style.display = "none";
    });
  }
});
document.addEventListener("click", (e) => {
  console.log(e.target);
});

const menuHome1 = document.getElementById("menuHome1");
const menuSlike1 = document.getElementById("menuSlike1");
const menuIkone1 = document.getElementById("menuIkone1");

menuHome1.addEventListener("click", () => {
  otvoriHome();
  anime({
    targets: menu,
    right: "-80vw",
    easing: "easeInOutQuad",
    duration: 750,
  });
  meni.classList.remove("open");
});
menuSlike1.addEventListener("click", () => {
  otvoriSlike();
  anime({
    targets: menu,
    right: "-80vw",
    easing: "easeInOutQuad",
    duration: 750,
  });
  meni.classList.remove("open");
});
menuIkone1.addEventListener("click", () => {
  otvoriIkone();
  anime({
    targets: menu,
    right: "-80vw",
    easing: "easeInOutQuad",
    duration: 750,
  });
  meni.classList.remove("open");
});
