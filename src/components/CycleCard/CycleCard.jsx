import { Else, If, Then } from "react-if";

import Card from "../Card";
import { CycleCardModal } from "./CycleCardModal";
import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";
import { TimerCardCountdown } from "../TimerCard";
import { forwardRef } from "react";

export const CycleCard = forwardRef(
  ({ title, items, icon, isLoading, disabled, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        title={title}
        modalContent={!isLoading && <CycleCardModal items={items} />}
        icon={icon}
        disabled={disabled || isLoading || items?.[0]?.element === "???"}
        {...props}
      >
        <If condition={isLoading || !items?.[0]?.element}>
          <Then>
            <Skeleton />
            <Skeleton />
          </Then>
          <Else>
            {items?.[0]?.element}
            <TimerCardCountdown
              prefix="Cycles"
              timestamp={items?.[0]?.endTimestamp || 0}
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
