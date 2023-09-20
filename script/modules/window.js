const addForm = document.querySelector(`.header__button`);
const addFormTy = document.querySelector(`.hidden__button`);
const formOverlay = document.querySelector(`.overlay-form`);

addForm.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
});

addFormTy.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
});

formOverlay.addEventListener(`click`, e => {
  const target = e.target;
  if (target === formOverlay ||
          target.classList.contains(`close-form`)) {
    formOverlay.classList.remove(`is-visible`);
  }
});
