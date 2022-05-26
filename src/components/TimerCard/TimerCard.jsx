import React, { forwardRef, useEffect, useState } from "react";
import { formatDate, formatTime } from "../../functions/formatDateTime";

import Card from "../Card";
import PropTypes from "prop-types";
import { capitalizeSentence } from "../../functions/capitalizeSentence";
import classNames from "classnames";
import { formatDuration } from "../../functions/formatDuration";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import parse from "html-react-parser";
import { toTime } from "../../functions/toTime";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365.25 * day;

export const TimerCard = forwardRef(
  ({ className, description, start, end, period, hasTime, ...props }, ref) => {
    const [nextEnd, setNextEnd] = useState(nextTime(period, toTime(end)));

    const [nextStart, setNextStart] = useState(() => {
      let nextStart = nextTime(period, toTime(start));
      while (period && nextEnd && nextStart > nextEnd) {
        nextStart -= period;
      }
      return nextStart;
    });

    const [now, setNow] = useState(Date.now());

    useEffect(() => {
      const timer = setTimeout(() => {
        setNextEnd(nextTime(period, toTime(nextEnd)));
        setNow(() => Date.now());
        setNextStart(() => {
          let start_temp = nextTime(period, toTime(nextStart));
          while (period && nextEnd && start_temp >= nextEnd) {
            start_temp -= period;
          }
          return start_temp;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }, [now, nextStart, nextEnd, period]);

    let is_recurring = !!period;

    let started = false;
    if (isPast(nextStart)) {
      started = true;
    }

    let ended = false;
    if (
      isPast(nextEnd) ||
      (!nextEnd && isPast(nextStart + day)) ||
      (!is_recurring &&
        (isPast(nextEnd) || (!nextEnd && isPast(nextStart + day))))
    ) {
      ended = true;
    }

    if (ended) {
      return null;
    }

    let target_time = nextStart;
    if (started && nextEnd) {
      target_time = nextEnd;
    }

    let countdown = formatDuration(target_time - now);

    let absolute_time_string;
    if (started && !nextEnd) {
      absolute_time_string = "On " + formatDate(target_time, hasTime);
    } else if (isPast(target_time - day)) {
      absolute_time_string = "at " + formatTime(target_time, hasTime);
    } else {
      absolute_time_string = "on " + formatDate(target_time, hasTime);
    }

    let flex_order = target_time / minute;
    if (!is_recurring) {
      flex_order -= (10 * year) / minute;
    }

    let long_description =
      typeof description === "string" || description instanceof String
        ? parse(description)
        : description;

    return (
      <Card
        ref={ref}
        className={classNames("timer-card", { highlight: started }, className)}
        modalContent={long_description ? long_description : undefined}
        style={{ order: flex_order }}
        {...props}
      >
        {capitalizeSentence(
          (is_recurring || !(started && !nextEnd) ? countdown + ", " : "") +
            absolute_time_string
        )}
      </Card>
    );
  }
);

TimerCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    ),
  ]),
  start: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  end: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  period: PropTypes.number,
  hasTime: PropTypes.bool,
};

TimerCard.defaultProps = {
  hasTime: true,
};
