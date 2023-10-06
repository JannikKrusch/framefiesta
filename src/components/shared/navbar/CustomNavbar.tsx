import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import { RouterPaths } from "../../../utils/constants/RouterPaths";

interface CustomNavbarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function CustomNavbar({ setSearchQuery }: CustomNavbarProps) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href={`${RouterPaths.Home}`}>{COMPANY_NAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href={`${RouterPaths.About}`}>About</Nav.Link>
            <Nav.Link href={`${RouterPaths.Users}`}>Users</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchQuery((current) => e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
