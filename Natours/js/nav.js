const body = document.querySelector("body");
const menuCheckbox = document.querySelector(".navigation__checkbox");
const links = document.querySelectorAll(".navigation__link");

menuCheckbox.addEventListener("change", function() {
  if (this.checked) {
    body.classList.add("u-hide-overflow-y");
  } else {
    body.classList.remove("u-hide-overflow-y");
  }
});

links.forEach(link =>
  link.addEventListener("click", () => {
    body.classList.remove("u-hide-overflow-y");
    menuCheckbox.checked = false;
  })
);
