const menu = document.querySelector(`.header-menu`);
const overlayMenu = document.querySelector(`.overlay-menu`);
const itemA = document.querySelectorAll(`.item-a`);

let startTime = NaN;
const durationOpacity = 300;

const viseOverlay = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationOpacity;
  console.log(progress);
  overlayMenu.style.opacity = progress;

  if (progress < 1) {
    requestAnimationFrame(viseOverlay);
  } else {
    overlayMenu.style.opacity = 1;
  }
};

const hideOverlay = (timestamp) => {
  startTime ||= timestamp;
  const progress = (startTime - timestamp) / durationOpacity;
  console.log(progress);
  overlayMenu.style.opacity = progress;

  if (progress > 0) {
    requestAnimationFrame(hideOverlay);
  } else {
    overlayMenu.style.opacity = 0;
  }
};

menu.addEventListener(`click`, e => {
  const target = e.target;
  if (target === menu) {
    if (menu.classList.contains(`close-menu`)) {
      menu.classList.remove(`close-menu`);
      requestAnimationFrame(hideOverlay);
    } else {
      menu.classList.add(`close-menu`);
      requestAnimationFrame(viseOverlay);
    }
  }
});

overlayMenu.addEventListener(`click`, () => {
  menu.classList.remove(`close-menu`);
  requestAnimationFrame(hideOverlay);
});

itemA.forEach(elem => {
  elem.addEventListener(`click`, () => {
    menu.classList.remove(`close-menu`);
    requestAnimationFrame(hideOverlay);
  });
});

