import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { BlogPost, UserFE } from "..";

interface DataContextType {
  user: UserFE | undefined;
  setUser: Dispatch<SetStateAction<UserFE | undefined>>;
  selectedBlogPostId: string;
  setSelectedBlogPostId: Dispatch<SetStateAction<string>>;
  blogPosts: BlogPost[];
  setBlogPosts: Dispatch<SetStateAction<BlogPost[]>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const defaultDataContextValue: DataContextType = {
  user: undefined,
  setUser: () => {},
  selectedBlogPostId: "",
  setSelectedBlogPostId: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
};

export const DataContext = createContext<DataContextType>(
  defaultDataContextValue
);

interface ContextProviderProps {
  children: ReactNode;
}

export function DataContextProvider(props: ContextProviderProps): JSX.Element {
  const [user, setUser] = useState<UserFE | undefined>(undefined);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string>("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dataValue = {
    user,
    setUser,
    selectedBlogPostId,
    setSelectedBlogPostId,
    blogPosts,
    setBlogPosts,
    searchQuery,
    setSearchQuery,
  };

  return (
    <DataContext.Provider value={dataValue}>
      {props.children}
    </DataContext.Provider>
  );
}
