const reverseString = require("../reverse-string");

test("word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("sentence", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("empty", () => {
  expect(reverseString("")).toBe("");
});
