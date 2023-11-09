import { Typeahead } from "react-bootstrap-typeahead";
import { BlogPost } from "../../../utils";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";
import { DataContext } from "../../../utils/context/DataContext";

import "./CustomNavbar.css";
import { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Popover,
  PopoverBody,
  OverlayTrigger,
} from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { PersonCircle } from "react-bootstrap-icons";
import { Search } from "../../../utils/models/Search";
import { useLocation } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import { useTime } from "../../../utils/hooks/UserTime";

export function CustomNavbar() {
  const { blogPosts, user } = useContext(DataContext);
  const { setSearchQuery } = useContext(DataContext);
  const { greeting } = useTime();
  const { selectedBlogPostId, setSelectedBlogPostId } = useContext(DataContext);
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
                  if (selected.length > 0) {
                    const parsedSelected = selected as Search[];
                    setSelectedBlogPostId(parsedSelected[0].id);
                    setSelected((prev) => parsedSelected);
                  }
                }}
                onInputChange={(text, event) => {
                  if (
                    selected.length > 0 &&
                    (event.type === "click" ||
                      text ===
                        selected[0].title.substring(
                          0,
                          selected[0].title.length - 1
                        ))
                  ) {
                    setSelected((prev) => []);
                  }
                }}
                options={options}
                labelKey={"title"}
                filterBy={["title", "actors"]}
                placeholder="Search for a title..."
                selected={selected}
                clearButton
              />
            ) : (
              <></>
            )}
          </div>
          <Nav>
            <Nav.Link className="custom-navbar-link">
              <OverlayTrigger
                trigger={"click"}
                placement={"bottom"}
                rootClose={true}
                overlay={
                  <Popover className="user-icon-popover">
                    <PopoverBody className="user-icon-popover-header">
                      <span>{greeting}</span> {user?.name}
                    </PopoverBody>
                    <PopoverBody>
                      <div className="row">
                        <CustomButton
                          active
                          href={RouterPaths.Login.path}
                          label={RouterPaths.Login.display}
                          notLast={true}
                          hidden={user !== undefined}
                        />

                        <CustomButton
                          active
                          href={RouterPaths.Register.path}
                          label={RouterPaths.Register.display}
                          notLast={true}
                          hidden={user !== undefined}
                        />

                        <CustomButton
                          active
                          href={RouterPaths.Default.path}
                          label={"Logout"}
                          notLast={true}
                          hidden={user === undefined}
                        />
                      </div>
                    </PopoverBody>
                  </Popover>
                }
              >
                <PersonCircle
                  className={`user-icon ${user !== undefined ? "active" : ""}`}
                />
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
