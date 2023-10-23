import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";
import { DataContext } from "../../../utils/context/DataContext";

import "./CustomNavbar.css";
import { useContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export function CustomNavbar() {
  const [menuActive, setMenuActive] = useState(false);
  const { setSearchQuery } = useContext(DataContext);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Navbar expand="sm" className="custom-navbar" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand
          className="custom-navbar-link"
          href={RouterPaths.Default.path}
        >
          {COMPANY_NAME}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Object.values(RouterPaths)
              .slice(2)
              .map((route) => (
                <Nav.Link className="custom-navbar-link" href={route.path}>
                  {route.display}
                </Nav.Link>
              ))}
          </Nav>
          <div className="d-flex">
            <input
              className="w-100 search-box"
              placeholder="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
