import { baseTheme } from "theme/baseTheme";

export const MuiDialog = {
  styleOverrides: {
    paper: {
      backgroundImage: "none",
      backgroundColor: "rgba(4, 4, 15, 0.9)",
      border: `1px solid ${baseTheme.palette.text.primary}`,
      "@supports (backdrop-filter: blur(16px))": {
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(4, 4, 15, 0.5)",
      },
    },
  },
};
