import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/Home";
import { CustomNavbar, Footer } from "./components/shared";
import { ErrorBoundary } from "./components/shared/error/ErrorBoundary";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <div
            style={{
              margin: 0,
              padding: 0,
              minHeight: "100vh",
              backgroundColor: "var(--page-background-color)",
            }}
          >
            <CustomNavbar setSearchQuery={setSearchQuery} />
            <div className="main-container">
              <Routes>
                <Route
                  path={`${RouterPaths.Default.path}`}
                  element={<Home searchQuery={searchQuery} />}
                />
                <Route path={`${RouterPaths.About.path}`} element={<About />} />
                <Route path={`${RouterPaths.Users.path}`} element={<Users />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;

function About() {
  function testError() {
    throw Error("Test Error");
  }
  testError();
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
