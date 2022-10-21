export const intensityFactor = (
  functionalThresholdPower: number,
  normalizedPower: number
): number => {
  const factor = normalizedPower / functionalThresholdPower;

  if (!isFinite(factor)) return 0;

  return factor;
};
