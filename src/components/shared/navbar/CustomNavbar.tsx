import { BlogPost } from "../../../utils";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";
import { DataContext } from "../../../utils/context/DataContext";

import "./CustomNavbar.css";
import { useContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export function CustomNavbar() {
  const { blogPosts } = useContext(DataContext);
  const [menuActive, setMenuActive] = useState(false);
  const { setSearchQuery } = useContext(DataContext);
  const [suggestions, setSuggestions] = useState<BlogPost[]>([]);
  const allPossibleSuggestions = blogPosts;

  function updateSuggestions(query: string) {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = allPossibleSuggestions.filter((suggestion) =>
      suggestion.relatedMotionPicture.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }

  function selectSuggestion(suggestion: BlogPost) {
    setSearchQuery(suggestion.relatedMotionPicture.title);
    setSuggestions([]); // Vorschläge leeren, sobald ein Vorschlag ausgewählt wurde
  }

  function handleInput(query: string): void {
    setSearchQuery(query);
    updateSuggestions(query);
  }

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
              onChange={(e) => handleInput(e.target.value)}
            />
            <div className="suggestions-container">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  onClick={() => selectSuggestion(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion.relatedMotionPicture.title}
                </div>
              ))}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
