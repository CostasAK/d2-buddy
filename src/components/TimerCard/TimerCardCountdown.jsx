import { day, second } from "../../constants/time";
import { formatDate, formatTime } from "../../functions/formatDateTime";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { capitalizeSentence } from "../../functions/capitalizeSentence";
import { formatDuration } from "../../functions/formatDuration";
import { nextTime } from "../../functions/nextTime";

export const TimerCardCountdown = ({
  timestamp,
  hasTime,
  prefix,
  conditions,
}) => {
  const [now, setNow] = useState(Date.now());
  const [countdown, setCountdown] = useState(formatDuration(timestamp - now));

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(() => Date.now());
      setCountdown(() => formatDuration(timestamp - now));
    }, nextTime(30 * second, 0) - Date.now());
    return () => clearTimeout(timer);
  }, [now, timestamp]);

  conditions = Array.isArray(conditions) ? conditions : [conditions];

  const checkCondition = (condition) => {
    if (condition === true) return true;

    if (condition === "past") return timestamp - now < 0;

    if (condition === "future") return timestamp - now > 0;

    if (condition?.when === "past") return condition.timestamp - now < 0;

    if (condition?.when === "future") return condition.timestamp - now > 0;
  };

  if (!timestamp || !conditions.every(checkCondition)) return null;

  let absolute_time_string;
  if (Math.abs(timestamp - now) < day) {
    absolute_time_string = "at " + formatTime(timestamp, hasTime);
  } else {
    absolute_time_string = "on " + formatDate(timestamp, hasTime);
  }

  return (
    <p>
      {capitalizeSentence(
        `${prefix ? `${prefix} ` : ""}${
          countdown ? `${countdown}, ` : ""
        }${absolute_time_string}`
      )}
    </p>
  );
};

TimerCardCountdown.propTypes = {
  timestamp: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  hasTime: PropTypes.bool,
  prefix: PropTypes.string,
};

TimerCardCountdown.defaultProps = {
  hasTime: true,
  conditions: [true],
};
