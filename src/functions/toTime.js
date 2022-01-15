export function toTime(time) {
  if (time) {
    return new Date(time).getTime();
  }
  return false;
}
