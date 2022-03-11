const analyzeArray = require("../analyze-array");

test("multiple", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("one", () => {
  expect(analyzeArray([4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 1,
  });
});

test("negatives", () => {
  expect(analyzeArray([-4, 0, 10])).toEqual({
    average: 2,
    min: -4,
    max: 10,
    length: 3,
  });
});
