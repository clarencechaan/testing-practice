const caesarCipher = (string) => {
  let result = "";
  for (const c of string) {
    if ((c >= "a" && c < "z") || (c >= "A" && c < "Z")) {
      result += String.fromCharCode(c.charCodeAt(0) + 1);
    } else if (c === 'z') {
      result += 'a';
    } else if (c === 'Z') {
      result += 'A';
    } else {
      result += c;
    }
  }
  return result;
};
module.exports = caesarCipher;
