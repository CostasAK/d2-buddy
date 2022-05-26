import "./ActivityHeader.scss";

import { ActivityDestination } from ".";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import getActivityType from "../../functions/getActivityType";
import { getScreenshot } from "../../functions/getScreenshot";

export const ActivityHeader = forwardRef(({ data, name }, ref) => {
  name ||= data.displayProperties.name;
  let type = getActivityType(data);

  if (data.originalDisplayProperties.name === "Nightfall") {
    name = data.originalDisplayProperties.description;
    type = "Nightfall";
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
