import "./style.scss";

import { currentDay, currentWeek, currentXur, nextXur } from "@d2api/date";
import { day, hour, week } from "../../constants/time";

import AltarsOfSorrowWeapons from "./AltarsOfSorrowWeapons";
import Button from "../../components/Button";
import CurrentNightfall from "./CurrentNightfall";
import { GiClockwiseRotation } from "react-icons/gi";
import LostSectors from "./LostSectors";
import PsiOpsLegend from "./PsiOpsLegend";
import React from "react";
import Season from "./Season";
import TimerCard from "../../components/TimerCard";
import WellspringWeapons from "./WellspringWeapons";

const loadResets = () => [
  {
    title: "Daily Reset",
    start: currentDay().end,
    period: day,
    icon: <GiClockwiseRotation />,
  },
  {
    title: "Weekly Reset",
    start: currentWeek().end,
    period: week,
    icon: <GiClockwiseRotation />,
    link: "https://kyber3000.com/reset",
  },
  {
    title: "Weekend Activities",
    start: currentXur() ? currentXur().start : nextXur().start,
    end: currentXur() ? currentXur().end : nextXur().end,
    period: week,
    icon: <GiClockwiseRotation />,
    description: (
      <ul>
        <li>
          <a href="https://kyber3000.com/Xur" target="_blank" rel="noreferrer">
            Xur
          </a>
        </li>
        <li>
          <a
            href="https://kyber3000.com/Trials"
            target="_blank"
            rel="noreferrer"
          >
            Trials of Osiris
          </a>
        </li>
      </ul>
    ),
  },
];

async function load(url) {
  let obj = await (await fetch(url)).json();
  return obj;
}
const event_promise = load(
  "https://raw.githubusercontent.com/CostasAK/d2-timers/events/events.json"
);

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
  const [events, setEvents] = React.useState([]);
  event_promise.then((result) => setEvents(result));

  const [resets, setResets] = React.useState(loadResets());

  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setResets(loadResets());
      setNow(() => Date.now());
    }, hour - (now % hour));
    return () => clearTimeout(timer);
  }, [now]);

  return (
    <div className="timers-wrapper">
      <div className="timers">
        <CurrentNightfall />
        <WellspringWeapons />
        <LostSectors />
        <PsiOpsLegend />
        <AltarsOfSorrowWeapons />
        <Season />
        {events.map((card, index) => (
          <TimerCard key={index} {...card} />
        ))}
        {resets.map((card, index) => (
          <TimerCard key={index} {...card} />
        ))}
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
