import {
  intensityFactorBasedOnPower,
  trainingStressScoreBasedOnPower,
} from "@training-calculator/formulas";
import { Action, ActionType, Reducer, State } from "../index";

type Payload = string;

export const powerReducer: Reducer<Payload> = (
  state: State,
  action: Action<Payload>
): State => {
  const power = { ...state.power };

  switch (action.type) {
    case ActionType.ChangePowerThreshold:
      power.thresholdInWatts = action.payload;
      break;
    case ActionType.ChangePowerNormalized:
      power.normalizedInWatts = action.payload;
      break;
  }

  return {
    ...state,
    power,
    intensityFactor: intensityFactorBasedOnPower(
      +power.thresholdInWatts || 0,
      +power.normalizedInWatts || 0
    ),
    trainingStressScore: trainingStressScoreBasedOnPower(
      +power.thresholdInWatts || 0,
      +power.normalizedInWatts || 0,
      +state.durationInMinutes || 0
    ),
  };
};
