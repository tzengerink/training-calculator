import { CalculatorSecondsFieldValue } from "../CalculatorForm/CalculatorSecondsField";
import { Mode } from "./state";

export enum ActionType {
  ChangeMode,
  ChangePowerThreshold,
  ChangePowerNormalized,
  ChangePaceThreshold,
  ChangePaceNormalized,
  ChangeHeartRateMaximum,
  ChangeHeartRateAverage,
  ChangeDurationInMinutes,
}

export type ActionPayloads = Mode | string | CalculatorSecondsFieldValue;

export interface Action<P> {
  type: ActionType;
  payload: P;
}

export const isChangeModeAction = (
  action: Action<ActionPayloads>
): action is Action<Mode> => action.type === ActionType.ChangeMode;

export const isChangeDurationAction = (
  action: Action<ActionPayloads>
): action is Action<string> =>
  action.type === ActionType.ChangeDurationInMinutes;
