import "./ActivityModifier.scss";

import { PropTypes } from "prop-types";

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
    { class: "Arc", pattern: /arc/i },
    { class: "Solar", pattern: /solar/i },
    { class: "Void", pattern: /void/i },
    { class: "Stasis", pattern: /stasis/i },
  ];

  return (
    <section className="ActivityModifier">
      <img
        className={
          "icon" +
          known_elements
            .filter((element) => element.pattern.test(name))
            .reduce((prev, element) => (prev += " " + element.class), "")
        }
        src={bungie_root + icon}
        alt=""
        title={name}
      />
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
