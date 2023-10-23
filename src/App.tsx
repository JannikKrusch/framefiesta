import React, { useContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/Home";
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const stateValue = useMemo(
    () => ({ error, setError, loading, setLoading }),
    [error, setError, loading, setLoading]
  );
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
    <StateContext.Provider value={stateValue}>
      <DataContext.Provider value={dataValue}>
        <BrowserRouter>
          <div className="main-container">
            <CustomNavbar />
            {/* <Loader> */}
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
            {/* </Loader> */}
            <Footer />
          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </StateContext.Provider>
  );
}

export default App;

function About(): JSX.Element {
  const { error, setError } = useContext(StateContext);
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
