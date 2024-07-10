// Your code goes here
document.body.className = document.cookie.split("=")[1];

let lightMode = document.querySelector("#lightMode");
let darkMode = document.querySelector("#darkMode");

//lightMode eventListener
lightMode.addEventListener("click", async (e) => {
  //e.preventDefault();
  await fetch("/light-mode");
  document.body.className = document.cookie.split("=")[1];
});
//darkmode eventListener
darkMode.addEventListener("click", async (e) => {
  //e.preventDefault();
  await fetch("/dark-mode");
  document.body.className = document.cookie.split("=")[1];
});
