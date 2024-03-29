import { ActivityDifficulty, ActivityHeader, ActivityModifiers } from ".";
import { Fragment, forwardRef } from "react";

import { Box } from "@mui/material";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { useQueries } from "@tanstack/react-query";

export const Activity = forwardRef(({ id, dataArray, name }, ref) => {
  const ids = id ? [].concat(id) : [];

  let activities = useQueries({
    queries: ids?.map((id) => {
      return {
        queryKey: ["DestinyActivityDefinition", id],
        enabled: !!id,
      };
    }),
    enabled: !!ids,
  });

  if (!!id) {
    if (!activities.every((activity) => activity.isSuccess)) {
      if (activities.some((activity) => activity.isLoading))
        return (
          <Box ref={ref} sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
            <Loading size="page" fadeIn="none" />
          </Box>
        );

      activities
        .filter((activity) => activity.error)
        .map((activity) => console.error(activity.error));
      return null;
    }

    activities = activities
      .filter((activity) => activity.isSuccess)
      .map((activity) => activity.data);
  } else {
    activities = dataArray.map((x) => x.data);
  }

  activities.sort((a, b) => a?.activityLightLevel - b?.activityLightLevel);

  return (
    <Box ref={ref} sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
      <ActivityHeader data={activities[0]} name={name} />
      {activities.map((activity, index) => (
        <Fragment key={index}>
          <ActivityDifficulty data={activity} />
          <ActivityModifiers data={activity} />
        </Fragment>
      ))}
    </Box>
  );
});

Activity.propTypes = {
  id: PropTypes.number,
  dataArray: PropTypes.array,
  name: PropTypes.string,
};

Activity.defaultProps = {};
