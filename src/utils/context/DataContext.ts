import { Dispatch, SetStateAction, createContext } from "react";
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
