import {
  dailyReset,
  weekendEnd,
  weekendStart,
  weeklyReset,
} from "constants/resets";
import { day, week } from "constants/time";

import TimerCard from "components/TimerCard";

const resets = [
  {
    title: "Daily Reset",
    start: dailyReset,
    period: day,
  },
  {
    title: "Weekly Reset",
    start: weeklyReset,
    period: week,
  },
  {
    title: "Weekend Activities",
    start: weekendStart,
    end: weekendEnd,
    period: week,
  },
];

export default function Resets() {
  return resets.map((card, index) => (
    <TimerCard
      key={index}
      disabled
      icon="https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg"
      {...card}
    />
  ));
}
