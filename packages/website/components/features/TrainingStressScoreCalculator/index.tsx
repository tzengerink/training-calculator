import React, { useReducer } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorTable } from "./CalculatorTable";
import { Action, defaultState, Reducer, reducer } from "./reducer";
import { ActionPayloads } from "./reducer/action";

const TrainingStressScoreCalculator: React.FC = () => {
  const [state, dispatch] = useReducer<Reducer<ActionPayloads>>(
    reducer,
    defaultState
  );

  return (
    <>
      <CalculatorForm state={state} dispatch={dispatch} />
      <CalculatorTable state={state} />
    </>
  );
};

export default TrainingStressScoreCalculator;
