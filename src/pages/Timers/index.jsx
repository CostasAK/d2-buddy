import AltarsOfSorrowWeapons from "./AltarsOfSorrowWeapons";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CurrentNightfall from "./CurrentNightfall";
import DungeonRotation from "pages/Timers/DungeonRotation";
import Events from "pages/Timers/Events";
import LostSectors from "pages/Timers/LostSectors";
import Page from "layout/Page";
import RaidRotation from "pages/Timers/RaidRotation";
import React from "react";
import Resets from "pages/Timers/Resets";
import Season from "./Season";
import WellspringWeapons from "./WellspringWeapons";
import { hour } from "../../constants/time";

const links = [
  {
    name: "Destiny Server and Update Status",
    link: "https://help.bungie.net/hc/en-us/articles/360049199271-Destiny-Server-and-Update-Status",
  },
  {
    name: "Bungie Maintenance Notifications",
    link: "https://twitter.com/BungieHelp",
  },
  {
    name: "Patch Notes",
    link: "https://www.bungie.net/en/Explore/Category?category=Updates",
  },
];

export default function Timers() {
  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNow(() => Date.now());
    }, hour - (now % hour));
    return () => clearTimeout(timer);
  }, [now]);

  return (
    <Page title="Timers">
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "stretch",
          justifyContent: "flex-start",
          rowGap: "7px",
          columnGap: "6px",
          "> *": {
            flex: "1 1 auto",
          },
        }}
      >
        <Events />
        {/* Loot Drops */}
        <CurrentNightfall />
        <LostSectors />
        <WellspringWeapons />
        <AltarsOfSorrowWeapons />
        {/* Bonus Rewards */}
        <DungeonRotation />
        <RaidRotation />
        {/* Seasonal */}
        <Season />
        {/* General Resets */}
        <Resets />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "stretch",
          justifyContent: "safe center",
          marginInline: "auto",
          marginTop: 4,
          gap: 2,
        }}
      >
        {links.map((link) => (
          <Button key={link.name} href={link.link} variant="destiny">
            {link.name}
          </Button>
        ))}
      </Box>
    </Page>
  );
}
