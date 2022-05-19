import "./style.scss";

import { ActivityDifficulty, ActivityHeader, ActivityModifiers } from ".";

import { Fragment } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useQueries } from "react-query";

export function Activity({ id, dataArray, name }) {
  const ids = id ? [].concat(id) : [];

  let activities = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["DestinyActivityDefinition", id],
      };
    }),
    { enabled: !!id }
  );

  if (!!id) {
    if (!activities.every((activity) => activity.isSuccess)) {
      if (activities.some((activity) => activity.isLoading))
        return (
          <>
            <article className="activity">
              <Loading size="page" fadeIn="none" />
            </article>
          </>
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
    <article className={classNames("activity", "success")}>
      <ActivityHeader data={activities[0]} name={name} />
      {activities.map((activity, index) => (
        <Fragment key={index}>
          <ActivityDifficulty data={activity} />
          <ActivityModifiers data={activity} />
        </Fragment>
      ))}
    </article>
  );
}

Activity.propTypes = {
  id: PropTypes.number,
  dataArray: PropTypes.array,
  name: PropTypes.string,
};

Activity.defaultProps = {};
