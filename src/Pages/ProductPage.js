import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
  IoIosAdd,
} from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { RiStarSFill } from "react-icons/ri";
import styles from "./ProductPage.module.css";
import Main from "../UI/Main";

const ProductPage = () => {
  const [width, setWidth] = useState(false);
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(false);
  const slideContainerRef = useRef();

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

  const scroll = (scrollOffset) => {
    slideContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Main>
        <Container fluid>
          <div className="row my-1">
            <div className="col-12 col-lg-6 my-1">
              <div className={styles.imgContainer}>
                <img
                  className={styles.image}
                  src="https://images.unsplash.com/photo-1611258266547-1afeb6a56c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt="product"
                ></img>
              </div>
              <div className="mt-1">
                <div className="d-flex justify-content-center align-items-center">
                  {width ? (
                    <IoIosArrowDropleftCircle
                      className={styles.icon}
                      onClick={() => scroll(-300)}
                    />
                  ) : (
                    ""
                  )}
                  <div
                    className={`${styles.slideContainer} pb-1`}
                    ref={slideContainerRef}
                  >
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593030918272-ee8433219e37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593032457866-e5557a37f5f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593032534613-085f25474cae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593030918272-ee8433219e37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593032457866-e5557a37f5f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593032534613-085f25474cae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593030918272-ee8433219e37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593032457866-e5557a37f5f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                    <div className={`${styles.slide} col-auto`}>
                      <img
                        className="w-100 h-100"
                        src="https://images.unsplash.com/photo-1593032534613-085f25474cae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="sent by customer"
                      />
                    </div>
                  </div>
                  {width ? (
                    <IoIosArrowDroprightCircle
                      className={styles.icon}
                      onClick={() => scroll(+300)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-1">
              <h5 className="fs-4 fw-bolder pb-1">Product Name</h5>
              <p className="fs-5 pb-1">$20</p>
              <p>
                4.8
                <RiStarSFill />
              </p>
              <p className="pb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                pulvinar mattis nisi eu tristique. Donec ac ante ligula. Donec
                consequat, quam vel fringilla tincidunt, velit sapien placerat
                elit, volutpat egestas augue nibh quis mauris.
              </p>
              <div>
                <p className="fw-bold">Size:</p>
                <button type="button" className="btn btn-light">
                  Sm
                </button>
                <button type="button" className="btn btn-light mx-1">
                  Md
                </button>
                <button type="button" className="btn btn-light mx-1">
                  Lg
                </button>
                <button type="button" className="btn btn-light mx-1">
                  Xl
                </button>
              </div>
              <div className="mt-3">
                <p className="fw-bold mb-0">Quantity:</p>
                <GrFormSubtract className="mb-1" />
                <span className="px-2 fs-5">0</span>
                <IoIosAdd className="fs-5 mb-1" />
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  className="bg-dark text-light mt-3 px-3 py-1"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default ProductPage;
