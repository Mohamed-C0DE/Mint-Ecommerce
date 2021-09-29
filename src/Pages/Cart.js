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
        <section>
          <header className="fs-3 text-center">Shopping Cart</header>
          <div className="row">
            <div className="col-6 text-center">CART ITEMS</div>
            <div className="col-6 text-center">TOTAL</div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
