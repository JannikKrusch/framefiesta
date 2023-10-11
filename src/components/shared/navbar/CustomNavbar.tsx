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

  return (
    <div
      className={menuActive ? "custom-navbar responsive" : "custom-navbar"}
      id="mycustom-navbar"
    >
      <a href="#home" className="active">
        {COMPANY_NAME}
      </a>
      {Object.values(RouterPaths)
        .slice(1)
        .map((route) => (
          <a href={route.path} key={route.path}>
            {route.display}
          </a>
        ))}
      <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <List />
      </a>
    </div>
  );
}
