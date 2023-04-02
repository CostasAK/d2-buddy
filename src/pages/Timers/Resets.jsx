import {
  dailyReset,
  weekendEnd,
  weekendStart,
  weeklyReset,
} from "constants/resets";
import { day, week } from "constants/time";

import A from "components/A";
import TimerCard from "components/TimerCard";

const resets = [
  {
    title: "Daily Reset",
    start: dailyReset,
    period: day,
    icon: "https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",
  },
  {
    title: "Weekly Reset",
    start: weeklyReset,
    period: week,
    icon: "https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",
    link: "https://kyber3000.com/reset",
  },
  {
    title: "Weekend Activities",
    start: weekendStart,
    end: weekendEnd,
    period: week,
    icon: "https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",
    description: (
      <ul>
        <li>
          <A href="https://kyber3000.com/Xur">Xur</A>
        </li>
        <li>
          <A href="http://kyber3000.com/XurandTrials">Trials of Osiris</A>
        </li>
      </ul>
    ),
  },
];

export default function Resets() {
  return resets.map((card, index) => <TimerCard key={index} {...card} />);
}
