import {
  intensityFactorBasedOnPace,
  trainingStressScoreBasedOnPace,
} from "@training-calculator/formulas";
import {
  CalculatorSecondsFieldValue,
  toNumberOfSeconds,
} from "../../CalculatorForm/CalculatorSecondsField";
import { Action, ActionType, Reducer, State } from "../index";

type Payload = CalculatorSecondsFieldValue;

export const paceReducer: Reducer<Payload> = (
  state: State,
  action: Action<Payload>
): State => {
  const pace = { ...state.pace };

  switch (action.type) {
    case ActionType.ChangePaceThreshold:
      pace.thresholdInSeconds = action.payload;
      break;
    case ActionType.ChangePaceNormalized:
      pace.normalizedInSeconds = action.payload;
      break;
  }

  return {
    ...state,
    pace,
    intensityFactor: intensityFactorBasedOnPace(
      toNumberOfSeconds(pace.thresholdInSeconds),
      toNumberOfSeconds(pace.normalizedInSeconds)
    ),
    trainingStressScore: trainingStressScoreBasedOnPace(
      toNumberOfSeconds(pace.thresholdInSeconds),
      toNumberOfSeconds(pace.normalizedInSeconds),
      +state.durationInMinutes || 0
    ),
  };
};
