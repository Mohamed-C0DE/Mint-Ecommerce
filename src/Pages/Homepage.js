import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Offers from "../Components/Offers";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import Footer from "../Components/Footer";
import LineBreak from "../UI/LineBreak";
import styles from "./Homepage.module.css";
import { Container } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import ScrollToTop from "../Components/ScrollToTop";

const Homepage = () => {
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

  const bestSellersList = products.map((product) => {
    setTimeout(() => {
      setDisplayProducts(true);
    }, 500);
    if (product.bestSeller) {
      return (
        <div className="col">
          <div className="card">
            <Link to="/ProductPage">
              <img src={product.image} className="card-img-top" alt="product" />
            </Link>
            <div className="card-body">
              <Link
                className="text-dark text-decoration-none"
                to="/ProductPage"
              >
                <h5 className="card-title">{product.name}</h5>
              </Link>
              <p className="card-text">
                {product.rating} <RiStarSFill />
              </p>
              <div className="d-flex justify-content-between">
                <p className="card-text">${product.price}</p>
                <button className="bg-dark text-light px-2 mb-3 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

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
    <div className={styles.page}>
      <ScrollToTop />
      <Offers />
      <Header />
      <section className={styles.deals}>
        <h2>Shop our Fall 21 Collection</h2>
        <Button className={`${styles.btn} + btn-dark + btn-lg `}>
          <Nav.Link className="text-light fw-bold" as={NavLink} to="/Shop">
            Shop Now
          </Nav.Link>
        </Button>
      </section>
      <Container fluid>
        {/* BEST SELLERS */}
        <section className="py-2">
          <h3 className="text-center pb-1">Best Sellers</h3>
          {displayProducts ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 g-lg-2 g-4">
              {bestSellersList}
            </div>
          ) : (
            <p className="text-center fs-4">Loading...</p>
          )}
        </section>
        {/* Break */}
        <LineBreak />
        {/* Collections */}
        <section className="py-3">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80"
                  className="card-img"
                  alt="tops"
                />
                <div className="card-img-overlay d-flex align-items-end justify-content-end flex-column">
                  <div className="position-absolute bottom-0 end-0">
                    <h5 className="card-title bg-dark text-white p-2 me-2 fs-3 text-center">
                      Tops
                    </h5>
                    <Link
                      className={`${styles.link} text-light p-1 me-2 fs-3`}
                      as={NavLink}
                      to="/Shop"
                    >
                      View All >
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-20">
                <img
                  src="https://images.pexels.com/photos/4109797/pexels-photo-4109797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img"
                  alt="bottoms"
                />
                <div className="card-img-overlay d-flex align-items-end justify-content-end flex-column">
                  <div className="position-absolute bottom-0 end-0">
                    <h5 className="card-title bg-dark text-white p-2 me-2 fs-3 text-center">
                      Bottoms
                    </h5>
                    <Link
                      className={`${styles.link} text-dark p-1 me-2 fs-3`}
                      as={NavLink}
                      to="/Shop"
                    >
                      View All >
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/6740822/pexels-photo-6740822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="card-img"
                  alt="athletic"
                />
                <div className="card-img-overlay d-flex align-items-end justify-content-end flex-column">
                  <div className="position-absolute bottom-0 end-0">
                    <h5 className="card-title bg-dark text-white p-2 me-2 fs-3 text-center">
                      Athletic
                    </h5>
                    <Link
                      className={`${styles.link} text-dark p-1 me-2 fs-3`}
                      as={NavLink}
                      to="/Shop"
                    >
                      View All >
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  className="card-img"
                  alt="formal wear"
                />
                <div className="card-img-overlay d-flex align-items-end justify-content-end flex-column">
                  <div className="position-absolute bottom-0 end-0">
                    <h5 className="card-title bg-dark text-white p-2 me-2 fs-3 text-center">
                      Formal
                    </h5>
                    <Link
                      className={`${styles.link} text-dark p-1 me-2 fs-3 text-end`}
                      as={NavLink}
                      to="/Shop"
                    >
                      View All >
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  className="card-img"
                  alt="shoes"
                />
                <div className="card-img-overlay d-flex align-items-end justify-content-end flex-column">
                  <div className="position-absolute bottom-0 end-0">
                    <h5 className="card-title bg-dark text-white p-2 me-2 fs-3 text-center">
                      Shoes
                    </h5>
                    <Link
                      className={`${styles.link} text-dark p-1 me-2 fs-3`}
                      as={NavLink}
                      to="/Shop"
                    >
                      View All >
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                  className="card-img"
                  alt="coats"
                />
                <div className="card-img-overlay d-flex align-items-end justify-content-end flex-column">
                  <div className="position-absolute bottom-0 end-0">
                    <h5 className="card-title bg-dark text-white p-2 me-2 fs-3 text-center">
                      Coats
                    </h5>
                    <Link
                      className={`${styles.link} text-light p-1 me-2 fs-3`}
                      as={NavLink}
                      to="/Shop"
                    >
                      View All >
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Break */}
        <LineBreak />
        {/* Our Story */}
        <section className="py-2">
          <div className="row">
            <h3 className="text-center pb-1">Our Story</h3>
            <div className="col-12 col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80"
                className="w-100 h-100"
                alt="coats"
              />
            </div>
            <div className="col-12 col-lg-6">
              <p className="pt-2 d-flex align-items-center h-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pellentesque erat non odio commodo, sit amet lobortis arcu
                molestie. Praesent mattis lorem id magna ultricies mattis.
                Curabitur posuere risus nibh, eu posuere dui varius id. Mauris
                blandit a diam ac interdum. Praesent ac vulputate enim, eget
                feugiat diam. Maecenas facilisis fermentum tortor nec
                scelerisque. Pellentesque a dictum orci. Donec sed nisl in ipsum
                molestie placerat cursus tristique felis. In a nisi vehicula,
                vulputate erat vitae, iaculis orci. Donec volutpat, nisi ac
                sollicitudin egestas, dui quam porttitor lorem, in porta sapien
                lectus nec enim. Vivamus metus dolor, rutrum ut erat id, lacinia
                sagittis dui. Praesent justo tortor, venenatis tempor bibendum
                non, maximus non libero. Duis dapibus dui erat, quis luctus
                nulla efficitur eu.
              </p>
            </div>
          </div>
        </section>
        {/* Break */}
        <LineBreak />
        {/* Community Pics */}
        <section className="py-2">
          <h3 className="text-center pb-1">
            Get Inspiration From Our Community
          </h3>
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
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Homepage;
