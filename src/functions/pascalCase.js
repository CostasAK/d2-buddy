export const pascalCase = (phrase) =>
  (" " + phrase)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
