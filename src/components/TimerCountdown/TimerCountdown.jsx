import { formatDate, formatTime } from "../../functions/formatDateTime";
import { forwardRef, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { capitalizeSentence } from "../../functions/capitalizeSentence";
import { day } from "../../constants/time";
import { formatDuration } from "../../functions/formatDuration";
import { isPast } from "../../functions/isPast";
import { useNow } from "hooks/useNow";

export const TimerCountdown = forwardRef(
  ({ timestamp, hasTime, prefix, conditions, sx }, ref) => {
    const now = useNow();

    const [countdown, setCountdown] = useState(formatDuration(timestamp - now));

    useEffect(() => {
      setCountdown(formatDuration(timestamp - now));
    }, [timestamp, now]);

    conditions = Array.isArray(conditions) ? conditions : [conditions];

    const checkCondition = (condition) => {
      if (condition === true) return true;

      if (condition === "past") return isPast(timestamp, now);

      if (condition === "future") return !isPast(timestamp, now);

      if (condition?.when === "past") return isPast(condition.timestamp, now);

      if (condition?.when === "future")
        return !isPast(condition.timestamp, now);
    };

    if (!timestamp || !conditions.every(checkCondition)) return null;

    let absolute_time_string;
    if (Math.abs(timestamp - now) < day) {
      absolute_time_string = "at " + formatTime(timestamp, hasTime);
    } else {
      absolute_time_string = "on " + formatDate(timestamp, hasTime);
    }

    return (
      <Typography variant="body2" ref={ref} sx={sx}>
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
      </Typography>
    );
  }
);

TimerCountdown.propTypes = {
  timestamp: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([false]),
  ]),
  hasTime: PropTypes.bool,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([false]),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

TimerCountdown.defaultProps = {
  hasTime: true,
  conditions: [true],
};
