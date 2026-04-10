"use strict";

/*---------- GSAP 設定 ----------*/

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

/*---------- オープニングアニメーション ----------*/
gsap
  .timeline()
  .from(".js_opening-box", {
    duration: 3,
    autoAlpha: 0,
    y: 30,
    ease: "power2.out",
  })
  .to(".js_opening", {
    duration: 0.4,
    scale: 1.05,
    ease: "power1.out",
  })
  .to(".js_opening", {
    duration: 0.6,
    scale: 0,
    ease: "back.in(1.7)",
    onComplete() {
      body.classList.remove("is-active");
    },
  });
