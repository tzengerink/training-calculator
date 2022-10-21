import { Card, CardContent, CardHeader } from "@mui/material";
import { Action, ActionType, Mode, State } from "../reducer";
import { ActionPayloads } from "../reducer/action";
import { CalculatorMode } from "./CalculatorMode";
import { CalculatorNumberField } from "./CalculatorNumberField";
import { HeartRateFields } from "./HeartRateFields";
import { PaceFields } from "./PaceFields";
import { PowerFields } from "./PowerFields";

export const CalculatorForm: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action<ActionPayloads>>;
}> = ({ state, dispatch }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader title="Training Stress Score" />
      <CardContent>
        <CalculatorMode state={state} dispatch={dispatch} />
        <CalculatorNumberField
          label="Duration"
          adornment="min"
          value={state.durationInMinutes}
          onChange={(event) =>
            dispatch({
              type: ActionType.ChangeDurationInMinutes,
              payload: event.target.value,
            })
          }
        />
        <PowerFields
          state={state}
          dispatch={dispatch}
          isVisible={state.mode === Mode.Power}
        />
        <PaceFields
          state={state}
          dispatch={dispatch}
          isVisible={state.mode === Mode.Pace}
        />
        <HeartRateFields
          state={state}
          dispatch={dispatch}
          isVisible={state.mode === Mode.HeartRate}
        />
      </CardContent>
    </Card>
  );
};
