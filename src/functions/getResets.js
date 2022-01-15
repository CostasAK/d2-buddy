const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

export function getResets() {
  return [
    {
      name: "Weekly Reset",
      period: week,
      start: new Date("18 January 2022 17:00 UTC").getTime(),
      type: "reset",
    },
    {
      name: "Daily Reset",
      period: day,
      start: new Date("15 January 2022 17:00 UTC").getTime(),
      type: "reset",
    },
    {
      name: "Weekend Activities",
      period: week,
      start: new Date("14 January 2022 17:00 UTC").getTime(),
      end: new Date("18 January 2022 17:00 UTC").getTime(),
      type: "reset",
    },
  ];
}
