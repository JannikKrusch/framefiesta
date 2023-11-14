import React, { ReactNode, createContext } from "react";
import { Controllers } from "../constants/Api";
import {
  BlogPostService,
  SessionStorageService,
  UserService,
} from "../../services";

interface ServiceContextType {
  userService: UserService | undefined;
  blogPostService: BlogPostService | undefined;
  sessionStorageService: SessionStorageService | undefined;
}

const defaultStateContextValue: ServiceContextType = {
  userService: undefined,
  blogPostService: undefined,
  sessionStorageService: undefined,
};
export const ServiceContext = createContext<ServiceContextType>(
  defaultStateContextValue
);

interface ContextProviderProps {
  children: ReactNode;
}

export function ServiceConntextProvider(
  props: ContextProviderProps
): JSX.Element {
  const userService = new UserService(Controllers.User);
  const blogPostService = new BlogPostService(Controllers.Blogs);
  const sessionStorageService = new SessionStorageService();

  const serviceValue = {
    userService,
    blogPostService,
    sessionStorageService,
  };

  return (
    <ServiceContext.Provider value={serviceValue}>
      {props.children}
    </ServiceContext.Provider>
  );
}
