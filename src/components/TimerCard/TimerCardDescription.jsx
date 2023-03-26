import { Typography } from "@mui/material";
import { getPeriodString } from "../../functions/getPeriodString";
import { TimerCardCountdown } from "./TimerCardCountdown";

export const TimerCardDescription = ({ start, end, period, description }) => {
  return (
    <>
      <TimerCardCountdown
        prefix={start && end && ["Starts", "Started"]}
        timestamp={start}
      />
      <TimerCardCountdown
        prefix={start && end && ["Ends", "Ended"]}
        timestamp={end}
      />
      {getPeriodString(period) && <p>Period: {getPeriodString(period)}</p>}
      {description && (
        <Typography sx={{ marginTop: 2 }}>{description}</Typography>
      )}
    </>
  );
};
