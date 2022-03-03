import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import Main from "../UI/Main";

const Cart = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Main>
        <Container fluid>
          <section className="py-2">
            <header className="fs-3 text-center pb-3">Checkout</header>
            {/* Personal Details */}
            <div className="row">
              <div className="col-8 d-flex flex-wrap">
                <div className="col-2 fw-bold">PERSONAL DETAILS</div>
                <div className="col-10 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="col-5 d-flex flex-column pe-1">
                    <label>First Name</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column ps-1">
                    <label>Last Name</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column pe-1">
                    <label>Email</label>
                    <input type="email"></input>
                  </div>
                  <div className="col-5 d-flex flex-column ps-1">
                    <label>Phone Number</label>
                    <input type="text"></input>
                  </div>
                </div>
              </div>
              <div className="col-4">Order Summary</div>
            </div>
            {/* Shipping Details */}
            <div className="row pt-3">
              <div className="col-8 d-flex flex-wrap">
                <div className="col-2 fw-bold">SHIPPING DETAILS</div>
                <div className="col-10 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="col-5 d-flex flex-column pe-1">
                    <label>Street Address</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column ps-1">
                    <label>Zip Code</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column pe-1">
                    <label>City</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column ps-1">
                    <label>Country</label>
                    <input type="text"></input>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment method */}
            <div className="row pt-3">
              <div className="col-8 d-flex flex-wrap">
                <div className="col-2 fw-bold">PAYMENT METHOD</div>
                <div className="col-10 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="col-5 d-flex flex-column pe-1">
                    <label>Street Address</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column ps-1">
                    <label>Last Name</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column pe-1">
                    <label>Email</label>
                    <input type="text"></input>
                  </div>
                  <div className="col-5 d-flex flex-column ps-1">
                    <label>Phone Number</label>
                    <input type="text"></input>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default Cart;
