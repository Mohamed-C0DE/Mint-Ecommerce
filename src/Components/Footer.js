import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Col, Container, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  SiFacebook,
  SiInstagram,
  SiPinterest,
  SiTwitter,
} from "react-icons/si";
import styles from "./Footer.module.css";

const Footer = () => {
  const [width, setWidth] = useState(false);

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
      <div className={`${styles.footer} bg-light`}>
        <Container fluid>
          <Row>
            <Col className="mt-2  text-start">
              <h5 className={`fw-bold ${styles.header}`}>Support</h5>
              <Nav.Link className={styles.navLink} as={NavLink} to="/">
                <p className={`mb-0 fs-6 ${styles.text}`}>Help</p>
              </Nav.Link>
              <Nav.Link className={styles.navLink} as={NavLink} to="/">
                <p className={`mb-0 fs-6 ${styles.text}`}>Shipping & Returns</p>
              </Nav.Link>
              <Nav.Link className={styles.navLink} as={NavLink} to="/">
                <p className={`mb-0 fs-6 ${styles.text}`}>Privacy Policy</p>
              </Nav.Link>
              <Nav.Link className={styles.navLink} as={NavLink} to="/">
                <p className={`mb-0 fs-6 ${styles.text}`}>FAQ</p>
              </Nav.Link>
            </Col>
            <Col className="mt-2 text-center">
              <h5 className="fw-bold">Let's Connect</h5>
              <SiFacebook className={styles.icon} />
              <SiInstagram className={styles.icon} />
              <SiPinterest className={styles.icon} />
              <SiTwitter className={styles.icon} />
            </Col>
            <Col className="mt-2 text-end">
              <h5 className="fw-bold">Newsletter</h5>
              <p>Subscribe to receive news, exclusive offers & more.</p>
              <input type="text" placeholder="Enter Email" />
              <button>
                <BiRightArrowAlt />
              </button>
            </Col>
          </Row>
          <Col className="w-100 text-center pt-1">
            <h6>&#169; MINT 2021. All Rights Reserved</h6>
          </Col>
        </Container>
      </div>
    );
  }

  return (
    <div className="text-center bg-light py-1">
      <Container fluid>
        <Col className="mt-2">
          <h5 className="fw-bold">Support</h5>
          <Nav.Link className={styles.navLink} as={NavLink} to="/">
            <p className={`mb-0 fs-6 ${styles.text}`}>Help</p>
          </Nav.Link>
          <Nav.Link className={styles.navLink} as={NavLink} to="/">
            <p className={`mb-0 fs-6 ${styles.text}`}>Shipping & Returns</p>
          </Nav.Link>
          <Nav.Link className={styles.navLink} as={NavLink} to="/">
            <p className={`mb-0 fs-6 ${styles.text}`}>Privacy Policy</p>
          </Nav.Link>
          <Nav.Link className={styles.navLink} as={NavLink} to="/">
            <p className={`mb-0 fs-6 ${styles.text}`}>FAQ</p>
          </Nav.Link>
        </Col>
        <Col className="mt-2">
          <h5 className="fw-bold">Let's Connect</h5>
          <SiFacebook className={styles.icon} role="button" />
          <SiInstagram className={styles.icon} role="button" />
          <SiPinterest className={styles.icon} role="button" />
          <SiTwitter className={styles.icon} role="button" />
        </Col>
        <Col className="mt-3">
          <h5 className="fw-bold mb-0">Newsletter</h5>
          <p className="mb-0">
            Subscribe to receive news, exclusive offers & more.
          </p>
          <input type="email" placeholder="Enter Email" />
          <button className={styles.btn}>
            <BiRightArrowAlt />
          </button>
        </Col>

        <Col className="mt-4">
          <h6>&#169; MINT 2021. All Rights Reserved</h6>
        </Col>
      </Container>
    </div>
  );
};

export default Footer;
