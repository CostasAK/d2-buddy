import { day, year } from "../../constants/time";
import { forwardRef, useEffect, useState } from "react";

import Card from "../Card";
import PropTypes from "prop-types";
import { TimerCardCountdown } from "./TimerCardCountdown";
import { TimerCardDescription } from "./TimerCardDescription";
import { flexOrder } from "../../functions/flexOrder";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import { toTime } from "../../functions/toTime";

const determineNextStart = (start, end, period) => {
  let start_temp = nextTime(period, toTime(start));
  while (period && end && start_temp >= end) {
    start_temp -= period;
  }
  return start_temp;
};

export const TimerCard = forwardRef(
  ({ description, start, end, period, hasTime, ...props }, ref) => {
    const [nextEnd, setNextEnd] = useState(nextTime(period, toTime(end)));

    const [nextStart, setNextStart] = useState(
      determineNextStart(start, nextEnd, period)
    );

    useEffect(() => {
      const timer = setTimeout(() => {
        setNextEnd(nextTime(period, toTime(nextEnd)));
        setNextStart(() => {
          let start_temp = nextTime(period, toTime(nextStart));
          while (period && nextEnd && start_temp >= nextEnd) {
            start_temp -= period;
          }
          return start_temp;
        });
      }, Math.min(nextStart, nextEnd) - Date.now + 100);
      return () => clearTimeout(timer);
    }, [nextStart, nextEnd, period]);

    if (
      isPast(nextEnd) ||
      (!nextEnd && isPast(nextStart + day)) ||
      (!period && (isPast(nextEnd) || (!nextEnd && isPast(nextStart + day))))
    ) {
      return null;
    }

    return (
      <Card
        ref={ref}
        modalContent={
          <TimerCardDescription
            start={nextStart}
            end={nextEnd}
            period={period}
            description={description}
          />
        }
        style={{ order: flexOrder(nextStart, !!period ? 0 : -10 * year) }}
        highlight={isPast(nextStart)}
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
