import { baseTheme } from "theme/baseTheme";

const borderExpansion = "0.25rem";
const transitionSeconds = "0.25s";

export const MuiButton = {
  variants: [
    {
      props: { variant: "destiny" },
      style: {
        textTransform: "none",
        letterSpacing: "normal",
        margin: borderExpansion,
        padding: "0.7em 1em",
        color: baseTheme.palette.text.primary,
        background: baseTheme.palette.primary.dark,
        transitionDuration: transitionSeconds,
        transitionProperty: "background",
        "&:after": {
          content: "''",
          position: "absolute",
          inset: 0,
          border: `1px solid ${baseTheme.palette.primary.light}`,
          transitionDuration: transitionSeconds,
          transitionProperty: "inset, border-color",
          maxWidth: "none",
        },
        "&:hover, &:active": {
          color: baseTheme.palette.text.primary,
          background: baseTheme.palette.primary.main,
          "&:after": {
            inset: "-" + borderExpansion,
            border: `1px solid ${baseTheme.palette.text.primary}`,
          },
        },
      },
    },
  ],
};
