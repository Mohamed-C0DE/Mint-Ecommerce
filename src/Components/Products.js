import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(false);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://mint-ecommerce-shop-default-rtdb.firebaseio.com/Products.json"
      );
      const data = await response.json();

      const productsArr = [];

      for (const key in data) {
        productsArr.push({
          id: key,
          name: data[key].Name,
          rating: data[key].Rating,
          bestSeller: data[key].BestSeller,
          image: data[key].Image,
          price: data[key].Price,
        });
      }

      setProducts(productsArr);
    };
    fetchProducts();
  }, []);

  const productsList = products.map((product) => {
    setTimeout(() => {
      setDisplayProducts(true);
    }, 500);
    return (
      <div className="col">
        <div className="card">
          <Link to="/ProductPage">
            <img src={product.image} className="card-img-top" alt="product" />
          </Link>
          <div className="card-body">
            <Link className="text-dark text-decoration-none" to="/ProductPage">
              <h5 className="card-title">{product.name}</h5>
            </Link>
            <p className="card-text">
              {product.rating} <RiStarSFill />
            </p>
            <div className="d-flex justify-content-between">
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const onSortHandler = () => {
    if (!sort) {
      setFilter(false);
      setSort(true);
    } else {
      setSort(false);
    }
  };
  const onFilterHandler = () => {
    if (!filter) {
      setSort(false);
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  return (
    <section className={`${styles.products} py-2`}>
      <Container fluid>
        <h3 className="text-center pb-1">Shop All</h3>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-link text-decoration-none text-dark fs-5"
            onClick={onSortHandler}
          >
            Sort
            <BiSort />
          </button>
          <p className="fs-5 pt-3">Results (0)</p>
          <button
            type="button"
            className="btn btn-link text-decoration-none text-dark fs-5"
            onClick={onFilterHandler}
          >
            Filter
            <BsFilter className="ps-1 fs-3" />
          </button>
        </div>
        <div>
          {sort && (
            <div className="text-center w-100 bg-dark text-light mb-2 pt-1">
              <p>Price (Low)</p>
              <p>Price (High)</p>
            </div>
          )}
          {filter && (
            <div className="text-center bg-dark text-light mb-2">
              <p className={styles.Category}>Category:</p>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-light fs-6 w-100"
              >
                Tops
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-light fs-6 w-100"
              >
                Bottoms
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-light fs-6 w-100"
              >
                Athletic
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-light fs-6 w-100"
              >
                Formal
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-light fs-6 w-100"
              >
                Shoes
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-light fs-6 w-100"
              >
                Coats
              </button>
            </div>
          )}
        </div>
        {displayProducts ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 g-4 pb-2">
            {productsList}
          </div>
        ) : (
          <p className="text-center fs-4">Loading..</p>
        )}
      </Container>
    </section>
  );
};

export default Products;
