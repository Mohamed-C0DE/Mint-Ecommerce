import styles from "./Offers.module.css";

const Offers = () => {
  return (
    <div>
      <div
        className={`bg-dark text-light d-flex justify-content-center ${styles.offers}`}
      >
        <p>FREE SHIPPING ON ORDERS OVER $60</p>
      </div>
    </div>
  );
};

export default Offers;
