export const MuiDialog = {
  styleOverrides: {
    paper: {
      backgroundImage: "none",
      backgroundColor: "rgba(4, 4, 15, 0.9)",
      "@supports (backdrop-filter: blur(16px))": {
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(4, 4, 15, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.75)",
      },
    },
  },
};
