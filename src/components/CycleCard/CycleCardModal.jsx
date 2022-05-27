import { CurrentItem, UpcomingItems } from "./CycleCardModalStyle";

import { TimerCardCountdown } from "../TimerCard/TimerCardCountdown";

export const CycleCardModal = ({ items, nextCycle, currentItem, period }) => (
  <>
    <CurrentItem>
      {items[currentItem]}
      <TimerCardCountdown prefix={"Cycles"} timestamp={nextCycle} />
    </CurrentItem>
    <UpcomingItems>
      <h3>Upcoming</h3>
      {items.map((item, index) => {
        const shifted_index =
          (index - currentItem + items.length - 1) % items.length;
        return (
          <section
            key={index}
            style={{
              order: shifted_index,
            }}
          >
            {item}
            <TimerCardCountdown
              timestamp={nextCycle + shifted_index * period}
            />
          </section>
        );
      })}
    </UpcomingItems>
  </>
);
