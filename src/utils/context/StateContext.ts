import React, { Dispatch, SetStateAction, createContext } from "react";
import { CustomError } from "../models/CustomError";

interface StateContextType {
  error: CustomError | undefined;
  setError: Dispatch<SetStateAction<CustomError | undefined>>;
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
