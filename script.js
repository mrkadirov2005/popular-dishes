const buttonActive = document.getElementById("nav-bar-button");
const unactivatedNavBar = document.getElementById("unactivated-nav-bar");
console.log(unactivatedNavBar);

buttonActive.addEventListener("click", () => {
  unactivatedNavBar.classList.toggle("activate-nav-bar");
});

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

const fixHeader = () => {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
  // document.body.style.backgroundColor = "white";
};

window.addEventListener("scroll", fixHeader);
