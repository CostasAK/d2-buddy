import "./style.scss";

import { formatDate, formatTime } from "../../functions/formatDateTime";
import { useEffect, useState } from "react";

import Card from "../Card";
import PropTypes from "prop-types";
import { formatDuration } from "../../functions/formatDuration";
import icons from "../../functions/icons";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import { toTime } from "../../functions/toTime";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365.25 * day;

export default function CycleCard({ name, items, start, period, type }) {
  const [nextCycle, setNextCycle] = useState(nextTime(period, toTime(start)));
  const [now, setNow] = useState(Date.now());

  function absoluteTimeString(time) {
    if (isPast(time - day)) {
      return formatTime(time);
    }
    return formatDate(time);
  }

  function timeString(time) {
    let countdown = formatDuration(time - now);
    if (isPast(time - day)) {
      return countdown + ", at " + absoluteTimeString(time);
    }
    return countdown + ", on " + absoluteTimeString(time);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(() => Date.now());
      setNextCycle(() => nextTime(period, toTime(start)));
    }, minute - (Date.now() % minute));

    return () => {
      clearTimeout(timer);
    };
  }, [start, period, nextCycle, now]);

  let flex_order = (nextCycle - 5 * year) / minute;

  let current_item_index = Math.floor((now - start) / period) % items.length;

  let short_description = (
    <>
      {items[current_item_index]}
      <br />
      {"Cycles " + timeString(nextCycle)}
    </>
  );

  let long_description = (
    <>
      <p style={{ order: -2 }}>{short_description}</p>
      <h3>Upcoming</h3>
      {items.map((item, index) => {
        const shifted_index =
          (index - current_item_index + items.length - 1) % items.length;
        return (
          <p
            style={{
              order: shifted_index,
            }}
          >
            {item}
            <br />
            {absoluteTimeString(nextCycle + (shifted_index + 1) * period)}
          </p>
        );
      })}
    </>
  );

  return (
    <Card
      className="CycleCard"
      title={name}
      icon={icons(type)}
      order={flex_order}
      shortDescription={short_description}
      longDescription={long_description}
    />
  );
}

CycleCard.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  period: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
};

CycleCard.defaultProps = {
  period: day,
};
