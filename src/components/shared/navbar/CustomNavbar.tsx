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
import { Search } from "../../../utils/models/Search";
import { useLocation, useNavigate } from "react-router-dom";

export function CustomNavbar() {
  const { blogPosts } = useContext(DataContext);
  const { setSearchQuery } = useContext(DataContext);

  const [selected, setSelected] = useState<Search[]>([]);
  const options: Search[] = blogPosts.map((post) => {
    return {
      id: post.id,
      title: post.relatedMotionPicture.title,
      actors: post.relatedMotionPicture.actors.join(","),
    };
  });
  const location = useLocation();

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
          <div className=" ms-auto">
            {location.pathname === RouterPaths.Default.path ? (
              <Typeahead
                id="blog-post-search"
                onChange={(selected) => {
                  setSelected((prev) => selected as Search[]);
                }}
                options={options}
                labelKey={"title"}
                filterBy={["title", "actors"]}
                placeholder="Search for a title..."
                selected={selected}
              />
            ) : (
              <></>
            )}
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
