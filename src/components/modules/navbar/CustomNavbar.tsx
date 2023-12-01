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
import {
  Search,
  ServiceContext,
  listDisjunctionFormat,
  navigateToHome,
  useTime,
} from "../../../utils";
import { CustomButton } from "../..";
import Fuse from "fuse.js";

export function CustomNavbar() {
  const { blogPosts, user, setUser, setSelectedBlogPostId } =
    useContext(DataContext);
  const { userService, sessionStorageService } = useContext(ServiceContext);
  const { greeting } = useTime();
  const [selected, setSelected] = useState<Search[]>([]);
  const options: Search[] = blogPosts.map((post) => {
    return {
      id: post.id,
      title: post.relatedMotionPicture.title,
      actors: post.relatedMotionPicture.actors,
      genres: post.relatedMotionPicture.genres,
      year: post.relatedMotionPicture.initialRelease.toString(),
    };
  });

  const location = useLocation();
  const navigate = useNavigate();

  const seachBoxPlaceholder = `Search for ${listDisjunctionFormat([
    "title",
    "actor",
    "genre",
    "year",
  ])} ...`;

  function removeUserFromStorageAndDefaultRedirect(): void {
    setUser(undefined);
    sessionStorageService?.deleteUser();
    navigateToHome();
  }

  async function deleteUser(): Promise<void> {
    if (user) {
      const successful = await userService?.deleteUserAsync(
        user.name,
        user.password
      );
      if (successful) {
        setUser(undefined);
        sessionStorageService?.deleteUser();
        window.location.href = RouterPaths.Default.path;
      }
    }
  }

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
          <div className="searchbox-container ms-auto">
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

                  if (text.length === 0) {
                    setSelected((prev) => []);
                  }
                }}
                options={options}
                labelKey={"title"}
                filterBy={(option, props) => {
                  if (!props.text) {
                    return true;
                  }

                  const fuse = new Fuse(options, {
                    keys: ["title", "actors", "genres", "year"],
                    includeScore: true,
                    shouldSort: true,
                    useExtendedSearch: true,
                    findAllMatches: true,
                  });

                  const result = fuse.search(props.text);

                  return result.some(
                    (searchResult) => searchResult.item === option
                  );
                }}
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
                      <span>{greeting}</span>
                      {user?.name ? `, ${user.name}` : null}
                    </PopoverBody>
                    <PopoverBody>
                      <div className="row g-3">
                        <CustomButton
                          active
                          label={RouterPaths.Login.display}
                          notLast
                          hidden={user !== undefined}
                          method={() => {
                            navigate(RouterPaths.Login.path);
                          }}
                        />

                        <CustomButton
                          active
                          label={RouterPaths.Register.display}
                          notLast
                          hidden={user !== undefined}
                          method={() => {
                            navigate(RouterPaths.Register.path);
                          }}
                        />

                        <CustomButton
                          active
                          label={"Delete Account"}
                          notLast
                          hidden={user === undefined}
                          method={async () => await deleteUser()}
                        />

                        <CustomButton
                          active
                          label={"Logout"}
                          notLast
                          hidden={user === undefined}
                          method={removeUserFromStorageAndDefaultRedirect}
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
