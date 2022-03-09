export function nextTime(period, time, now = Date.now() + 1000) {
  if (!period || !time) {
    return time;
  }

  now += 1000 - (now % 1000);
  time -= time % 1000;

  let offset = time % period;
  let remainder = now % period || 0;
  if (remainder < offset) {
    return now - remainder + offset;
  }
  return now - remainder + offset + period;
}
