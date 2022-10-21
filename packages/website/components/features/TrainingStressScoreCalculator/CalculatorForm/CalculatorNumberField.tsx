import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type AdditionalProps = {
  adornment?: string;
};

export const CalculatorNumberField: React.FC<
  TextFieldProps & AdditionalProps
> = ({ adornment, ...rest }) => {
  const inputProps = adornment
    ? {
        endAdornment: (
          <InputAdornment position="end">{adornment}</InputAdornment>
        ),
      }
    : null;

  return (
    <TextField
      fullWidth
      type="number"
      sx={{ borderColor: "grey.100", marginBottom: 3 }}
      InputProps={inputProps}
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  );
};
