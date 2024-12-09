console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const SecoundInput = document.querySelector('[data-js="secound-input"]');
const switchCaseButton = document.querySelector(
  '[data-js="button-switchcase"]'
);

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  SecoundInput.value = SecoundInput.value.toLowerCase();
});

switchCaseButton.addEventListener("click", () => {
  const parttime = firstInput.value;
  firstInput.value = SecoundInput.value;
  SecoundInput.value = parttime;
});
