console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const buttonAdd = document.querySelector('[data-js="add"]');
const buttonSub = document.querySelector('[data-js="subtract"]');
const buttonMulti = document.querySelector('[data-js="multiply"]');
const buttonDiv = document.querySelector('[data-js="divide"]');
const buttonExp = document.querySelector('[data-js="exponent"]');
const buttonMod = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
let result;
buttonAdd.addEventListener("click", () => {
  console.log((result = operand1 + operand2));
});
buttonSub.addEventListener("click", () => {
  console.log((result = operand1 - operand2));
});
buttonMulti.addEventListener("click", () => {
  console.log((result = operand1 * operand2));
});
buttonDiv.addEventListener("click", () => {
  console.log((result = operand1 / operand2));
});
buttonExp.addEventListener("click", () => {
  console.log((result = operand1 ** operand2));
});
buttonMod.addEventListener("click", () => {
  console.log((result = operand1 % operand2));
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const buttonAdd1 = document.querySelector('[data-js="increase-by-one"]');
const buttonAdd5 = document.querySelector('[data-js="increase-by-five"]');
const buttonSub1 = document.querySelector('[data-js="decrease-by-one"]');
const buttonSub5 = document.querySelector('[data-js="decrease-by-five"]');
const buttonMulti2 = document.querySelector('[data-js="multiply-by-two"]');
const buttonDiv2 = document.querySelector('[data-js="divide-by-two"]');

buttonAdd1.addEventListener("click", () => {
  result = operand1 += 1;
  console.log(result);
});

buttonAdd5.addEventListener("click", () => {
  result = operand1 += 5;
  console.log(result);
});

buttonSub1.addEventListener("click", () => {
  result = operand1 -= 1;
  console.log(result);
});

buttonSub5.addEventListener("click", () => {
  result = operand1 -= 5;
  console.log(result);
});

buttonMulti2.addEventListener("click", () => {
  result = operand1 *= 2;
  console.log(result);
});

buttonDiv2.addEventListener("click", () => {
  result = operand1 /= 2;
  console.log(result);
});
// --^-- write your code here --^--
