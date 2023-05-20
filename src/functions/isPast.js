export function isPast(time, now) {
  now ||= Date.now();
  return time && time <= now;
}
