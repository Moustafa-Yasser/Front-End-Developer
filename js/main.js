// toggle menu list
const links = document.querySelector(".links");
links.addEventListener("click", () => links.classList.toggle("menu"));
document
  .getElementById("landing")
  .addEventListener("click", () => links.classList.remove("menu"));
// Year Dynamic in footer
const spanYear = document.querySelector(".years");
let yearNow = new Date().getFullYear();
spanYear.textContent = yearNow;

const api = "https://api.github.com/";
console.log(api);
