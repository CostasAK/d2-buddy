import "./ActivityHeader.scss";

import { ActivityDestination } from ".";
import Loading from "components/Loading";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { getScreenshot } from "../../functions/getScreenshot";
import { useActivityMode } from "hooks/useActivityMode";

export const ActivityHeader = forwardRef(({ data, name }, ref) => {
  name ||= data.originalDisplayProperties.name;

  const { activityMode, someIsLoading: modeIsLoading } = useActivityMode(
    data?.directActivityModeHash
  );

  const type = modeIsLoading ? <Loading size="inline" /> : activityMode;

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
      <h5 className="activity-type">{type}</h5>
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
