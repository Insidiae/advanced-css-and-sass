const menuCheckbox = document.querySelector(".nav-checkbox");
const links = document.querySelectorAll(".sidebar__link");

links.forEach((link) =>
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
  })
);
