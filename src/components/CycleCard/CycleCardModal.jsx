import { List, ListItem, ListItemText } from "@mui/material";

import { TimerCardCountdown } from "../TimerCard";

export const CycleCardModal = ({ items }) => (
  <List sx={{ width: "max-content", marginInline: "auto" }}>
    {items?.map((item, index) => {
      return (
        <ListItem>
          <ListItemText
            selected={index === 0}
            primary={item.element}
            secondary={
              <TimerCardCountdown
                prefix={index === 0 && "Cycles"}
                timestamp={
                  index === 0 ? items?.[1]?.timestamp : item?.timestamp
                }
              />
            }
          />
        </ListItem>
      );
    })}
  </List>
);
