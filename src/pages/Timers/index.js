import React from "react";
import Card from "../../components/Card";
import TimerCard from "../../components/TimerCard";
import { getResets } from "../../functions/getResets";
import "./style.scss";

const resets = getResets();

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

  const cards = [...events, ...resets];

  return (
    <div className="TimersWrapper">
      <div className="Timers">
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
