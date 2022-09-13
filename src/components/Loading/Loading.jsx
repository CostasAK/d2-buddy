import { Box, Typography } from "@mui/material";

import Spinner from "react-spinkit";
import { motion } from "framer-motion";

const LoadingText = ({ fadeIn }) => (
  <>
    <Box ml="0.35em">Loading</Box>
    {"...".split("").map((char, index) => (
      <motion.div
        key={index}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: fadeIn === "none" || !fadeIn ? 0 : fadeIn,
          times: [0, (index + 1) / 4, (index + 1) / 4, 1],
        }}
      >
        {char}
      </motion.div>
    ))}
  </>
);

export const Loading = ({ size, className, fadeIn, ...props }) => (
  <Typography
    variant={size === "page" ? "h1" : size === "section" ? "h2" : "body1"}
    className={
      "loading " +
      (className ? className : "") +
      " " +
      (fadeIn === "none" || !fadeIn ? "no-fade" : "")
    }
    sx={{
      display: "flex",
      alignItems: "center",
      "> .sk-spinner": {
        width: "1em",
        height: "1em",
      },
    }}
    {...props}
  >
    {size === "page" || size === "section" ? (
      <>
        <Spinner name="cube-grid" color="inherit" fadeIn={fadeIn || "none"} />
        <LoadingText fadeIn={fadeIn} />
      </>
    ) : (
      <Box
        component={Spinner}
        color="inherit"
        fadeIn={fadeIn || "none"}
        sx={{
          display: "inline",
          width: "auto !important",
          "& > div": {
            width: "0.75em !important",
            height: "0.75em !important",
          },
        }}
      />
    )}
  </Typography>
);
