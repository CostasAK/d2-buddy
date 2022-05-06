import "./style.scss";

import {
  currentDay,
  currentSeason,
  currentWeek,
  currentXur,
  nextXur,
} from "@d2api/date";

import AltarsOfSorrowWeapons from "./AltarsOfSorrowWeapons";
import Button from "../../components/Button";
import { GiClockwiseRotation } from "react-icons/gi";
import LostSectors from "./LostSectors";
import PsiOpsLegend from "./PsiOpsLegend";
import React from "react";
import TimerCard from "../../components/TimerCard";
import WellspringWeapons from "./WellspringWeapons";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

const loadResets = () => [
  {
    name: "Daily Reset",
    start: currentDay().end,
    period: day,
    icon: <GiClockwiseRotation />,
  },
  {
    name: "Weekly Reset",
    start: currentWeek().end,
    period: week,
    icon: <GiClockwiseRotation />,
    link: "https://kyber3000.com/reset",
  },
  {
    name: "Weekend Activities",
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
  {
    name: `Season ${currentSeason().seasonNumber}`,
    start: currentSeason().start,
    end: currentSeason().end,
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

export function Timers() {
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

  const cards = [...events, ...resets];

  return (
    <div className="timers-wrapper">
      <div className="timers">
        <WellspringWeapons />
        <LostSectors />
        <PsiOpsLegend />
        <AltarsOfSorrowWeapons />
        {cards.map((card) => (
          <TimerCard
            key={card.name}
            name={card.name}
            description={card.description}
            start={card.start}
            end={card.end}
            period={card.period}
            hasTime={card.hasTime}
            icon={card.icon}
            link={card.link}
          />
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
