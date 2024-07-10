// Your code goes here

let lightMode = document.querySelector("#lightMode");
let darkMode = document.querySelector("#darkMode");

//lightMode eventListener
lightMode.addEventListener("click", (e) => {
  e.preventDefault();

  document.body.className = "light-Mode";
  fetch("/light-mode");
});
//darkmode eventListener
darkMode.addEventListener("click", (e) => {
  e.preventDefault();

  document.body.className = "dark-Mode";
  fetch("/dark-mode");
});
