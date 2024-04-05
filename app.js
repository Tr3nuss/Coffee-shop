const burger = document.querySelector(".burger-menu");
const burgerField = document.querySelector(".burger-field");
const closeBurgerField = document.querySelector(".close-field");

burger.addEventListener("click", () => {
  burgerField.classList.toggle("active-burger-field");
});

closeBurgerField.addEventListener("click", () => {
  burgerField.classList.remove("active-burger-field");
});

function Counter() {
  location.href = "cart.html";
}
