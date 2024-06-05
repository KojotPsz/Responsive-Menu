const hamburgerButton = document.querySelector("#hamburger-icon");
const mainMenu = document.querySelector("#menu");
const closeButton = document.querySelector("#close-icon");
const menusWithSubmenu = document.querySelectorAll(
  ".main-menu__item--with-sub-menu"
);

const openMenu = () => {
  mainMenu.classList.remove("site-header--closed");
};

const closeMenu = () => {
  mainMenu.classList.add("site-header--closed");
};

const toggleSubmenu = (e) => {
  const icon = e.target.querySelector(".fa-caret");
  const submenu = e.target.parentElement.querySelector(".sub-menu");

  if (icon.classList.contains("fa-caret-down")) {
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-up");
  } else {
    icon.classList.remove("fa-caret-up");
    icon.classList.add("fa-caret-down");
  }

  submenu.classList.toggle("sub-menu--closed");
};

hamburgerButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

menusWithSubmenu.forEach((menu) => {
  menu.addEventListener("click", toggleSubmenu);
});
