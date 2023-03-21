import { Box, Typography } from "@mui/material";

import { getPeriodString } from "../../functions/getPeriodString";
import { TimerCardCountdown } from "../TimerCard";

export const CycleCardModal = ({ items, nextCycle, currentItem, period }) => (
  <>
    <Typography>Period: {getPeriodString(period)}</Typography>
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        alignItems: "safe center",
        textAlign: "center",
        margin: "auto",
        marginTop: 2,
      }}
    >
      <Typography>{items[currentItem]}</Typography>
      <TimerCardCountdown prefix="Cycles" timestamp={nextCycle} />
    </Box>
    {items.length > 1 && (
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "flex-start",
          alignItems: "safe center",
          textAlign: "center",
          margin: "auto",
          marginTop: 1,
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{ margin: "auto", marginTop: 2, order: -1 }}
        >
          Upcoming
        </Typography>
        {items.map((item, index) => {
          const shifted_index =
            (index - currentItem + items.length - 1) % items.length;
          return (
            <Box
              key={index}
              style={{
                order: shifted_index,
              }}
            >
              <Typography>{item}</Typography>
              <TimerCardCountdown
                timestamp={nextCycle + shifted_index * period}
              />
            </Box>
          );
        })}
      </Box>
    )}
  </>
);
