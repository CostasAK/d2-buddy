import AppBar from "layout/AppBar";
import BackToTopButton from "components/BackToTopButton";
import Background from "layout/Background";
import { Box } from "@mui/material";
import Footer from "layout/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        alignItems: "stretch",
      }}
    >
      <Background />
      <AppBar />

      <Box as="main" id="main" sx={{ marginBlock: 2, gridRow: 2 }}>
        <Outlet />
        <BackToTopButton />
      </Box>

      <Footer sx={{ gridRow: 3 }} />
    </Box>
  );
};
