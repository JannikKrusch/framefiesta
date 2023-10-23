import React, { useContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/Home";
import { CustomNavbar, Footer } from "./components/shared";
import { ErrorPage } from "./components/shared/error/ErrorPage";
import { ErrorContext } from "./utils/context/ErrorContext";
import { useErrorUpdate } from "./utils/hooks/UseErrorUpdate";
import { DataContext } from "./utils/context/DataContext";
import { BlogPost, User } from "./utils";

function App() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const errorValue = useMemo(() => ({ error, setError }), [error, setError]);
  const dataValue = useMemo(
    () => ({
      user,
      setUser,
      blogPosts,
      setBlogPosts,
      searchQuery,
      setSearchQuery,
    }),
    [user, setUser, blogPosts, setBlogPosts, searchQuery, setSearchQuery]
  );

  return (
    <ErrorContext.Provider value={errorValue}>
      <DataContext.Provider value={dataValue}>
        <BrowserRouter>
          <div className="main-container">
            <CustomNavbar />
            <div className="content-container">
              <Routes>
                <Route
                  path={`${RouterPaths.Default.path}`}
                  element={<Home searchQuery={searchQuery} />}
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
    </ErrorContext.Provider>
  );
}

export default App;

function About(): JSX.Element {
  const { error, setError } = useContext(ErrorContext);
  useErrorUpdate();

  function buttonClick() {
    console.warn("click");
    setError(new Error("Test Button Click"));
  }
  return (
    <>
      <h2>About</h2>
      <button onClick={buttonClick}>click</button>
    </>
  );
}
