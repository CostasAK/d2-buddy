import "./style.scss";

import { ActivityDifficulty, ActivityHeader, ActivityModifiers } from ".";

import { Fragment } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { bungieApiNew } from "../../functions/bungieApi";
import classNames from "classnames";
import { useQueries } from "react-query";

const api_activity_path = "/Destiny2/Manifest/DestinyActivityDefinition/";

export function Activity({ id, dataArray, name }) {
  const ids = id ? [].concat(id) : [];

  let activities = useQueries(
    ids.map((id) => {
      return {
        queryKey: id,
        queryFn: () => bungieApiNew(`${api_activity_path}${id}/`),
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
      .filter((activity) => activity.isSucces)
      .map((activity) => activity.data);
  } else {
    activities = dataArray;
  }

  return (
    <article className={classNames("activity", "success")}>
      <ActivityHeader data={activities[0].data} name={name} />
      {activities.map((activity, index) => (
        <Fragment key={index}>
          <ActivityDifficulty data={activity.data} />
          <ActivityModifiers data={activity.data} />
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
