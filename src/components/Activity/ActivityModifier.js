import "./ActivityModifier.scss";

import { PropTypes } from "prop-types";
import Tooltip from "../Tooltip";

const bungie_root = "https://bungie.net";

function ActivityModifier({ data }) {
  const name = data.Response.displayProperties.name;
  const icon = data.Response.displayProperties.icon;

  const description = data.Response.displayProperties.description ? (
    <p>
      {data.Response.displayProperties.description
        .replace(/(?:[\s.,]*\n+[\s.,]*)+/g, "; ")
        .replace(/(\[Disruption|Stagger\])/g, "|$1|")
        .split("|")}
    </p>
  ) : null;

  if (!(icon && name)) {
    return null;
  }

  const known_elements = [
    { class: "arc", pattern: /arc/i },
    { class: "solar", pattern: /solar/i },
    { class: "void", pattern: /void/i },
    { class: "stasis", pattern: /stasis/i },
  ];

  return (
    <section className="activity-modifier">
      <Tooltip contents={name}>
        <img
          className={
            "icon" +
            known_elements
              .filter((element) => element.pattern.test(name))
              .reduce((prev, element) => (prev += " " + element.class), "")
          }
          src={bungie_root + icon}
          alt=""
        />
      </Tooltip>
      <div className="description">
        <h6
          className={
            "heading" +
            known_elements
              .filter((element) => element.pattern.test(name))
              .reduce((prev, element) => (prev += " " + element.class), "")
          }
        >
          {name}
        </h6>
        {description}
      </div>
    </section>
  );
}

ActivityModifier.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifier.defaultProps = {};

export default ActivityModifier;
