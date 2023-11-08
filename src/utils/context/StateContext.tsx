import React, { createContext, useState, ReactNode } from "react";
import { CustomError } from "../models/CustomError";

interface StateContextType {
  error: CustomError | undefined;
  setError: React.Dispatch<React.SetStateAction<CustomError | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultStateContextValue: StateContextType = {
  error: undefined,
  setError: () => {},
  loading: true,
  setLoading: () => {},
};

export const StateContext = createContext<StateContextType>(
  defaultStateContextValue
);

interface ContextProviderProps {
  children: ReactNode;
}

export function StateContextProvider(props: ContextProviderProps) {
  const [error, setError] = useState<CustomError | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const stateValue = { error, setError, loading, setLoading };

  return (
    <StateContext.Provider value={stateValue}>
      {props.children}
    </StateContext.Provider>
  );
}
