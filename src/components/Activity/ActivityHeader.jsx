import "./ActivityHeader.scss";

import { ActivityDestination } from ".";
import Img from "components/Img";
import Loading from "components/Loading";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { getScreenshot } from "../../functions/getScreenshot";
import { useActivityMode } from "hooks/useActivityMode";

const ActivityMode = ({ hash }) => {
  const { activityMode, activityModeIcon, someIsLoading } =
    useActivityMode(hash);

  return (
    <h5 className="activity-type">
      <Img src={activityModeIcon} />
      {someIsLoading ? <Loading size="inline" /> : activityMode}
    </h5>
  );
};

export const ActivityHeader = forwardRef(({ data, name }, ref) => {
  name ||= data.originalDisplayProperties.name;

  if (data.originalDisplayProperties.name === "Nightfall") {
    name = data.originalDisplayProperties.description;
  }

  const screenshot = getScreenshot(data);
  return (
    <section
      ref={ref}
      className="activity-header"
      style={{ backgroundImage: `url(${screenshot})` }}
    >
      <ActivityMode hash={data?.directActivityModeHash} />
      <h1 className="activity-name">{name}</h1>
      <ActivityDestination id={data.destinationHash} />
    </section>
  );
});

ActivityHeader.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
};

ActivityHeader.defaultProps = {};
