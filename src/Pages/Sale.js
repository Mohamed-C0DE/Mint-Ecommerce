import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ScrollToTop from "../Components/ScrollToTop";
import Main from "../UI/Main";
import styles from "./Sale.module.css";

const Sale = () => {
  return (
    <div>
      <ScrollToTop />
      <Offers />
      <Header />
      <Main>
        <Container fluid>
          <p className={styles.sale}>Sale Page</p>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default Sale;
