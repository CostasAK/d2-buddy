import dayjs from "dayjs";

export function formatTime(time, include_time = true) {
  if (!include_time) {
    return formatDate(time, false);
  }

  const hourParts = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
  }).formatToParts(new Date(time));

  if (hourParts.dayPeriod !== undefined) {
    return dayjs(time).format("h:mm A");
  }
  return dayjs(time).format("H:mm");
}

export function formatDate(time, include_time = true) {
  return (
    dayjs(time).format("ddd, D MMM YYYY") +
    (include_time ? " " + formatTime(time) : "")
  );
}
