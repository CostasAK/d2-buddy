import { Else, If, Then } from "react-if";
import { forwardRef, useEffect, useState } from "react";
import { minute, year } from "../../constants/time";

import Card from "../Card";
import { CycleCardModal } from "./CycleCardModal";
import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";
import { TimerCardCountdown } from "../TimerCard";
import { flexOrder } from "../../functions/flexOrder";
import { slicePastItems } from "components/CycleCard/slicePastItems";
import { trimFutureItems } from "components/CycleCard/trimFutureItems";

export const CycleCard = forwardRef(
  ({ title, items, icon, isLoading }, ref) => {
    const [futureItems, setFutureItems] = useState(
      trimFutureItems(slicePastItems(items))
    );

    useEffect(() => {
      const timer = setTimeout(() => {
        setFutureItems(trimFutureItems(slicePastItems(items)));
      }, Math.min(5 * minute, futureItems?.[1]?.timestamp - Date.now()));

      return () => {
        clearTimeout(timer);
      };
    }, [futureItems, items]);

    return (
      <Card
        ref={ref}
        title={title}
        style={{ order: flexOrder(futureItems?.[1]?.timestamp, -5 * year) }}
        modalContent={!isLoading && <CycleCardModal items={futureItems} />}
        icon={icon}
      >
        <If condition={isLoading || !futureItems?.[0]?.element}>
          <Then>
            <Skeleton />
            <Skeleton />
          </Then>
          <Else>
            {futureItems?.[0]?.element}
            <TimerCardCountdown
              prefix="Cycles"
              timestamp={futureItems?.[1]?.timestamp || 0}
            />
          </Else>
        </If>
      </Card>
    );
  }
);

CycleCard.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object])
  ),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isLoading: PropTypes.bool,
};
