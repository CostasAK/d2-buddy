import React from "react";
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

export function Timers() {
  const [events, setEvents] = React.useState([]);
  event_promise.then((result) => setEvents(result));

  const cards = [...events, ...resets];

  return (
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
  );
}
