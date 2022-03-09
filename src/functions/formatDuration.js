import dayjs from "dayjs";

var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export function formatDuration(duration) {
  if (duration < 1000) {
    return "now";
  }
  return dayjs.duration(Math.max(0, duration)).humanize(true);
}
