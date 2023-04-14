import { Box, Typography } from "@mui/material";
import { useQueries, useQuery } from "@tanstack/react-query";

import Activity from ".";
import Loading from "../Loading";
import { PropTypes } from "prop-types";
import { useActivityMode } from "hooks/useActivityMode";

const activity_type = "DestinyActivityDefinition";

export function LostSector({ name }) {
  const {
    data: search_data,
    error: search_error,
    isLoading: search_isLoading,
  } = useQuery(["Search", activity_type, name]);

  const search_results = search_data?.results?.results || [];

  const lost_sectors = useQueries({
    queries: search_results?.map((result) => ({
      queryKey: [activity_type, result.hash],
      enabled: !!result?.hash,
    })),
    enabled: !!search_results,
  });

  const activityModeHashes = lost_sectors.map(
    (sector) => sector?.data?.directActivityModeHash
  );

  const { activityMode, someIsLoading: activityModeIsLoading } =
    useActivityMode(activityModeHashes);

  if (
    search_isLoading ||
    lost_sectors.some((sector) => sector.isLoading) ||
    activityModeIsLoading
  ) {
    return (
      <Box sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
        <Loading size="page" fadeIn="none" />
      </Box>
    );
  }

  if (search_error || lost_sectors.some((sector) => sector.error)) {
    search_error && console.error(search_error);
    lost_sectors.map((sector) => sector.error && console.error(sector.error));

    return (
      <Box sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
        <Typography
          variant="h2"
          sx={{ margin: 4, display: "flex", flexFlow: "row wrap", gap: 2 }}
        >
          Can't find Lost Sector info...
        </Typography>
      </Box>
    );
  }

  const filtered_sectors = lost_sectors.filter(
    (sector, index) =>
      activityMode[index] === "Lost Sector" &&
      sector.data.displayProperties.name.startsWith(name + ": ") &&
      sector.data.index ===
        lost_sectors.reduce(
          (highestIndex, current) =>
            current.data.displayProperties.name ===
            sector.data.displayProperties.name
              ? Math.max(highestIndex, current.data.index)
              : highestIndex,
          0
        )
  );

  if (filtered_sectors.length === 0) {
    return (
      <Box sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
        <Typography
          variant="h2"
          sx={{ margin: 4, display: "flex", flexFlow: "row wrap", gap: 2 }}
        >
          Can't find Lost Sector info...
        </Typography>
      </Box>
    );
  }

  return <Activity dataArray={filtered_sectors} />;
}

LostSector.propTypes = {
  name: PropTypes.string.isRequired,
};
