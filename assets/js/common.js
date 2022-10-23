let burger_icon = document.querySelector(".burger_icon");

burger_icon.addEventListener("click", (e) => {
  document.querySelector("header nav").classList.toggle("active");
});
