import { Typeahead } from "react-bootstrap-typeahead";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";
import { DataContext } from "../../../utils/context/DataContext";

import "./CustomNavbar.css";
import { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Popover,
  PopoverBody,
  OverlayTrigger,
} from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Film, PersonCircle } from "react-bootstrap-icons";
import { Search } from "../../../utils/models/Search";
import { useLocation } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import { useTime } from "../../../utils/hooks/UserTime";
export function CustomNavbar() {
  const { blogPosts, user, setSelectedBlogPostId } = useContext(DataContext);
  const { greeting } = useTime();
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
          className="custom-navbar-logo"
          href={RouterPaths.Default.path}
        >
          <Film className="custom-navbar-logo-icon" />
          <span>{COMPANY_NAME}</span>
          {/* {COMPANY_NAME} */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
        <Navbar.Collapse id="navbarScroll">
          <div className="ms-auto">
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
