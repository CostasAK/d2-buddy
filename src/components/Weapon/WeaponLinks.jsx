import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

import { weaponSites } from "constants/weaponSites";
import { When } from "react-if";
import A from "../A";
import Img from "../Img";

export function WeaponLinks({ hash }) {
  return (
    <Paper
      sx={{
        float: "right",
        marginLeft: 4,
        marginBottom: 2,
      }}
    >
      <List dense>
        {weaponSites.map((site) => (
          <ListItem key={site.name}>
            <ListItemButton component={A} href={site.url + hash}>
              <When condition={site.icon}>
                <ListItemIcon
                  sx={{
                    height: "1.75em",
                  }}
                >
                  <Img src={site.icon} />
                </ListItemIcon>
              </When>
              <ListItemText
                primary={site.name}
                primaryTypographyProps={{
                  fontStyle: "normal",
                  fontSize: "0.875rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
