import { CalculatorNumberField } from "./CalculatorNumberField";
import { Action, ActionType, State } from "../reducer";

export const HeartRateFields: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action<string>>;
  isVisible: boolean;
}> = ({ state, dispatch, isVisible }) => {
  if (isVisible === false) return null;

  return (
    <>
      <CalculatorNumberField
        label="Maximum Heart Rate"
        adornment="bpm"
        value={state.heartRate.maximumInBpm}
        onChange={(event) =>
          dispatch({
            type: ActionType.ChangeHeartRateMaximum,
            payload: event.target.value,
          })
        }
      />
      <CalculatorNumberField
        label="Average Heart Rate"
        adornment="bpm"
        value={state.heartRate.averageInBpm}
        onChange={(event) =>
          dispatch({
            type: ActionType.ChangeHeartRateAverage,
            payload: event.target.value,
          })
        }
      />
    </>
  );
};
