import styles from "./Additions.module.css";
import Button from "../../layout/button/Button";
import { Link } from "react-router-dom";
const Additions = () => {
  return (
    <section className={styles.addition_container}>
      <div className={styles.addition_content}>
        <h1>The Heart of Nigerian Home Cooking</h1>
        <p>Handcrafted with passion, delivered with care.</p>
        <Link to="/menu">
          <Button text="Discover what’s new" />
        </Link>
      </div>
    </section>
  );
};

export default Additions;
