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
import { PersonCircle } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, ServiceContext, useTime } from "../../../utils";
import { CustomButton } from "../..";

export function CustomNavbar() {
  const { blogPosts, user, setUser, setSelectedBlogPostId } =
    useContext(DataContext);
  const { sessionStorageService } = useContext(ServiceContext);
  const { greeting } = useTime();
  const [selected, setSelected] = useState<Search[]>([]);
  const options: Search[] = blogPosts.map((post) => {
    return {
      id: post.id,
      title: post.relatedMotionPicture.title,
      actors: post.relatedMotionPicture.actors.join(","),
      genres: post.relatedMotionPicture.genres.join(", "),
      year: post.relatedMotionPicture.initialRelease,
    };
  });
  const location = useLocation();
  const navigate = useNavigate();

  const seachBoxPlaceholder = "Search for a title, actor, genre or year...";

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
          <span>{COMPANY_NAME}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
        <Navbar.Collapse id="navbarScroll">
          <div className="ms-auto">
            {location.pathname === RouterPaths.Default.path ? (
              <Typeahead
                id="search-box"
                className="search-box"
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
                filterBy={["title", "actors", "genres", "year"]}
                placeholder={seachBoxPlaceholder}
                selected={selected}
                clearButton
              />
            ) : (
              <></>
            )}
          </div>
          <Nav>
            <Nav.Link>
              <OverlayTrigger
                trigger={"click"}
                placement={"bottom"}
                rootClose={true}
                overlay={
                  <Popover className="user-icon-popover">
                    <PopoverBody className="user-icon-popover-header">
                      <span>{greeting}</span>{" "}
                      {user?.name ? `, ${user.name}` : null}
                    </PopoverBody>
                    <PopoverBody>
                      <div className="row g-3">
                        <CustomButton
                          active
                          label={RouterPaths.Login.display}
                          notLast={true}
                          hidden={user !== undefined}
                          method={() => {
                            navigate(RouterPaths.Login.path);
                          }}
                        />

                        <CustomButton
                          active
                          label={RouterPaths.Register.display}
                          notLast={true}
                          hidden={user !== undefined}
                          method={() => {
                            navigate(RouterPaths.Register.path);
                          }}
                        />

                        <CustomButton
                          active
                          method={() => {
                            setUser(undefined);
                            sessionStorageService?.deleteUser();
                            navigate(RouterPaths.Default.path);
                          }}
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
