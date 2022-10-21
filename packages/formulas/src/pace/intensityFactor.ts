export const intensityFactor = (
  functionalThresholdPaceInSeconds: number,
  normalizedPaceInSeconds: number
): number => {
  const factor = functionalThresholdPaceInSeconds / normalizedPaceInSeconds;

  if (!isFinite(factor)) return 0;

  return factor;
};
