import dayjs from "dayjs";

export function eorzeaTime(time) {
  let eorzea_unix = (Date.now() * 1440) / 70;

  const hourParts = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
  }).formatToParts(new Date(time));

  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  if (hourParts.dayPeriod !== undefined) {
    return dayjs(eorzea_unix).utc().format("h:mm A");
  }
  return dayjs(eorzea_unix).utc().format("H:mm");
}
