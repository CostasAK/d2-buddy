export const cssRgb = (color, alpha = 1) => {
  const hex = color.match(/^#?((?:[a-f0-9]{3}){1,2})/i)[1];

  if (hex) {
    if (hex.length === 3)
      return `rgb(${hex
        .split("")
        .map((hex) => parseInt(hex, 16))
        .join(" ")} / ${Math.max(0, Math.min(1, alpha))}`;
    if (hex.length === 6)
      return `rgb(${hex
        .match(/../g)
        .map((hex) => parseInt(hex, 16))
        .join(" ")} / ${alpha})`;

    console.warn("could not parse color");
    return color;
  }
};
