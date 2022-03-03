import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import Main from "../UI/Main";
import styles from "./Account.module.css";

const Account = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Main>
        <Container fluid>
          <p className={styles.account}>THIS IS ACCOUNT PAGE</p>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default Account;
