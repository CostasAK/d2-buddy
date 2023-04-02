import { cssRgb } from "../../functions/cssRgb";
import { fontFamily3 } from "theme/typography";

export const MuiTooltip = {
  defaultProps: {
    title: "",
    followCursor: true,
    PopperProps: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  },
  styleOverrides: {
    tooltip: ({ ownerState }) => ({
      borderRadius: 0,
      backgroundImage: "none",
      backgroundColor: ownerState?.bgcolor
        ? cssRgb(ownerState?.bgcolor, 0.9)
        : "rgba(52, 52, 62, 0.9)",
      "@supports (backdrop-filter: blur(16px))": {
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: ownerState?.tooltipcolor
          ? cssRgb(ownerState?.tooltipcolor, 0.5)
          : "rgba(52, 52, 62, 0.5)",
      },
      fontFamily: fontFamily3,
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.1,
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      overflowWrap: "break-word",
      padding: "0.5em 1em",
    }),
  },
};
