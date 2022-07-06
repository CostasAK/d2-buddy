import "./style.scss";

import AltarsOfSorrowWeapons from "./AltarsOfSorrowWeapons";
import Button from "../../components/Button";
import CurrentNightfall from "./CurrentNightfall";
import DungeonRotation from "pages/Timers/DungeonRotation";
import LostSectors from "./LostSectors";
import PsiOpsLegend from "./PsiOpsLegend";
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
    <div className="timers-wrapper">
      <h1>Timers</h1>
      <div className="timers">
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
        <PsiOpsLegend />
        {/* General Resets */}
        <Resets />
      </div>
      <div className="links">
        {links.map((link) => (
          <Button key={link.name} href={link.link}>
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
