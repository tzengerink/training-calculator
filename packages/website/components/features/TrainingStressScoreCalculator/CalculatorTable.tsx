import {
  Card,
  CardContent,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { State } from "./reducer";

const Percentage: React.FC<{ factor: number }> = ({ factor }) => {
  return <>{Math.round(factor * 100)}%</>;
};

export const CalculatorTable: React.FC<{ state: State }> = ({ state }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <TableContainer component="table">
          <TableHead>
            <TableRow>
              <TableCell component="th" align="right">
                Intensity Factor
              </TableCell>
              <TableCell component="th" align="right">
                Training Stress Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">
                <Percentage factor={state.intensityFactor} />
              </TableCell>
              <TableCell align="right" sx={{ bgcolor: "secondary.400" }}>
                <Typography sx={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  {state.trainingStressScore}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
