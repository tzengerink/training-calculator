import { CalculatorSecondsFieldValue } from "../CalculatorForm/CalculatorSecondsField";

export enum Mode {
  Power,
  Pace,
  HeartRate,
}

export interface State {
  mode: Mode;
  durationInMinutes: string;
  power: {
    thresholdInWatts: string;
    normalizedInWatts: string;
  };
  pace: {
    thresholdInSeconds: CalculatorSecondsFieldValue;
    normalizedInSeconds: CalculatorSecondsFieldValue;
  };
  heartRate: {
    maximumInBpm: string;
    averageInBpm: string;
  };
  intensityFactor: number;
  trainingStressScore: number;
}

export const defaultState = {
  mode: Mode.Pace,
  durationInMinutes: "",
  power: {
    thresholdInWatts: "",
    normalizedInWatts: "",
  },
  pace: {
    thresholdInSeconds: null,
    normalizedInSeconds: null,
  },
  heartRate: {
    maximumInBpm: "",
    averageInBpm: "",
  },
  intensityFactor: 0,
  trainingStressScore: 0,
};
