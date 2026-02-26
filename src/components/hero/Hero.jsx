import Button from "../../layout/button/Button";
import styles from "./Hero.module.css";
import search from "../../assets/icons/search-sm.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1>The Heart of Nigerian Home Cooking</h1>
          <p>Handcrafted with passion, delivered with care.</p>
          <Link to="/menu">
            <Button text="Discover what’s new" />
          </Link>
        </div>
      </section>
      <div className={styles.search_box}>
        <span className={styles.search_text}>
          <img src={search} alt="" />
          <p>What are you craving for today?</p>
        </span>
      </div>
    </>
  );
}

export default Hero;
