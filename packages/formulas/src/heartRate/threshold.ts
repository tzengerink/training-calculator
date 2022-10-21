const MAX_HEART_RATE_PERCENTAGE = 106;

export const threshold = (maximumHeartRate: number) => {
  return (maximumHeartRate / MAX_HEART_RATE_PERCENTAGE) * 100;
};
