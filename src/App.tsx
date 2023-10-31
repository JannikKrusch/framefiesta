import React, { useContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/home/Home";
import { CustomNavbar, Footer, Loader } from "./components/shared";
import { ErrorPage } from "./components/shared/error/ErrorPage";
import { StateContext } from "./utils/context/StateContext";
import { useErrorUpdate } from "./utils/hooks/UseErrorUpdate";
import { DataContext } from "./utils/context/DataContext";
import { BlogPost, User } from "./utils";

function App() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string>("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const stateValue = { error, setError, loading, setLoading };

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
    <StateContext.Provider value={stateValue}>
      <DataContext.Provider value={dataValue}>
        <BrowserRouter>
          <div className="main-container">
            <CustomNavbar />
            <div className="content-container">
              <Routes>
                <Route path={`/about`} element={<About />} />
                <Route
                  path={`${RouterPaths.Default.path}`}
                  element={<Home />}
                />
                <Route
                  path={`${RouterPaths.Error.path}`}
                  element={<ErrorPage />}
                />
                <Route path={`${RouterPaths.Login.path}`} element={<About />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </StateContext.Provider>
  );
}

export default App;

function About(): JSX.Element {
  const { selectedBlogPostId, setSelectedBlogPostId } = useContext(DataContext);
  useErrorUpdate();
  function buttonClick() {
    setSelectedBlogPostId((prev) => {
      return prev + 1;
    });
  }
  return (
    <>
      <h2>About</h2>
      <button onClick={buttonClick}>Click {selectedBlogPostId}</button>
    </>
  );
}
