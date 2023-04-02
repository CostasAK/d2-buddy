export const dateToTimestamp = (date, UTCHours = 17) =>
  new Date(date).setUTCHours(UTCHours);
