import { Badge, Box, IconButton, Tooltip } from "@mui/material";
import { useIsFetching, useQueryClient } from "react-query";

import Img from "components/Img";
import { motion } from "framer-motion";
import { updateApp } from "./updateApp";
import { useServiceWorkerStore } from "index";

export const RefreshButton = () => {
  const isFetching = useIsFetching() > 0;

  const queryClient = useQueryClient();

  const { registration, updateReady, clearUpdateReady } =
    useServiceWorkerStore();

  const handleClick = () => {
    updateApp(registration, updateReady, clearUpdateReady);

    queryClient.invalidateQueries();
  };

  return (
    <Tooltip title={updateReady ? "Update Buddy" : "Refresh Data"}>
      <Badge badgeContent=" " overlap="circular" invisible={!updateReady}>
        <IconButton onClick={handleClick}>
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
        </IconButton>
      </Badge>
    </Tooltip>
  );
};
