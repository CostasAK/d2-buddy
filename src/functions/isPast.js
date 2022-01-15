export function isPast(time) {
  return time && time <= Date.now();
}
