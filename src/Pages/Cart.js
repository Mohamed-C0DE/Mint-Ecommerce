import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Container fluid>
        <p className={styles.cart}>THIS IS CART PAGE</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
