const analyzeArray = (arr) => {
  let average;
  let min;
  let max;
  const length = arr.length;

  let sum = 0;
  for (const n of arr) {
    sum += n;
    if (typeof min === "undefined" || n < min) min = n;
    if (typeof max === "undefined" || n > max) max = n;
  }
  average = sum / length;

  return { average, min, max, length };
};
module.exports = analyzeArray;
