import { Else, If, Then, When } from "react-if";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import Img from "components/Img";
import { Link } from "react-router-dom";
import { TimerCountdown } from "../TimerCountdown";
import { isValidElement } from "react";

export const TimerList = ({ items, rotation }) => (
  <List sx={{ width: "max-content", marginInline: "auto" }}>
    {items
      ?.filter((item) => item?.startTimestamp || item?.endTimestamp)
      ?.map((item, index) => {
        return (
          <ListItem
            key={item.startTimestamp}
            button={!!item?.to}
            component={!!item?.to && Link}
            to={item?.to}
            sx={{ "*": { pointerEvents: !!item?.to && "none" } }}
          >
            <When condition={item?.icon}>
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  height: "3.75rem",
                  width: "4.75rem",
                  paddingRight: 2,
                }}
              >
                <If condition={isValidElement(item.icon)}>
                  <Then>{item.icon}</Then>
                  <Else>
                    <Img src={item.icon} />
                  </Else>
                </If>
              </ListItemIcon>
            </When>
            <ListItemText
              selected={index === 0}
              primary={item.element}
              secondary={
                <>
                  <TimerCountdown
                    prefix={["Starts", "Started"]}
                    timestamp={item?.startTimestamp}
                  />
                  <TimerCountdown
                    prefix={["Ends", "Ended"]}
                    timestamp={item?.endTimestamp}
                  />
                </>
              }
            />
          </ListItem>
        );
      })}
  </List>
);
