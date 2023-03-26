export const cssRgb = (color, alpha = 1) => {
  if (color === "transparent") return color;

  const hex = color.match(/^#?((?:[a-f0-9]{3}){1,2})/i)?.[1];
  const rgbHsl = color
    .match(
      /(rgb|hsl)a?\(([0-9]{1,3}(?:\.[0-9]{1,3})?), ([0-9]{1,3}(?:\.[0-9]{1,3})?%?), ([0-9]{1,3}(?:\.[0-9]{1,3})?%?)(?:, [01]?\.[0-9]{1,})?\)/i
    )
    ?.slice(1);

  if (hex) {
    if (hex.length === 3)
      return `rgb(${hex
        .split("")
        .map((hex) => parseInt(hex + hex, 16))
        .join(" ")} / ${Math.max(0, Math.min(1, alpha))})`;
    if (hex.length === 6)
      return `rgb(${hex
        .match(/../g)
        .map((hex) => parseInt(hex, 16))
        .join(" ")} / ${alpha})`;

    console.warn("could not parse color");
    return color;
  }

  if (rgbHsl) {
    return `${rgbHsl[0]}a(${rgbHsl.slice(1).join(", ")}, ${alpha})`;
  }

  console.warn("could not parse color");
  return color;
};
