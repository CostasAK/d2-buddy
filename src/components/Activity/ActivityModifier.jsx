import "./ActivityModifier.scss";

import Img from "../Img";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

export const ActivityModifier = forwardRef(({ data }, ref) => {
  const name = data?.displayProperties?.name;
  const icon = data?.displayProperties?.icon;

  const description = data?.displayProperties?.description ? (
    <p>
      {data?.displayProperties?.description
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
    <section ref={ref} className="activity-modifier">
      <Img
        className={classNames(
          "icon",
          known_elements
            .filter((element) => element.pattern.test(name))
            .map((element) => element.class)
        )}
        src={icon}
        title={name}
      />
      <div className="description">
        <h6
          className={classNames(
            "heading",
            known_elements
              .filter((element) => element.pattern.test(name))
              .map((element) => element.class)
          )}
        >
          {name}
        </h6>
        {description}
      </div>
    </section>
  );
});

ActivityModifier.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifier.defaultProps = {};
