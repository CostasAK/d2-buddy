import { baseTheme } from "theme/baseTheme";
import { fontFamily3 } from "theme/typography";

export const MuiBadge = {
  styleOverrides: {
    badge: {
      fontFamily: fontFamily3,
      fontWeight: 400,
      fontSize: `${20 / 22}rem`,
      lineHeight: 1.1,
      letterSpacing: "0.01em",
      overflowWrap: "break-word",
      background: `radial-gradient(circle closest-side, ${baseTheme.palette.primary.light} 0%, rgba(0,0,0,0) 100%)`,
    },
  },
};
