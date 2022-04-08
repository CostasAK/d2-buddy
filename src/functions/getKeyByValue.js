const getKeyByValue = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

export default getKeyByValue;
