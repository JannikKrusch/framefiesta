import { Typeahead } from "react-bootstrap-typeahead";
import { BlogPost } from "../../../utils";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";
import { DataContext } from "../../../utils/context/DataContext";

import "./CustomNavbar.css";
import { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { PersonCircle } from "react-bootstrap-icons";

export function CustomNavbar() {
  const { blogPosts } = useContext(DataContext);
  const { setSearchQuery } = useContext(DataContext);
  const [selected, setSelected] = useState<BlogPost[]>([]);
  const allPossibleSuggestions = blogPosts;

  function updateSuggestions(query: string) {
    if (!query.trim()) {
      setSelected([]);
      return;
    }

    const filteredSuggestions = allPossibleSuggestions.filter((suggestion) =>
      suggestion.relatedMotionPicture.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setSelected(filteredSuggestions);
  }

  // Verwenden Sie diesen Effekt, um die ausgewählte Option als aktuelle Suchanfrage zu setzen
  useEffect(() => {
    if (selected.length > 0) {
      setSearchQuery(selected[0].relatedMotionPicture.title);
      setSelected([]);
    }
  }, [selected]);

  return (
    <Navbar
      expand="sm"
      className="custom-navbar"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand
          className="custom-navbar-link"
          href={RouterPaths.Default.path}
        >
          {COMPANY_NAME}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Object.values(RouterPaths)
              .slice(2)
              .map((route) => (
                <Nav.Link
                  key={route.path}
                  className="custom-navbar-link"
                  href={route.path}
                >
                  {route.display}
                </Nav.Link>
              ))}
          </Nav>
          <div className="d-flex ms-auto">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Nav>
            <Nav.Link
              className="custom-navbar-link"
              href={RouterPaths.Login.path}
            >
              <PersonCircle style={{ width: "2rem", height: "2rem" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
