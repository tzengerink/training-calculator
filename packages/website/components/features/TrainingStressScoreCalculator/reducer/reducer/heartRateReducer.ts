import { intensityFactorBasedOnHeartRate } from "@training-calculator/formulas";
import { trainingStressScoreBasedOnHeartRate } from "@training-calculator/formulas";
import { Action, ActionType, Reducer, State } from "../index";

type Payload = string;

export const heartRateReducer: Reducer<Payload> = (
  state: State,
  action: Action<Payload>
): State => {
  const heartRate = { ...state.heartRate };

  switch (action.type) {
    case ActionType.ChangeHeartRateMaximum:
      heartRate.maximumInBpm = action.payload;
      break;
    case ActionType.ChangeHeartRateAverage:
      heartRate.averageInBpm = action.payload;
      break;
  }

  return {
    ...state,
    heartRate,
    intensityFactor: intensityFactorBasedOnHeartRate(
      +heartRate.maximumInBpm || 0,
      +heartRate.averageInBpm || 0
    ),
    trainingStressScore: trainingStressScoreBasedOnHeartRate(
      +heartRate.maximumInBpm || 0,
      +heartRate.averageInBpm || 0,
      +state.durationInMinutes || 0
    ),
  };
};
