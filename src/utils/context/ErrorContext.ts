import React, { Dispatch, SetStateAction, createContext } from "react";

interface ErrorContextType {
  error: Error | undefined;
  setError: Dispatch<SetStateAction<Error | undefined>>;
}

const defaultErrorContextValue: ErrorContextType = {
  error: undefined,
  setError: () => {},
};

export const ErrorContext = createContext<ErrorContextType>(
  defaultErrorContextValue
);
