import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import CustomNavbar from "./components/shared/navbar/CustomNavbar";
import "./App.css";
import { RouterPaths } from "./utils/constants/RouterPaths";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path={`${RouterPaths.Home}`} element={<Home />} />
          <Route path={`${RouterPaths.About}`} element={<About />} />
          <Route path={`${RouterPaths.Users}`} element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
