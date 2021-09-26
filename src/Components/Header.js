import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Col from "react-bootstrap/Col";
import styles from "./Header.module.css";

const Header = () => {
  const [width, setWidth] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 1) {
      setScrolledHeader(true);
    } else {
      setScrolledHeader(false);
    }
  });

  useEffect(() => {
    let windowSize = window.innerWidth;
    if (windowSize >= 768) {
      setWidth(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    let windowSize = window.innerWidth;
    if (windowSize >= 768) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  });

  if (width === true) {
    return (
      <Navbar
        className={
          scrolledHeader ? "fixed-top w-100 bg-light" : "bg-transparent"
        }
        expand="md"
      >
        <Container fluid>
          <Col className="pt-1">
            <Navbar.Brand className="fs-2" as={Link} to="/">
              MINT
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="d-flex justify-content-center fs-5">
              <Nav.Link as={NavLink} to="/Shop">
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Contact">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Sale">
                Sale
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="d-flex justify-content-end fs-5">
              <Nav.Link as={NavLink} to="/Search">
                <BiSearch />
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Account">
                <FiUser />
              </Nav.Link>
              <Nav.Link className={styles.navLastChild} as={NavLink} to="/Cart">
                <HiOutlineShoppingBag />
                [0]
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar
      className={
        scrolledHeader
          ? "fixed-top bg-light"
          : "relative-top bg-light rounded-bottom"
      }
      expand="md"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="text-center fs-3 pt-2" as={Link} to="/">
          MINT
        </Navbar.Brand>
        <Nav className="flex-row">
          <Nav.Link className="fs-4" as={NavLink} to="/Cart">
            <HiOutlineShoppingBag className="fs-3" />
            [0]
          </Nav.Link>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center">
            <input
              className="rounded-pill m-2 text-center"
              type="search"
              placeholder="What are you looking for?"
            ></input>
            <Nav.Link className="py-1" as={NavLink} to="/Shop">
              Shop
            </Nav.Link>
            <Nav.Link className="py-1" as={NavLink} to="/About">
              About
            </Nav.Link>
            <Nav.Link className="py-1" as={NavLink} to="/Contact">
              Contact
            </Nav.Link>
            <Nav.Link className="py-1" as={NavLink} to="/Sale">
              Sale
            </Nav.Link>
            <Nav.Link className="py-0" as={NavLink} to="/Account">
              <FiUser /> Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
