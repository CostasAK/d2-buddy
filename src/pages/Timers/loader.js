import { ensureQueryDatabase } from "functions/ensureQueryDatabase";
import { timersData } from "pages/Timers/timersData";

export const loader = async () =>
  Promise.all(
    timersData.map(async (timer) => await ensureQueryDatabase(timer.sheet))
  );
