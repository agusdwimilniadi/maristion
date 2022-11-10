$(document).ready(function () {
  var typed = new Typed(".typing-2", {
    strings: ["Beauty", "Glorious", "Greats", "Magnificent", "Marvelous"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

const nav = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) nav.style.background = "#232631";
  else nav.style.background = "transparent";
});
