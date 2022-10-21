import {
  CalculatorSecondsField,
  CalculatorSecondsFieldValue,
} from "./CalculatorSecondsField";
import { Action, ActionType, State } from "../reducer";

export const PaceFields: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action<CalculatorSecondsFieldValue>>;
  isVisible: boolean;
}> = ({ state, dispatch, isVisible }) => {
  if (isVisible === false) return null;

  return (
    <>
      <CalculatorSecondsField
        label="Functional Threshold Pace"
        value={state.pace.thresholdInSeconds}
        onChange={(value) =>
          dispatch({
            type: ActionType.ChangePaceThreshold,
            payload: value,
          })
        }
      />
      <CalculatorSecondsField
        label="Normalized Pace"
        value={state.pace.normalizedInSeconds}
        onChange={(value) =>
          dispatch({
            type: ActionType.ChangePaceNormalized,
            payload: value,
          })
        }
      />
    </>
  );
};
