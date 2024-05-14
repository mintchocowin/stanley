import "../component/Navigation.css";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import logo from "../image/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import usaFlag from "../image/flag-usa.jpg";

const navmenu = ["NEW", "QUENCHER", "HYDRATE", "SHOP", "APPAREL", "CUSTOMIZE"];

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav1">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Shop Gifts from Grads</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Login|</Nav.Link>
              <Nav.Link href="#">Create Account|</Nav.Link>
              <Nav.Link href="#">Support</Nav.Link>
              <Nav.Link href="location">
                {" "}
                USA
                <FontAwesomeIcon icon={faChevronDown} />
                <img width={30} src={usaFlag} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
      <div className="nav2">
        <div className="nav2-wrap">
          <div className="nav2-right">
            <img width={250} src={logo} />
            {navmenu.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div className="nav2-left">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
