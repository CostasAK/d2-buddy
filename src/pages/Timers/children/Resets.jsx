import {
  dailyReset,
  weekendEnd,
  weekendStart,
  weeklyReset,
} from "constants/resets";
import { day, week } from "constants/time";

import { nextTime } from "functions/nextTime";
import { useNow } from "hooks/useNow";

export const useResets = () => {
  const now = useNow();

  return [
    {
      title: "Daily Reset",
      items: [
        {
          startTimestamp: nextTime(day, dailyReset, now) - day,
          endTimestamp: nextTime(day, dailyReset, now),
        },
        {
          startTimestamp: nextTime(day, dailyReset, now),
          endTimestamp: nextTime(day, dailyReset, now) + day,
        },
        {
          startTimestamp: nextTime(day, dailyReset, now) + day,
          endTimestamp: nextTime(day, dailyReset, now) + 2 * day,
        },
      ],
      icon: "https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",
      rotation: true,
      disabled: true,
    },
    {
      title: "Weekly Reset",
      items: [
        {
          startTimestamp: nextTime(week, weeklyReset, now) - week,
          endTimestamp: nextTime(week, weeklyReset, now),
        },
        {
          startTimestamp: nextTime(week, weeklyReset, now),
          endTimestamp: nextTime(week, weeklyReset, now) + week,
        },
        {
          startTimestamp: nextTime(week, weeklyReset, now) + week,
          endTimestamp: nextTime(week, weeklyReset, now) + 2 * week,
        },
      ],
      icon: "https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",
      rotation: true,
      disabled: true,
    },
    {
      title: "Weekend Activities",
      items: [
        {
          startTimestamp: nextTime(week, weekendStart, now) - week,
          endTimestamp: nextTime(week, weekendEnd, now),
        },
        {
          startTimestamp: nextTime(week, weekendStart, now),
          endTimestamp: nextTime(week, weekendEnd, now) + week,
        },
        {
          startTimestamp: nextTime(week, weekendStart, now) + week,
          endTimestamp: nextTime(week, weekendEnd, now) + 2 * week,
        },
      ],
      icon: "https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",
      disabled: true,
    },
  ];
};
