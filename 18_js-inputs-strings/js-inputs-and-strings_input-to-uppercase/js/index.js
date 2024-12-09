console.clear();

const input = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  const inputUppercase = input.value.toUpperCase();
  input.value = inputUppercase;
});
