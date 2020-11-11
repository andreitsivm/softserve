const burger = document.querySelector(".burger");
const dropdownMenu = document.getElementById("dropMenu");

burger.onclick = function () {
  dropdownMenu.classList.toggle("open");
};
