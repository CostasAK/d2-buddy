import { ensureQueryDatabase } from "functions/ensureQueryDatabase";

export const loader = async () => await ensureQueryDatabase("links");
