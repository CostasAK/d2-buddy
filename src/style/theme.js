import { pxToRem } from "../functions/pxToRem";

export const theme = {
  lengths: {
    margin: "2rem",
    gap: "1rem",
    pad: "0.5rem",
    expansion: "0.25rem",
    cardGap: `${pxToRem(7)} ${pxToRem(6)}`,
  },
  text: {
    lineHeight: 1.5,
  },
  transition: {
    duration: "0.25s",
    shortDuration: "0.125s",
    longDuration: "1.5s",
  },
  colors: {
    primary: {
      foreground: "#f5f5f5",
      background: "#040410",
    },
    header: {
      foreground: "#f2f2f2",
      background: "#12171c",
    },
    footer: {
      foreground: "#f5f5f5",
      background: "#141a1f",
    },
    navigation: {
      foreground: "#ffffff",
      background: "#42413e",
    },
    heading: "#ffffff",
    highlight: {
      yellow: {
        dim: "#9d7c2a",
        mid: "#b68b25",
        bright: "#ffce1f",
      },
      red: "#623235",
      green: {
        dim: "#4b4220",
        mid: "#549b63",
        bright: "#e3d487",
      },
    },
    elements: {
      arc: "#7aecf3",
      solar: "#f46d25",
      void: "#986eb4",
      stasis: "#406ad4",
    },
    rarity: {
      common: "#356e41",
      rare: "#5176a4",
      legendary: "#4d3262",
      exotic: "#ccab33",
    },
  },
  shadows: {
    box: "0 0 10px rgb(0 0 0 / 50%)",
  },
  fonts: {
    primary:
      'neue-haas-grotesk-display, neue-haas-grotesk-text, "Helvetica Neue", helvetica, arial, sans-serif',
    secondary: "arial, sans-serif",
  },
};
