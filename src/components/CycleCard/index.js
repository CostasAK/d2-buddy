import "./style.scss";

import { useEffect, useState } from "react";

import Card from "../Card";
import PropTypes from "prop-types";
import { formatDuration } from "../../functions/formatDuration";
import { formatTime } from "../../functions/formatDateTime";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(() => Date.now());
      setNextCycle(() => nextTime(period, toTime(start)));
    }, minute - (Date.now() % minute));

    return () => {
      clearTimeout(timer);
    };
  }, [start, period, nextCycle, now]);

  let countdown = formatDuration(nextCycle - now);

  let absolute_time_string = formatTime(nextCycle);
  if (isPast(nextCycle - day)) {
    absolute_time_string = "at " + absolute_time_string;
  } else {
    absolute_time_string = "on " + absolute_time_string;
  }

  let short_description = (
    <>
      {items[Math.floor((now - start) / period) % items.length]}
      <br />
      {"Cycles " + countdown + ", " + absolute_time_string}
    </>
  );

  let flex_order = (nextCycle - 5 * year) / minute;

  return (
    <Card
      className="CycleCard"
      title={name}
      icon={icons(type)}
      order={flex_order}
      shortDescription={short_description}
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
