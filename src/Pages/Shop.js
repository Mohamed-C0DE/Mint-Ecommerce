import React from "react";
import Offers from "../Components/Offers";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import ScrollToTop from "../Components/ScrollToTop";
import Main from "../UI/Main";

const Shop = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Main>
        <Products />
      </Main>
      <Footer />
    </div>
  );
};

export default Shop;
