import React, { ReactNode, createContext, useState } from "react";
import { UserService } from "../../services";
import { Controllers } from "../constants/Api";

interface ServiceContextType {
  userService: UserService | undefined;
}

const defaultStateContextValue: ServiceContextType = {
  userService: undefined,
};
export const ServiceContext = createContext<ServiceContextType>(
  defaultStateContextValue
);

interface ContextProviderProps {
  children: ReactNode;
}

export function ServiceConntextProvider(props: ContextProviderProps) {
  const userService = new UserService(Controllers.User);

  const serviceValue = {
    userService,
  };

  return (
    <ServiceContext.Provider value={serviceValue}>
      {props.children}
    </ServiceContext.Provider>
  );
}
