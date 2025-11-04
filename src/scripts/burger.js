const burgerMenu = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;

function menuVisibilityChanges() {
  burgerMenu.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');
  body.classList.toggle('no-scroll');
}

function handleMenuClick(event) {
  event.target.closest('li') ? menuVisibilityChanges() : '';
}

function handleDocumentClick(event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnBurger = burgerMenu.contains(event.target);
  const isClickOutside = !event.target.closest('.menu');

  if (
    menu.classList.contains('menu--active') &&
    !isClickInsideMenu &&
    !isClickOnBurger &&
    isClickOutside
  ) {
    menuVisibilityChanges();
  }
}

function attachListeners() {
  burgerMenu.addEventListener('click', menuVisibilityChanges);
  menu.addEventListener('click', handleMenuClick);
  document.addEventListener('click', handleDocumentClick);
}

function detachListeners() {
  burgerMenu.removeEventListener('click', menuVisibilityChanges);
  menu.removeEventListener('click', handleMenuClick);
  document.removeEventListener('click', handleDocumentClick);
}

function handleMediaChange(event) {
  if (event.matches) {
    attachListeners();
  } else {
    detachListeners();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const mlq = window.matchMedia('(width <= 700px)');
  mlq.addEventListener('change', handleMediaChange);
  handleMediaChange(mlq);
});
