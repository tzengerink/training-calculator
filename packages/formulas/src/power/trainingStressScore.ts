import { MINUTES_IN_AN_HOUR } from "../constants";
import { intensityFactor } from "./intensityFactor";

export const trainingStressScore = (
  functionalThresholdPower: number,
  normalizedPower: number,
  durationInMinutes: number
): number => {
  const trainingStressScore =
    ((durationInMinutes *
      normalizedPower *
      intensityFactor(functionalThresholdPower, normalizedPower)) /
      (functionalThresholdPower * MINUTES_IN_AN_HOUR)) *
    100;

  const rounded = Math.round(trainingStressScore);

  if (!isFinite(rounded)) return 0;

  return rounded;
};
