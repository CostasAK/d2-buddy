import "./style.scss";

import { day, minute, year } from "../../constants/time";
import { formatDate, formatTime } from "../../functions/formatDateTime";
import { useEffect, useState } from "react";

import Card from "../Card";
import PropTypes from "prop-types";
import { formatDuration } from "../../functions/formatDuration";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import { toTime } from "../../functions/toTime";

export function CycleCard({ name, items, start, period, icon }) {
  const [now, setNow] = useState(Date.now());
  const [nextCycle, setNextCycle] = useState(nextTime(period, toTime(start)));

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(() => Date.now());
      setNextCycle(() => nextTime(period, toTime(start)));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [start, period, nextCycle, now]);

  function absoluteTimeString(time, long = false) {
    if (!long && isPast(time - day)) {
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

  let flex_order = (nextCycle - 5 * year) / minute;

  let current_item_index = Math.floor((now - start) / period) % items.length;

  let short_description = (
    <>
      {items[current_item_index]}
      {"Cycles " + timeString(nextCycle)}
    </>
  );

  let long_description = (
    <>
      <section>{short_description}</section>
      <section className="upcoming-items">
        <h3>Upcoming</h3>
        {items.map((item, index) => {
          const shifted_index =
            (index - current_item_index + items.length - 1) % items.length;
          return (
            <section
              key={index}
              style={{
                order: shifted_index,
              }}
            >
              {item}
              {absoluteTimeString(nextCycle + shifted_index * period, true)}
            </section>
          );
        })}
      </section>
    </>
  );

  return (
    <Card
      className="cycle-card"
      title={name}
      style={{ order: flex_order }}
      modalContent={long_description}
      icon={icon}
    >
      {short_description}
    </Card>
  );
}

CycleCard.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ).isRequired,
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  period: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

CycleCard.defaultProps = {
  period: day,
};
