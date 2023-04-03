import { Else, If, Then, When } from "react-if";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import Img from "components/Img";
import { TimerCardCountdown } from "../TimerCard";
import { isValidElement } from "react";

export const CycleCardModal = ({ items }) => (
  <List sx={{ width: "max-content", marginInline: "auto" }}>
    {items?.map((item, index) => {
      return (
        <ListItem>
          <When condition={item?.listIcon}>
            <ListItemIcon
              sx={{
                justifyContent: "center",
                maxHeight: "3.75rem",
                paddingRight: 2,
              }}
            >
              <If condition={isValidElement(item.listIcon)}>
                <Then>{item.listIcon}</Then>
                <Else>
                  <Img src={item.listIcon} />
                </Else>
              </If>
            </ListItemIcon>
          </When>
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
