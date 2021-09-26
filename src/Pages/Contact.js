import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Container fluid>
        <p className={styles.contact}>Contact Page</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
