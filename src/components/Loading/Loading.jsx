import { Box, Typography } from "@mui/material";
import { Else, If, Then } from "react-if";
import {
  FulfillingBouncingCircleSpinner,
  OrbitSpinner,
} from "react-epic-spinners";

import { motion } from "framer-motion";

const LoadingText = () => (
  <>
    <Box ml="0.35em">Loading</Box>
    {"...".split("").map((char, index) => (
      <motion.div
        key={index}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          times: [0, (index + 1) / 4, (index + 1) / 4, 1],
        }}
      >
        {char}
      </motion.div>
    ))}
  </>
);

export const Loading = ({ size, sx = [], ...props }) => (
  <Typography
    component={motion.div}
    variant={size === "page" ? "h1" : size === "section" ? "h2" : "body1"}
    sx={[
      {
        display: "flex",
        alignItems: "center",
        justifySelf: "center",
        maxHeight: "var(--vh)",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...props}
  >
    <If condition={size === "page" || size === "section"}>
      <Then>
        <FulfillingBouncingCircleSpinner />
        <LoadingText />
      </Then>
      <Else>
        <OrbitSpinner size={16} style={{ marginBlock: 4 }} />
      </Else>
    </If>
  </Typography>
);
