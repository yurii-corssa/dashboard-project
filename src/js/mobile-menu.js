import * as bodyScrollLock from "body-scroll-lock";

const refs = {
  sidebar: document.querySelector(".js-menu"),
  menuBtnOpen: document.querySelector(".js-menu-open"),
  menuBtnClose: document.querySelector(".js-menu-close"),
};

refs.menuBtnOpen.addEventListener("click", toggleMenu);
refs.menuBtnClose.addEventListener("click", toggleMenu);
refs.sidebar.addEventListener("click", closeMenu);
// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 1200px)").addEventListener("change", closeMenu);

function toggleMenu() {
  const isOpen = refs.menuBtnOpen.getAttribute("aria-expanded") === "true";

  refs.menuBtnOpen.setAttribute("aria-expanded", !isOpen);
  refs.sidebar.classList.toggle("is-open");

  const scrollLockMethod = !isOpen ? "disableBodyScroll" : "enableBodyScroll";
  bodyScrollLock[scrollLockMethod](document.body);
}

function closeMenu(e) {
  if (e.target !== refs.sidebar) return;
  if (!e.matches && e.matches !== undefined) return;

  refs.sidebar.classList.remove("is-open");
  refs.menuBtnOpen.setAttribute("aria-expanded", false);
  bodyScrollLock.enableBodyScroll(document.body);
}
