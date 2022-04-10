import "./ActivityHeader.scss";

import Destination from "./Destination";
import getActivityType from "../../functions/getActivityType";
import getScreenshot from "../../functions/getScreenshot";

function ActivityHeader({ data, name }) {
  name ||= data.Response.displayProperties.name;

  const type = getActivityType(data);

  const screenshot = getScreenshot(data);
  return (
    <section
      className="ActivityHeader"
      style={{ backgroundImage: `url(${screenshot})` }}
    >
      <h5 className="ActivityType">{type}</h5>
      <h1 className="ActivityName">{name}</h1>
      <Destination id={data.Response.destinationHash} />
    </section>
  );
}

export default ActivityHeader;
