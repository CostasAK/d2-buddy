import { minute } from "../constants/time";

export const flexOrder = (time, offset = 0) => {
  // Timestamp of the day Destiny 2 released
  const origin = 0; //1504648800 * 1000;

  return (time - origin + offset) / minute;
};
