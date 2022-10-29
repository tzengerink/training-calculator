import { Box, TextField, TextFieldProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { SECONDS_IN_A_MINUTE } from "@training-calculator/formulas";
import moment, { duration, Moment } from "moment";

export type CalculatorSecondsFieldValue = Moment | null;

interface Props {
  label: React.ReactNode;
  value: CalculatorSecondsFieldValue;
  onChange: (value: CalculatorSecondsFieldValue) => void;
}

const epoch = (): Moment => moment(0);

const toSecondsSinceEpoch = (
  value: CalculatorSecondsFieldValue
): CalculatorSecondsFieldValue => {
  if (!value || !value.isValid()) return value;
  const seconds = value.seconds() + value.minutes() * SECONDS_IN_A_MINUTE;
  return epoch().add(seconds, "seconds");
};

export const toNumberOfSeconds = (
  value: CalculatorSecondsFieldValue
): number => {
  if (!value || !value.isValid()) return 0;
  return duration(value.diff(epoch())).asSeconds();
};

export const CalculatorSecondsField: React.FC<Props> = ({
  value,
  onChange,
  ...rest
}) => {
  const renderInput = (props: TextFieldProps) => (
    <TextField fullWidth InputLabelProps={{ shrink: true }} {...props} />
  );

  return (
    <Box sx={{ marginBottom: 3 }}>
      <TimePicker
        ampm={false}
        openTo="minutes"
        views={["minutes", "seconds"]}
        inputFormat="mm:ss"
        mask="__:__"
        value={value}
        onChange={(value: CalculatorSecondsFieldValue) =>
          onChange(toSecondsSinceEpoch(value))
        }
        renderInput={renderInput}
        {...rest}
      />
    </Box>
  );
};
