import { day, hour, month, week, year } from "../constants/time";

export const getPeriodString = (milliseconds) => {
  if (milliseconds === hour) return "Hourly";

  if (milliseconds === day) return "Daily";

  if (milliseconds === week) return "Weekly";

  if (milliseconds === month) return "Monrthly";

  if (milliseconds === year) return "Yearly";

  return null;
};
