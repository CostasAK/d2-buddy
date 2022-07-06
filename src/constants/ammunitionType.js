export const ammunitionType = [
  "None",
  "Primary",
  "Special",
  "Heavy",
  "Unknown",
].reduce(
  (previous, current, index) =>
    Object.assign(previous, { [index]: current, [current]: index }),
  {}
);
