function capitalize(string) {
  if (string === "") return "";
  return string[0].toUpperCase() + string.substr(1);
}
module.exports = capitalize;