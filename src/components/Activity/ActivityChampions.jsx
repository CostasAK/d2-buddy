import "./ActivityChampions.scss";

import DestinyIcon from "../DestinyIcon";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { forwardRef } from "react";

const known_types = [
  { class: "Overload", pattern: /Disruption|Overload/i },
  { class: "Unstoppable", pattern: /Stagger|Unstoppable/i },
  { class: "Barrier", pattern: /Shield-Piercing|Barrier/i },
];

export const ActivityChampions = forwardRef(
  ({ champions, known_champions }, ref) => {
    if (!champions || champions.length < 1) {
      return null;
    }

    const parsed_champions = new Set();

    champions.map((modifier) =>
      known_types.map(
        (champion) =>
          champion.pattern.test(modifier?.displayProperties?.description) &&
          parsed_champions.add(champion.class)
      )
    );

    return (
      <section ref={ref} className="activity-champions">
        <h5 className="heading">Champions</h5>
        <div className="champions">
          {[...parsed_champions].map((champion, index) => (
            <Tooltip key={index} title={`${champion} Champions`}>
              <div className={"champion " + champion} key={index}>
                <DestinyIcon
                  icon={["champions", "modifiers", champion]}
                  style={{
                    filter: `brightness(${known_champions[champion] && "75%"})`,
                  }}
                />
                {known_champions[champion] > 0 && (
                  <span className="champion-amount">
                    {known_champions[champion]}
                  </span>
                )}
              </div>
            </Tooltip>
          ))}
        </div>
      </section>
    );
  }
);

ActivityChampions.propTypes = {
  champions: PropTypes.array,
  known_champions: PropTypes.object,
};

ActivityChampions.defaultProps = {
  champions: [],
  known_champions: {},
};
