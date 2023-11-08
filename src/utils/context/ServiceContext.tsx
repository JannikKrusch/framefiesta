import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { CustomError } from "../models/CustomError";

interface ServiceContextType {
  error: string;
  // setError: Dispatch<SetStateAction<CustomError | undefined>>;
  // loading: boolean;
  // setLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultStateContextValue: ServiceContextType = {
  error: "",
  // setError: () => {},
  // loading: true,
  // setLoading: () => {},
};
const ServiceContext = createContext<ServiceContextType>(
  defaultStateContextValue
);

interface ServiceProviderProps {
  children: ReactNode;
}

export function ServiceProvider(props: ServiceProviderProps) {
  const [error, setTest] = useState<string>("");
  return (
    <ServiceContext.Provider value={{ error: error }}>
      {props.children}
    </ServiceContext.Provider>
  );
}
