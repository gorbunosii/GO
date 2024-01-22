const inputTel = document.querySelector(`.input-form-tell`);
const telMask = new Inputmask(`+7 (999)-999-99-99`);

telMask.mask(inputTel);

const justValidate = new JustValidate('.formTell');
justValidate.addField(`.input-form-name`, [
  {
    rule: `required`,
    errorMessage: `Укажите ваше имя`,
  },
  {
    rule: `minLength`,
    value: 2,
    errorMessage: `Не короче 2 символов`,
  },
])
    .addField(`.input-form-tell`, [
      {
        rule: `required`,
        errorMessage: `Укажите ваш телефон`,
      },
      {
        validator(value) {
          const phone = inputTel.inputmask.unmaskedvalue();
          return !!(Number(phone) && phone.length === 10);
        },
        errorMessage: `Телефон не корректный`,
      },
    ]);
