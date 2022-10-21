import { threshold } from "./threshold";

export const intensityFactor = (
  maximumHeartRate: number,
  averageHeartRate: number
): number => {
  const factor = averageHeartRate / threshold(maximumHeartRate);

  if (!isFinite(factor)) return 0;

  return factor;
};
