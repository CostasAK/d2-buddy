const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export function toNaturalLanguageTime(delta) {
  if (delta < 0) {
    return "";
  }
  let days = Math.floor(delta / day);
  if (days > 0) {
    days = Math.round(delta / day);
    return days + " day" + (days === 1 ? "" : "s");
  }

  let hours = Math.floor(delta / hour);
  if (hours > 0) {
    hours = Math.round(delta / hour);
    return hours + " hour" + (hours === 1 ? "" : "s");
  }

  let minutes = Math.floor(delta / minute);
  if (minutes > 0) {
    minutes = Math.round(delta / minute);
    return minutes + " minute" + (minutes === 1 ? "" : "s");
  }

  let seconds = Math.round(delta / second);
  return seconds + " second" + (seconds === 1 ? "" : "s");
}
