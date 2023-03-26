import { Box, Typography, useTheme } from "@mui/material";

import Img from "components/Img";
import Loading from "components/Loading";
import { useActivityMode } from "hooks/useActivityMode";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { ActivityDestination } from ".";
import { getScreenshot } from "../../functions/getScreenshot";

const ActivityMode = ({ hash }) => {
  const { activityMode, activityModeIcon, someIsLoading } =
    useActivityMode(hash);

  return (
    <Typography
      variant="h5"
      className="activity-type"
      sx={{
        opacity: 0.75,
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-start",
        gap: 1,
      }}
    >
      <Img src={activityModeIcon} sx={{ height: "2.71rem", width: "auto" }} />
      {someIsLoading ? <Loading size="inline" /> : activityMode}
    </Typography>
  );
};

export const ActivityHeader = forwardRef(({ data, name }, ref) => {
  const theme = useTheme();

  name ||= data.originalDisplayProperties.name;

  if (data.originalDisplayProperties.name === "Nightfall") {
    name = data.originalDisplayProperties.description;
  }

  const screenshot = getScreenshot(data);
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-end",
        alignItems: "flexStart",
        textShadow: `1px 1px 0.25em ${theme.palette.background.default}, 1px -1px 0.25em ${theme.palette.background.default},
    -1px 1px 0.25em ${theme.palette.background.default}, -1px -1px 0.25em ${theme.palette.background.default}`,
        paddingBottom: 2,
        minHeight: 27,
        height: "fit-content",
        width: "100%",
        position: "relative",
        "&:before": {
          content: "''",
          position: "absolute",
          zIndex: -1,
          backgroundImage: `url(${screenshot})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: "-1.25rem",
          right: "-1.5rem",
          bottom: 0,
          left: "-1.5rem",
          maxWidth: "none",
        },
      }}
    >
      <ActivityMode hash={data?.directActivityModeHash} />
      <Typography
        variant="h1"
        sx={{ borderTop: "1pt solid rgb(255 255 255 / 50%)" }}
      >
        {name}
      </Typography>
      <ActivityDestination id={data.destinationHash} sx={{ opacity: 0.75 }} />
    </Box>
  );
});

ActivityHeader.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
};

ActivityHeader.defaultProps = {};
