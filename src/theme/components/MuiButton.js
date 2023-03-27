import { keyframes } from "@mui/system";
import { cssRgb } from "functions/cssRgb";
import { baseTheme } from "theme/baseTheme";
import { fontFamily2 } from "theme/typography";

const borderExpansion = "0.25rem";
const transitionSeconds = "0.25s";

const borderAnimation = keyframes`
  42% {
    inset: initial;
  },
  43% {
    inset: -9px;
    opacity: 0;
  },
  100% {
    inset: -5px;
    opacity: 0.9;
  }`;

export const MuiButton = {
  variants: [
    {
      props: { variant: "footer" },
      style: {
        paddingInline: "1rem",
        fontSize: "0.875rem",
        fontFamily: fontFamily2,
        letterSpacing: "normal",
        borderRadius: "5px",
      },
    },
    {
      props: { variant: "destiny" },
      style: {
        letterSpacing: "normal",
        fontFamily: fontFamily2,
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
    {
      props: { variant: "triumph" },
      style: {
        textAlign: "left",
        "--card-content-opacity": 0.9,
        position: "relative",
        border:
          "1px solid " +
          cssRgb(baseTheme.palette.text.primary, "var(--card-content-opacity)"),
        color: baseTheme.palette.text.primary,
        transitionDuration: baseTheme.transitions.duration.shortest,
        transitionProperty: "border-color, transform",
        "&::before": {
          content: "''",
          zIndex: -1,
          position: "absolute",
          inset: 0,
          backgroundImage: "none",
          backgroundColor: "rgba(4, 4, 15, 0.5)",
          "@supports (backdrop-filter: blur(16px))": {
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(4, 4, 15, 0.5)",
          },
          transition:
            "background-color " + baseTheme.transitions.duration.standard,
        },
        userSelect: "none",
        cursor: "pointer",
        "*": {
          pointerEvents: "none",
        },
        ">*": {
          opacity: "var(--card-content-opacity)",
          transitionDuration: baseTheme.transitions.duration.standard,
          transitionProperty: "opacity",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          maxWidth: "none",
          inset: 0,
          border: "2px solid " + baseTheme.palette.text.primary,
          opacity: 0,
        },
        "&:hover,&:active": {
          "--card-content-opacity": 1,
          color: baseTheme.palette.text.primary,
          background: "none",
          borderColor: baseTheme.palette.text.primary,
          "&::before": {
            backgroundColor: cssRgb(baseTheme.palette.text.primary, 0.2),
          },
          "&::after": {
            animation: `${borderAnimation} ${(0.25 * 7) / 6}s both`,
          },
        },
        "&:active": {
          transform: "scale3d(0.99, 0.99, 1)",
        },
      },
    },
  ],
};
