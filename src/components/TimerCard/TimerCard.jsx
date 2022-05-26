import { day, minute, second, year } from "../../constants/time";
import { forwardRef, useEffect, useState } from "react";

import Card from "../Card";
import PropTypes from "prop-types";
import { TimerCardCountdown } from "./TimerCardCountdown";
import { TimerCardDescription } from "./TimerCardDescription";
import classNames from "classnames";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import { toTime } from "../../functions/toTime";

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
      }, nextTime(30 * second, 0) - Date.now());
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

    let flex_order = target_time / minute;
    if (!is_recurring) {
      flex_order -= (10 * year) / minute;
    }

    return (
      <Card
        ref={ref}
        className={classNames("timer-card", className)}
        modalContent={
          <TimerCardDescription
            start={nextStart}
            end={nextEnd}
            period={period}
            description={description}
          />
        }
        style={{ order: flex_order }}
        highlight={!!started}
        {...props}
      >
        <TimerCardCountdown
          prefix={nextStart && nextEnd && "Starts"}
          timestamp={nextStart}
          conditions="future"
        />
        <TimerCardCountdown
          prefix={nextStart && nextEnd && "Ends"}
          timestamp={nextEnd}
          conditions={["future", { timestamp: nextStart, when: "past" }]}
        />
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
