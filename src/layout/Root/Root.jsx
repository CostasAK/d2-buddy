import { Outlet, useNavigation } from "react-router-dom";

import AppBar from "layout/AppBar";
import BackToTopButton from "components/BackToTopButton";
import Background from "layout/Background";
import { Box } from "@mui/material";
import Footer from "layout/Footer";
import Loading from "components/Loading";
import { When } from "react-if";
import { motion } from "framer-motion";

const variants = {
  active: {
    filter: "none",
  },
  loading: {
    filter: "opacity(50%) saturate(50%)",
    transition: { delay: 0.25 },
  },
};

export const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation?.state === "loading";

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

      <Box
        as={motion.main}
        id="main"
        sx={{ marginBlock: 2, gridRow: 2, gridColumn: 1 }}
        variants={variants}
        animate={isLoading ? "loading" : "active"}
      >
        <Outlet />
        <BackToTopButton />
      </Box>

      <When condition={isLoading}>
        <Loading
          size="page"
          sx={{ gridRow: 2, gridColumn: 1, zIndex: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        />
      </When>

      <Footer sx={{ gridRow: 3 }} />
    </Box>
  );
};
