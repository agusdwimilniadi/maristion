$(document).ready(function () {
  var typed = new Typed(".typing-2", {
    strings: ["Beauty", "Glorious", "Greats", "Magnificent", "Marvelous"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  $(".flickity-index").flickity({
    autoPlay: true,
    prevNextButtons: false,
    pageDots: false,
  });
});

$(document).ready(function () {
  $(".flicity-stories-1").flickity({
    autoPlay: 1540,
    prevNextButtons: false,
    pageDots: false,
  });
});
$(document).ready(function () {
  $(".flicity-stories-2").flickity({
    wrapAround: 200,
    autoPlay: true,
    prevNextButtons: false,
    pageDots: false,
  });
});
$(document).ready(function () {
  $(".flicity-stories-3").flickity({
    autoPlay: 1400,
    prevNextButtons: false,
    pageDots: false,
  });
});
const nav = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) nav.style.background = "#232631";
  else nav.style.background = "transparent";
});
