const links = document.querySelector("links");
const linksContainer = document.querySelector(".links-container");

//set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//

//fixed NavBar
const navBar = document.getElementById("nav");
const banner = document.querySelector("banner");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
});
//

//smooth scroll
// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = navBar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     let position = element.offsetTop - navHeight;
//     const fixedNav = navBar.classList.contains("fixed-nav");
//     if (!fixedNav) {
//       position = position - navHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//   });
// });
