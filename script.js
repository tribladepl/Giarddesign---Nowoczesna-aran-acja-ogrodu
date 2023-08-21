const searchBtn = document.querySelector(".searchBtn");
const closeBtn = document.querySelector(".closeBtn");
const searchBox = document.querySelector(".searchBox");
const linkBtn = document.querySelector(".linkBtn");
const header = document.querySelector("header");
const navigation = document.querySelector(".navigation");
const menuToggle = document.querySelector(".menuToggle");
const listaRozwijana = document.querySelector(".main-nav-list__hover");
const list = document.querySelector(".ul");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section6 = document.querySelector("#section--6");
const subBtn = document.querySelector(".sub-btn");
const section = document.querySelectorAll(".section");
const slide = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const sliderLeft = document.querySelector(".arrow--left");
const sliderRight = document.querySelector(".arrow--right");

/****************/
/****************/
/*Nawigacja*/
/****************/

searchBtn.addEventListener("click", function () {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menuToggle.classList.add("hide");
  header.classList.remove("open");
});
closeBtn.addEventListener("click", function () {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
});
menuToggle.addEventListener("click", function () {
  header.classList.toggle("open");
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
});
subBtn.addEventListener("click", function () {
  list.classList.toggle("sub--menu");
});

/****************/
/****************/
/*slider*/
/****************/
/****************/

let curSlide = 0;
const maxslide = slide.length;

const goToSlide = function (slides) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${-104 * slides}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxslide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxslide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

sliderRight.addEventListener("click", nextSlide);
sliderLeft.addEventListener("click", prevSlide);
/****************/
/****************/
/*scroll btn*/
/****************/
/****************/
btnScrollTo.addEventListener("click", function (e) {
  const s6coords = section6.getBoundingClientRect();
  section6.scrollIntoView({ behavior: "smooth" });
});
/****************/
/****************/
/*scroll page */
/****************/
/****************/
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});
/****************/
/****************/
/*gallery */
/****************/
/****************/
// Funkcja otwierająca popup
function openPopup(imageSrc) {
  document.getElementById("popupImage").src = imageSrc;
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

// Funkcja zamykająca popup
function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}
