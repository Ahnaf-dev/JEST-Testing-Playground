function camelCase(string) {
  let stringArray = string.split("-");

  let camelCased = stringArray
    .map((word, i) => {
      const firstWord = i === 0;

      if (firstWord) {
        return word;
      }

      const capitalizedWord = capitalize(word);
      return capitalizedWord;
    })
    .join("");

  return camelCased;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

module.exports = camelCase;
