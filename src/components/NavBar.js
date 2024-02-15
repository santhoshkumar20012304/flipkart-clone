import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import brandImg from "../assets/BrandImg.png";

const NavBar = ({ handleSearchInput, searchInput, cartItems }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary pt-0 mt-0 ">
        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Navbar.Brand>
            <NavLink to="/">
              <Image src={brandImg} style={{ width: 150, padding: 0 }} />
            </NavLink>
          </Navbar.Brand>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search for products, brand and more"
              className="me-2 "
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchInput}
            />
            {/* <Button variant="primary">Search</Button> */}
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-conten-center align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/login">
                <Button variant="light">
                  <i className="bi bi-person-circle"></i> Login
                </Button>
              </Nav.Link>

              <Nav.Link as={Link} title="cart" to="/cart">
                <i className="bi bi-cart"></i> Cart{" "}
                <Badge bg="secondary">{cartItems.length}</Badge>
              </Nav.Link>
              <Nav.Link title="Become a seller" as={Link} to={"/seller"}>
                <i className="bi bi-basket"></i> Become a Seller
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="light " id="dropdown-basic">
                  <i className="bi bi-three-dots"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <i className="bi bi-bell"></i> Notification Preferences
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <i className="bi bi-headset"></i> 24X7 Customer Care
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i class="bi bi-graph-up-arrow"></i> Advertise
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
