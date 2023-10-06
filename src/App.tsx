import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/Home";
import { CustomNavbar, Footer } from "./components/shared";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <BrowserRouter>
        <CustomNavbar setSearchQuery={setSearchQuery} />
        <div className="main-container">
          <Routes>
            <Route
              path={`${RouterPaths.Default}`}
              element={<Home searchQuery={searchQuery} />}
            />
            <Route path={`${RouterPaths.About}`} element={<About />} />
            <Route path={`${RouterPaths.Users}`} element={<Users />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
