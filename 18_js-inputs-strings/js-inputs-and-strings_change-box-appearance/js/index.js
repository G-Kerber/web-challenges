console.clear();

const box = document.querySelector('[data-js="box"]');
const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("input", (event) => {
  const tempVar = event.target.value;
  box.background1 = "hsl(" + tempVar + ", 70%, 60%)";
  box.background = "hsl(${tempVar}, 70%, 60%)";
  console.log(box.background);
});

radiusInput.addEventListener("", () => {});
rotationInput.addEventListener("", () => {});
