import "./ActivityHeader.scss";

import { ActivityDestination } from ".";
import PropTypes from "prop-types";
import getActivityType from "../../functions/getActivityType";
import getScreenshot from "../../functions/getScreenshot";

export function ActivityHeader({ data, name }) {
  name ||= data.Response.displayProperties.name;
  let type = getActivityType(data);

  if (data.Response.originalDisplayProperties.name === "Nightfall") {
    name = data.Response.originalDisplayProperties.description;
    type = "Nightfall";
  }

  const screenshot = getScreenshot(data);
  return (
    <section
      className="activity-header"
      style={{ backgroundImage: `url(${screenshot})` }}
    >
      <h5 className="activity-type">{type}</h5>
      <h1 className="activity-name">{name}</h1>
      <ActivityDestination id={data.Response.destinationHash} />
    </section>
  );
}

ActivityHeader.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
};

ActivityHeader.defaultProps = {};
