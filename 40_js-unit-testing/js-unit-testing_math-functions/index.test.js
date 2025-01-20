import { add, subtract, multiply, divide } from ".";

test("adds two number when called function add()", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("adds two number when called function add()", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("adds two floating point number when called function add()", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("subractration of two number when called function subtract()", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10;
});
