import React, { ReactNode, createContext, useState } from "react";
import { UserService, SessionStorageService } from "../../services";
import { Controllers } from "../constants/Api";

interface ServiceContextType {
  userService: UserService | undefined;
  sessionStorageService: SessionStorageService | undefined;
}

const defaultStateContextValue: ServiceContextType = {
  userService: undefined,
  sessionStorageService: undefined,
};
export const ServiceContext = createContext<ServiceContextType>(
  defaultStateContextValue
);

interface ContextProviderProps {
  children: ReactNode;
}

export function ServiceConntextProvider(props: ContextProviderProps) {
  const userService = new UserService(Controllers.User);
  const sessionStorageService = new SessionStorageService();

  const serviceValue = {
    userService,
    sessionStorageService,
  };

  return (
    <ServiceContext.Provider value={serviceValue}>
      {props.children}
    </ServiceContext.Provider>
  );
}
