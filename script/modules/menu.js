const menu = document.querySelector(`.header-menu`);
const overlayMenu = document.querySelector(`.overlay-menu`);
const itemA = document.querySelectorAll(`.item-a`);

menu.addEventListener(`click`, e => {
  const target = e.target;
  if (target === menu) {
    menu.classList.toggle(`close-menu`);
    overlayMenu.classList.toggle(`is-visible`);
  }
});

overlayMenu.addEventListener(`click`, () => {
  menu.classList.remove(`close-menu`);
  overlayMenu.classList.remove(`is-visible`);
});

itemA.forEach(elem => {
  elem.addEventListener(`click`, () => {
    menu.classList.remove(`close-menu`);
    overlayMenu.classList.remove(`is-visible`);
  });
});

