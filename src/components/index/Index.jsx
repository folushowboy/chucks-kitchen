import styles from "./Index.module.css";
import food from "../../assets/images/welcome-image.png";
import mobileRice from "../../assets/images/mobileWelcome.png";
import fork from "../../assets/icons/freshly-prep.svg";
import delivery from "../../assets/icons/delivery.svg";
import { Link } from "react-router-dom";
function Index() {
  return (
    <section className={styles.index}>
      <picture className={styles.index_image}>
        <source media="(max-width: 768px)" srcSet={mobileRice} />
        <img src={food} alt="Food" />
      </picture>

      <div className={styles.index_content}>
        <div className={styles.index_content_header}>
          <p>Chuks Kitchen</p>
          <Link to="/signin">
            <button className={styles.btn}>Sign In</button>
          </Link>
        </div>
        <div className={styles.index_text}>
          <h3>Your Authentic Taste of Nigeria</h3>
          <p>
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>
        </div>
        <div className={styles.index_features}>
          <div className={styles.feature}>
            <img src={fork} alt="Freshly Prepared" />
            <p>Freshly Prepared</p>
          </div>
          <div className={styles.feature}>
            <img src={fork} alt="Freshly Prepared" />
            <p>Support Local Business</p>
          </div>
          <div className={styles.feature}>
            <img src={delivery} alt="Fast Delivery" />
            <p>Fast & Reliable Delivery</p>
          </div>
        </div>

        <div className={styles.index_buttons}>
            <button className={styles.button_1}>Order Now</button>
            <button className={styles.button_2}>View Menu</button>
        </div>
      </div>
    </section>
  );
}

export default Index;
