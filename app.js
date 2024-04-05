const burger = document.querySelector(".burger-menu");
const menuItems = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  menuItems.classList.toggle("show-menu");
});

function Counter() {
  location.href = "cart.html";
}
