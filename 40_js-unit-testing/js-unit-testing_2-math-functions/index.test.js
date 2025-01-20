import { add, subtract, multiply, divide } from ".";

test("add two numbers when i called add", () => {
  const numbers = [2, 3];
  const result = add(numbers[0], numbers[1]);
  expect(result).toBe(5);
});

test("add a positiv and a negaitv number when i called add", () => {
  const numbers = [-2, -3];
  const result = add(numbers[0], numbers[1]);
  expect(result).toBeLessThan(0);
});

test("add two floating point number when i called add", () => {
  const numbers = [0.1, 0.2];
  const result = add(numbers[0], numbers[1]);
  expect(result).toBeCloseTo(0.3);
});

test("subtract two numbers when i called subtract", () => {
  const numbers = [15, 5];
  const result = subtract(numbers[0], numbers[1]);
  expect(result).toBe(10);
});

test("subtract two numbers when i called subtract", () => {
  const numbers = [5, 15];
  const result = subtract(numbers[0], numbers[1]);
  expect(result).toBeLessThan(0);
});

test("multiply a negativ and a positiv number when i called multiply", () => {
  const numbers = [2, 4];
  const result = multiply(numbers[0], numbers[1]);
  expect(result).toBe(8);
});

test("multiply a negativ and a positiv number when i called multiply", () => {
  const numbers = [-2, 4];
  const result = multiply(numbers[0], numbers[1]);
  expect(result).toBeLessThan(0);
});

test("multiply a negativ and a positiv number when i called multiply", () => {
  const numbers = [2, -4];
  const result = multiply(numbers[0], numbers[1]);
  expect(result).toBeLessThan(0);
});

test("multiply two negativ numbers when i called multiply", () => {
  const numbers = [-2, -4];
  const result = multiply(numbers[0], numbers[1]);
  expect(result).toBeGreaterThan(0);
});

test("divide two numbers when i called divide", () => {
  const numbers = [9, 3];
  const result = divide(numbers[0], numbers[1]);
  expect(result).toBe(3);
});

test("divide a number and a 0 when i called divide", () => {
  const numbers = [9, 0];
  const result = divide(numbers[0], numbers[1]);
  expect(result).toBe("You should not do this!");
});
