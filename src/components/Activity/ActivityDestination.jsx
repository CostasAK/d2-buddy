import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { forwardRef } from "react";
import { useQuery } from "react-query";
import DestinyIcon from "../DestinyIcon";
import Loading from "../Loading";

export const ActivityDestination = forwardRef(({ id, sx = [] }, ref) => {
  const { data, error, isLoading } = useQuery([
    "DestinyDestinationDefinition",
    id,
  ]);

  if (isLoading) {
    return (
      <Typography
        ref={ref}
        sx={[
          {
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "safe center",
            justifyContent: "flex-start",
            gap: "0.5em",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <DestinyIcon icon={["activities", "Destination"]} />
        <Loading size="inline" />
      </Typography>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Typography
      ref={ref}
      sx={[
        {
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "safe center",
          justifyContent: "flex-start",
          gap: "0.5em",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DestinyIcon icon={["activities", "Destination"]} />
      {data?.displayProperties?.name}
    </Typography>
  );
});

ActivityDestination.propTypes = {
  id: PropTypes.number,
};

ActivityDestination.defaultProps = {};
