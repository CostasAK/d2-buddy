export const MuiLink = {
  defaultProps: {
    underline: "none",
    color: "white",
  },
  styleOverrides: {
    root: {
      color: "white",
      transition: "0.25s color",
      "&:hover, &:active": {
        color: "#bcbdbf",
      },
    },
  },
};
