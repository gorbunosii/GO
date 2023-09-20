const items = document.querySelectorAll(`.questions-item`);
const buttons = document.querySelectorAll(`.button`);
const textWrapper = document.querySelectorAll(`.item__text-wrapper`);

let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener(`click`, () => {
    for (let i = items.length; i--;) {
      if (index === i) {
        textWrapper[i].style.height =
         items[i].classList.contains(`item_active`) ?
                '' : `${heightWrapper}px`;
        items[i].classList.toggle(`item_active`);
      } else {
        items[i].classList.remove(`item_active`);
        textWrapper[i].style.height = '';
      }
    }
  });
});
