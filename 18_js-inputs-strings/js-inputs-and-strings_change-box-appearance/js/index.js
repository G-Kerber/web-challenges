console.clear();

const box = document.querySelector('[data-js="box"]');
const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("input", (event) => {
  box.background = event.target.value;
});
radiusInput.addEventListener("", () => {});
rotationInput.addEventListener("", () => {});
