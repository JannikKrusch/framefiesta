import React, { Dispatch, SetStateAction, createContext } from "react";

interface StateContextType {
  error: Error | undefined;
  setError: Dispatch<SetStateAction<Error | undefined>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
