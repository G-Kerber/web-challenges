console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  let a = Number(form.numberA.value);
  let b = Number(form.numberB.value);
  let operator = form.operator.value;
  switch (operator) {
    case "addition":
      result = add(a, b);
      break;
    case "subtraction":
      result = subtract(a, b);
      break;
    case "multiplication":
      result = multiply(a, b);
      break;
    case "division":
      result = divide(a, b);
      break;
    default:
      console.log("no operation available");
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
