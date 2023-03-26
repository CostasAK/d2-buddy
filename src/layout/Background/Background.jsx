import { Box } from "@mui/material";

export const Background = ({ sx = [] }) => {
  return (
    <Box
      sx={[
        {
          position: "fixed",
          top: 0,
          width: "100%",
          height: "min(100%, 100vh)",
          backgroundAttachment: "fixed",
          zIndex: -1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      style={{
        backgroundImage: `radial-gradient(circle farthest-side at ${Math.round(
          Math.random() * 100
        )}% ${Math.round(
          Math.random() * 50
        )}%, rgba(25,30,41,1) 0%, rgba(4,4,16,1) 100%)`,
        height: "min(100%, var(--vh))",
      }}
    />
  );
};
