import { CalculatorSecondsFieldValue } from "../CalculatorForm/CalculatorSecondsField";
import {
  Action,
  ActionPayloads,
  ActionType,
  isChangeDurationAction,
  isChangeModeAction,
} from "./action";
import { heartRateReducer } from "./reducer/heartRateReducer";
import { paceReducer } from "./reducer/paceReducer";
import { powerReducer } from "./reducer/powerReducer";
import { defaultState, Mode, State } from "./state";

export { type State, defaultState, Mode };
export { type Action, ActionType };

export type Reducer<P> = (state: State, action: Action<P>) => State;

export const reducer: Reducer<ActionPayloads> = (
  state: State,
  action: Action<ActionPayloads>
): State => {
  const newState = { ...state };

  if (isChangeModeAction(action)) newState.mode = action.payload;

  if (isChangeDurationAction(action))
    newState.durationInMinutes = action.payload;

  const modeReducers: Record<Mode, Reducer<ActionPayloads>> = {
    [Mode.Power]: powerReducer,
    [Mode.Pace]: paceReducer,
    [Mode.HeartRate]: heartRateReducer,
  };

  return modeReducers[newState.mode](newState, action);
};
