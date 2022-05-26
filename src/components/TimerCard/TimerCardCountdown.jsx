import { day, second } from "../../constants/time";
import { formatDate, formatTime } from "../../functions/formatDateTime";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { capitalizeSentence } from "../../functions/capitalizeSentence";
import { formatDuration } from "../../functions/formatDuration";
import { isPast } from "../../functions/isPast";
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

    if (condition === "past") return isPast(timestamp);

    if (condition === "future") return !isPast(timestamp);

    if (condition?.when === "past") return isPast(condition.timestamp);

    if (condition?.when === "future") return !isPast(condition.timestamp);
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
        `${
          prefix
            ? `${
                Array.isArray(prefix)
                  ? isPast(timestamp)
                    ? prefix[1]
                    : prefix[0]
                  : prefix
              } `
            : ""
        }${countdown ? `${countdown}, ` : ""}${absolute_time_string}`
      )}
    </p>
  );
};

TimerCardCountdown.propTypes = {
  timestamp: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([false]),
  ]),
  hasTime: PropTypes.bool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])]),
};

TimerCardCountdown.defaultProps = {
  hasTime: true,
  conditions: [true],
};
