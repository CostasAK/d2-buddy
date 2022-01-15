import "./App.css";

import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React from "react";
import { getResets } from "./functions/getResets";

const resets = getResets();

async function load(url) {
  let obj = await (await fetch(url)).json();
  return obj;
}
const event_promise = load(
  "https://raw.githubusercontent.com/CostasAK/ffxiv-timers/events/event.json"
);

function App() {
  const [events, setEvents] = React.useState([]);
  event_promise.then((result) => setEvents(result));

  let cards = [...resets];

  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          {cards.map((card) => (
            <Card
              key={[card.name, card.start, card.end].join(",")}
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
