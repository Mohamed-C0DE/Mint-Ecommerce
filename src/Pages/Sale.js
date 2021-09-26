import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import styles from "./Sale.module.css";

const Sale = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Container fluid>
        <p className={styles.sale}>Sale Page</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Sale;
