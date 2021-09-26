import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import styles from "./Account.module.css";

const Account = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Container fluid>
        <p className={styles.account}>THIS IS ACCOUNT PAGE</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Account;
