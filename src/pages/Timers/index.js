import "./style.scss";

import {
  currentDay,
  currentSeason,
  currentWeek,
  currentXur,
  nextXur,
} from "@d2api/date";

import AltarsOfSorrowWeapons from "./AltarsOfSorrowWeapons";
import Card from "../../components/Card";
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
    type: "reset",
  },
  {
    name: "Weekly Reset",
    start: currentWeek().end,
    period: week,
    type: "reset",
  },
  {
    name: "Weekend Activities",
    start: currentXur() ? currentXur().start : nextXur().start,
    end: currentXur() ? currentXur().end : nextXur().end,
    period: week,
    type: "reset",
  },
  {
    name: `Season ${currentSeason().seasonNumber}`,
    start: currentSeason().start,
    end: currentSeason().end,
    type: "season",
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
    <div className="TimersWrapper">
      <div className="Timers">
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
            type={card.type}
          />
        ))}
      </div>
      <div className="Timers Links">
        {links.map((link) => (
          <Card key={link.name} shortDescription={link.name} link={link.link} />
        ))}
      </div>
    </div>
  );
}
