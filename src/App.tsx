import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import CustomNavbar from "./components/shared/navbar/CustomNavbar";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <div className="main-container">
          <Routes>
            <Route path={`${RouterPaths.Home}`} element={<Home />} />
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
