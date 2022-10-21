import { CalculatorNumberField } from "./CalculatorNumberField";
import { Action, ActionType, State } from "../reducer";

export const PowerFields: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action<string>>;
  isVisible: boolean;
}> = ({ state, dispatch, isVisible }) => {
  if (isVisible === false) return null;

  return (
    <>
      <CalculatorNumberField
        label="Functional Threshold Power"
        adornment="watts"
        value={state.power.thresholdInWatts}
        onChange={(event) =>
          dispatch({
            type: ActionType.ChangePowerThreshold,
            payload: event.target.value,
          })
        }
      />
      <CalculatorNumberField
        label="Normalized Power"
        adornment="watts"
        value={state.power.normalizedInWatts}
        onChange={(event) =>
          dispatch({
            type: ActionType.ChangePowerNormalized,
            payload: event.target.value,
          })
        }
      />
    </>
  );
};
