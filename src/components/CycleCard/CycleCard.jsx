import { day, year } from "../../constants/time";
import { forwardRef, useEffect, useState } from "react";

import Card from "../Card";
import { CycleCardModal } from "./CycleCardModal";
import PropTypes from "prop-types";
import { TimerCardCountdown } from "../TimerCard";
import { flexOrder } from "../../functions/flexOrder";
import { nextTime } from "../../functions/nextTime";
import { toTime } from "../../functions/toTime";

export const CycleCard = forwardRef(
  ({ title, items, start, period, icon }, ref) => {
    const [nextCycle, setNextCycle] = useState(nextTime(period, toTime(start)));
    const [currentItem, setCurrentItem] = useState(
      Math.floor((Date.now() - start) / period) % items.length
    );

    useEffect(() => {
      const timer = setTimeout(() => {
        setNextCycle(nextTime(period, toTime(start)));
        setCurrentItem(
          Math.floor((Date.now() - start) / period) % items.length
        );
      }, nextCycle - Date.now());

      return () => {
        clearTimeout(timer);
      };
    }, [start, period, nextCycle, items.length]);

    return (
      <Card
        ref={ref}
        className="cycle-card"
        title={title}
        style={{ order: flexOrder(nextCycle, -5 * year) }}
        modalContent={
          <CycleCardModal
            items={items}
            nextCycle={nextCycle}
            currentItem={currentItem}
            period={period}
          />
        }
        icon={icon}
      >
        {items[currentItem]}
        <TimerCardCountdown prefix={"Cycles"} timestamp={nextCycle} />
      </Card>
    );
  }
);

CycleCard.propTypes = {
  title: PropTypes.string.isRequired,
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
