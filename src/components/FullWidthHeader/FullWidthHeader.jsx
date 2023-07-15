import { Typography, useTheme } from "@mui/material";

import { cssRgb } from "functions/cssRgb";

export const FullWidthHeader = ({ children, sx = [], ...props }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      sx={[
        {
          clear: "both",
          marginBottom: 1,
          paddingBlock: `calc(0.2em + 0.5rem)`,
          justifyContent: "flex-start",
          width: "100%",
          textAlign: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            zIndex: -1,
            maxWidth: "none",
            top: 0,
            right: "-100vw",
            bottom: 0,
            left: "-100vw",
            backgroundColor: cssRgb(theme.palette.text.primary, 0.2),
            borderBottom: `1pt solid ${cssRgb(
              theme.palette.text.primary,
              0.9
            )}`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Typography>
  );
};
