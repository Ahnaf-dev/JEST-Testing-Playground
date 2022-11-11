function camelCase(string) {
  let stringArray = string.split("-");

  let camelCased = stringArray
    .map((word, i) => {
      const firstWord = i === 0;

      if (firstWord) {
        return word;
      }

      const capitalizedWord = word[0].toUpperCase() + word.slice(1);
      return capitalizedWord;
    })
    .join("");

  return camelCased;
}

module.exports = camelCase;
