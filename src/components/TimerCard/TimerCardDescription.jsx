import { StyledDescription } from "./TimerCardDescriptionStyle";
import { TimerCardCountdown } from "./TimerCardCountdown";
import { getPeriodString } from "../../functions/getPeriodString";

export const TimerCardDescription = ({ start, end, period, description }) => {
  return (
    <>
      <TimerCardCountdown prefix={start && end && "Starts"} timestamp={start} />
      <TimerCardCountdown prefix={start && end && "Ends"} timestamp={end} />
      {getPeriodString(period) && <p>Period: {getPeriodString(period)}</p>}
      {description && <StyledDescription>{description}</StyledDescription>}
    </>
  );
};
