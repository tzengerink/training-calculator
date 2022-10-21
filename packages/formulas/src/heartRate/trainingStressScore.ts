import { MINUTES_IN_AN_HOUR } from "../constants";
import { intensityFactor } from "./intensityFactor";
import { threshold } from "./threshold";

export const trainingStressScore = (
  maximumHeartRate: number,
  averageHeartRate: number,
  durationInMinutes: number
): number => {
  const trainingStressScore =
    ((durationInMinutes *
      averageHeartRate *
      intensityFactor(maximumHeartRate, averageHeartRate)) /
      (threshold(maximumHeartRate) * MINUTES_IN_AN_HOUR)) *
    100;

  const rounded = Math.round(trainingStressScore);

  if (!isFinite(rounded)) return 0;

  return rounded;
};
