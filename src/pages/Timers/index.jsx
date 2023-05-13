import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import Page from "layout/Page";
import React from "react";
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
    name: "Bungie News",
    link: "https://www.bungie.net/7/en/News",
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
        {/* Current Season */}
        {/* <Season />
        <DefiantRotation />
        <NeomunaRotation /> */}
        {/* Loot Drops */}
        {/* <CurrentNightfall />
        <LostSectors /> */}
        {/* Bonus Rewards */}
        {/* <DungeonRotation />
        <RaidRotation />
        <CrucibleRotation /> */}
        {/* <Events /> */}
        {/* Past Seasons */}
        {/* Past Expansions */}
        {/* <SavathunsThroneWorldRotation />
        <EuropaRotation />
        <MoonRotation /> */}
        {/* General Resets */}
        {/* <Resets /> */}
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
          <Button
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            variant="destiny"
          >
            {link.name}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Page>
  );
}

export { Timers as Component } from "./Timers";
export { loader } from "./loader";
