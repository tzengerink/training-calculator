import { MINUTES_IN_AN_HOUR } from "../constants";
import { intensityFactor } from "./intensityFactor";

export const trainingStressScore = (
  functionalThresholdPaceInSeconds: number,
  normalizedPaceInSeconds: number,
  durationInMinutes: number
): number => {
  const trainingStressScore =
    ((durationInMinutes *
      functionalThresholdPaceInSeconds *
      intensityFactor(
        functionalThresholdPaceInSeconds,
        normalizedPaceInSeconds
      )) /
      (normalizedPaceInSeconds * MINUTES_IN_AN_HOUR)) *
    100;

  const rounded = Math.round(trainingStressScore);

  if (!isFinite(rounded)) return 0;

  return rounded;
};
