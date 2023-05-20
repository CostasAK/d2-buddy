import { Else, If, Then } from "react-if";

import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";
import { TimerCountdown } from "../TimerCountdown";
import { TriumphButton } from "components/TriumphButton";
import { forwardRef } from "react";
import { useIsPast } from "hooks/useIsPast";

export const TimerButton = forwardRef(
  ({ title, items, icon, isLoading, disabled, rotation, ...props }, ref) => {
    const started = useIsPast(items?.[0]?.startTimestamp);

    return (
      <TriumphButton
        ref={ref}
        title={title}
        icon={icon}
        disabled={
          disabled ||
          isLoading ||
          items?.[0]?.element === "???" ||
          !items?.[0]?.element
        }
        highlight={!rotation && started}
        {...props}
      >
        <If condition={isLoading}>
          <Then>
            <Skeleton />
            <Skeleton />
          </Then>
          <Else>
            {items?.[0]?.element}
            <TimerCountdown
              prefix={["Starts", "Started"]}
              timestamp={items?.[0]?.startTimestamp || 0}
              conditions={"future"}
            />
            <TimerCountdown
              prefix={rotation ? "Cycles" : "Ends"}
              timestamp={items?.[0]?.endTimestamp || 0}
              conditions={{
                timestamp: items?.[0]?.startTimestamp,
                when: "past",
              }}
            />
          </Else>
        </If>
      </TriumphButton>
    );
  }
);

TimerButton.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object])
  ),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isLoading: PropTypes.bool,
};
