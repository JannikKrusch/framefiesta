import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/Home";
import { CustomNavbar, Footer } from "./components/shared";
import { ErrorPage } from "./components/shared/error/ErrorPage";
import { ErrorContext } from "./utils/context/ErrorContext";
import { useErrorUpdate } from "./utils/hooks/UseErrorUpdate";

function App() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <BrowserRouter>
        <div className="main-container">
          <CustomNavbar setSearchQuery={setSearchQuery} />
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
              <Route path={`${RouterPaths.About.path}`} element={<About />} />
              <Route path={`${RouterPaths.Users.path}`} element={<Users />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
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

function Users() {
  return <h2>Users</h2>;
}
