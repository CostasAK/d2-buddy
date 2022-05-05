const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const month = 30 * day;
const year = 365 * day;

export function formatDuration(duration) {
  if (Math.abs(duration) < 0.75 * second) {
    return "now";
  }

  const absolute_duration = formatAbsoluteDuration(duration);

  return duration < 0 ? `${absolute_duration} ago` : `in ${absolute_duration}`;
}

export function formatAbsoluteDuration(duration) {
  const absolute_duration = Math.abs(duration);

  if (absolute_duration < 1.5 * second) {
    return "1 second";
  }

  if (absolute_duration < 45 * second) {
    return `${Math.round(absolute_duration / second)} seconds`;
  }

  if (absolute_duration < 1.5 * minute) {
    return "1 minute";
  }

  if (absolute_duration < 45 * minute) {
    return `${Math.round(absolute_duration / minute)} minutes`;
  }

  if (absolute_duration < 22 * hour) {
    return `${
      (absolute_duration % hour) / hour < 0.875
        ? Math.floor(absolute_duration / hour)
        : Math.ceil(absolute_duration / hour)
    }${
      (absolute_duration % hour) / hour < 0.125 ||
      (absolute_duration % hour) / hour >= 0.875
        ? ""
        : (absolute_duration % hour) / hour < 0.375
        ? "¼"
        : (absolute_duration % hour) / hour < 0.625
        ? "½"
        : "¾"
    } hour${absolute_duration < 1.875 * hour ? "" : "s"}`;
  }

  if (absolute_duration < 1.5 * day) {
    return "1 day";
  }

  if (absolute_duration < 26 * day) {
    return `${Math.round(absolute_duration / day)} days`;
  }

  if (absolute_duration < 46 * day) {
    return "1 month";
  }

  if (absolute_duration < 11 * month) {
    return `${Math.round(absolute_duration / month)} months`;
  }

  if (absolute_duration < 18 * month) {
    return "1 year";
  }

  return `${Math.round(absolute_duration / year)} years`;
}
