import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Sale from "./Pages/Sale";
import Search from "./Pages/Search";
import Account from "./Pages/Account";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/Shop">
        <Shop />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/Sale">
        <Sale />
      </Route>
      <Route exact path="/Search">
        <Search />
      </Route>
      <Route exact path="/Account">
        <Account />
      </Route>
      <Route exact path="/ProductPage">
        <ProductPage />
      </Route>
      <Route exact path="/Cart">
        <Cart />
      </Route>
    </div>
  );
};

export default App;
