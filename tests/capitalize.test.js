const capitalize = require("../capitalize");

test("word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("sentence", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("mixed case", () => {
  expect(capitalize("hElLo WoRlD")).toBe("HElLo WoRlD");
});

test("empty", () => {
  expect(capitalize("")).toBe("");
});
