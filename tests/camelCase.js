function camelCase(string) {
  let stringArray = string.split("-");
  let camelCased = stringArray
    .map((word, i) => {
      if (i === 0) {
        return word;
      }

      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");

  return camelCased;
}

module.exports = camelCase;
