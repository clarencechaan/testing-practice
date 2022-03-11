const calculator = require("../calculator");

test("add 2 + 2", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("add negative -2 + -4", () => {
  expect(calculator.add(-2, -4)).toBe(-6);
});

test("add decimal 1.1 + 2.2", () => {
  expect(calculator.add(1.1, 2.2)).toBeCloseTo(3.3);
});

test("subtract 4 - 1", () => {
  expect(calculator.subtract(4, 1)).toBe(3);
});

test("subtract negative 2 - -3", () => {
  expect(calculator.subtract(2, -3)).toBe(5);
});

test("subtract decimal 3.3 - 1.1", () => {
  expect(calculator.subtract(3.3, 1.1)).toBeCloseTo(2.2);
});

test("multiply 3 * 4", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("multiply negative -3 + -2", () => {
  expect(calculator.multiply(-3, -2)).toBe(6);
});

test("multiply decimal 5.5 * 3.2", () => {
  expect(calculator.multiply(5.5, 3.2)).toBeCloseTo(17.6);
});

test("divide 10 / 5", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("divide negative -4 / -2", () => {
  expect(calculator.divide(-4, -2)).toBe(2);
});

test("divide decimal 5.5 / 2", () => {
  expect(calculator.divide(5.5, 2)).toBeCloseTo(2.75);
});