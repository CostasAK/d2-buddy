import "./ActivityShields.scss";

import DestinyIcon from "../DestinyIcon";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";

const known_elements = [
  { name: "Arc", pattern: /arc/i },
  { name: "Solar", pattern: /solar/i },
  { name: "Void", pattern: /void/i },
  { name: "Stasis", pattern: /stasis/i },
];

export function ActivityShields({ shields, known_shields }) {
  if (!shields || shields.length < 1) {
    return null;
  }

  const parsed_shields = new Set();

  shields.map((modifier) =>
    known_elements.map(
      (element) =>
        element.pattern.test(modifier?.displayProperties?.description) &&
        parsed_shields.add(element.name)
    )
  );

  return (
    <section className="activity-shields">
      <h5 className="heading">Shields</h5>
      <div className="shields">
        {[...parsed_shields].map((shield, index) => (
          <Tooltip contents={`${shield} Shields`} key={index}>
            <div className="shield" key={index}>
              <DestinyIcon icon={["elements", shield]} color={shield} />
              {known_shields[shield] > 0 && (
                <span className="shield-amount">{known_shields[shield]}</span>
              )}
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

ActivityShields.propTypes = {
  shields: PropTypes.array,
  known_shields: PropTypes.object,
};

ActivityShields.defaultProps = {
  shields: [],
  known_shields: {},
};
