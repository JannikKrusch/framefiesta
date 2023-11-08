import React, { ReactNode, createContext, useState } from "react";

interface ServiceContextType {
  test: string;
  // setError: Dispatch<SetStateAction<CustomError | undefined>>;
  // loading: boolean;
  // setLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultStateContextValue: ServiceContextType = {
  test: "",
  // setError: () => {},
  // loading: true,
  // setLoading: () => {},
};
export const ServiceContext = createContext<ServiceContextType>(
  defaultStateContextValue
);

interface ContextProviderProps {
  children: ReactNode;
}

export function ServiceConntextProvider(props: ContextProviderProps) {
  const [error, setTest] = useState<string>("");
  return (
    <ServiceContext.Provider value={{ test: error }}>
      {props.children}
    </ServiceContext.Provider>
  );
}
