import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import A from "../A";
import Img from "../Img";
import { When } from "react-if";
import { weaponSites } from "constants/weaponSites";

export function WeaponLinks({ id: hash }) {
  const linksBackground = "rgb(0 0 0 / 50%)";
  const gap = "1rem";

  return (
    <List
      dense
      sx={{
        width: "max-content",
        backgroundImage: `linear-gradient(
            0deg,
            ${linksBackground} 0%,
            ${linksBackground} 100%
          ),
          linear-gradient(
            0deg,
            rgb(0 0 0 / 0%) 0%,
            ${linksBackground} 100%
          ),
          radial-gradient(
            farthest-side at top left,
            ${linksBackground} 0%,
            rgb(0 0 0 / 0%) 100%
          ),
          linear-gradient(
            -90deg,
            rgb(0 0 0 / 0%) 0%,
            ${linksBackground} 100%
          )`,
        backgroundSize: `calc(100% - ${gap}) calc(100% - ${gap}),
          calc(100% - ${gap}) ${gap}, ${gap} ${gap},
          ${gap} calc(100% - ${gap})`,
        backgroundPosition: "0 0, bottom left, bottom right, right top",
        backgroundRepeat: "no-repeat",
        padding: `0.25rem ${gap} ${gap} 0`,
      }}
    >
      {weaponSites.map((site) => (
        <ListItem key={site.name} sx={{ padding: 0 }}>
          <ListItemButton
            component={A}
            href={site.url + hash}
            sx={{ paddingInline: "0.5rem", gap: "0.5rem" }}
          >
            <When condition={site.icon}>
              <Img src={site.icon} height="2em" />
            </When>
            <ListItemText
              primary={site.name}
              primaryTypographyProps={{ fontStyle: "normal" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
