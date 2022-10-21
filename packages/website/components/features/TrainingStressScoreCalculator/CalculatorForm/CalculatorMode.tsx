import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Action, ActionType, Mode, State } from "../reducer";

export const CalculatorMode: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action<Mode>>;
}> = ({ state, dispatch }) => {
  return (
    <ToggleButtonGroup
      exclusive
      aria-label="Mode"
      sx={{ marginBottom: 3 }}
      value={state.mode}
      onChange={(_, value) => {
        dispatch({ type: ActionType.ChangeMode, payload: +value });
      }}
    >
      <ToggleButton value={Mode.Power}>Power</ToggleButton>
      <ToggleButton value={Mode.Pace}>Pace</ToggleButton>
      <ToggleButton value={Mode.HeartRate}>Heart Rate</ToggleButton>
    </ToggleButtonGroup>
  );
};
