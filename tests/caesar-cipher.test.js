const caesarCipher = require("../caesar-cipher");

test("word", () => {
  expect(caesarCipher("hello")).toBe("ifmmp");
});

test("sentence", () => {
  expect(caesarCipher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("punctuation", () => {
  expect(caesarCipher("hello, world!")).toBe("ifmmp, xpsme!");
});

test("word with z", () => {
  expect(caesarCipher("zebra")).toBe("afcsb");
});

test("word with Z", () => {
  expect(caesarCipher("ZEBRA")).toBe("AFCSB");
});

test("mixed case", () => {
  expect(caesarCipher("hElLo WoRlD")).toBe("iFmMp XpSmE");
});

test("empty", () => {
  expect(caesarCipher("")).toBe("");
});
