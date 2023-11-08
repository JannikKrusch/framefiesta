import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { BlogPost, User } from "..";

interface DataContextType {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
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

export function DataContextProvider(props: ContextProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
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
