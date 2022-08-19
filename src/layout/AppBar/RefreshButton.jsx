import { Box, IconButton, Tooltip } from "@mui/material";
import { useIsFetching, useQueryClient } from "react-query";

import Img from "components/Img";
import { motion } from "framer-motion";
import { useMemo } from "react";

export const RefreshButton = () => {
  const isFetching = useIsFetching() > 0;
  const queryClient = useQueryClient();

  const Icon = useMemo(
    () => (
      <Box
        component={motion(Img)}
        src="https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg"
        sx={{
          width: "2rem",
          height: "2rem",
        }}
        animate={isFetching && { transform: "rotate(360deg)" }}
        transition={{ ease: "linear", duration: 1, repeat: Infinity }}
      />
    ),
    [isFetching]
  );

  return (
    <Tooltip title="Refresh Destiny Data">
      <IconButton onClick={() => queryClient.invalidateQueries()}>
        {Icon}
      </IconButton>
    </Tooltip>
  );
};
