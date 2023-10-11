import { List } from "react-bootstrap-icons";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";

import "./CustomNavbar.css";
import { useEffect, useState } from "react";

interface CustomNavbarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function CustomNavbar({ setSearchQuery }: CustomNavbarProps) {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    // const handleResize = () => {
    //   if (window.innerWidth > 768) setMenuActive(false);
    // };
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [menuActive]);

  return (
    <div className={menuActive ? "topnav responsive" : "topnav"} id="myTopnav">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <List />
        {/* <i className="fa fa-bars"></i> */}
      </a>
    </div>
    // <nav className="navbar">
    //   <div className="navbar-company-name">{COMPANY_NAME}</div>
    //   <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
    //     {Object.values(RouterPaths)
    //       .slice(1)
    //       .map((route) => (
    //         <li key={route.path}>
    //           <a href={route.path}>{route.display}</a>
    //         </li>
    //       ))}
    //   </ul>
    //   <div className="navbar-menu-toggle" id="mobile-menu" onClick={toggleMenu}>
    //     <span className="navbar-bar"></span>
    //     <span className="navbar-bar"></span>
    //     <span className="navbar-bar"></span>
    //   </div>
    // </nav>
  );
}
