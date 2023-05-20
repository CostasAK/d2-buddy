import { Badge, Box, IconButton, Tooltip } from "@mui/material";

import { useQueryClient } from "@tanstack/react-query";
import Img from "components/Img";
import { updateApp } from "components/RefreshButton/updateApp";
import { useTransformRotate } from "components/RefreshButton/useTransformRotate";
import { motion } from "framer-motion";
import { useDailyResetRefetch } from "hooks/useDailyResetRefetch";
import useLocalStorageState from "use-local-storage-state";

export const RefreshButton = () => {
  useDailyResetRefetch();

  const [updateReady] = useLocalStorageState("updateReady", {
    defaultValue: true,
  });
  const queryClient = useQueryClient();

  const transform = useTransformRotate();

  const handleClick = () => {
    updateApp();

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
            style={{ transform }}
          />
        </IconButton>
      </Badge>
    </Tooltip>
  );
};
