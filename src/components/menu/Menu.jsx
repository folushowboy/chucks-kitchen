import MenuCard from "../menu-card/MenuCard";
import styles from "./Menu.module.css";
import jollof from "../../assets/images/jollof.png";
import swallow from "../../assets/images/swallow.png";
import grills from "../../assets/images/grills.png";
import treats from "../../assets/images/treats.png";

function Menu() {
  return (
    <section className={styles.menu_container}>
      <div className={styles.menu_text}>
        <h3>Popular Categories</h3>
      </div>
      <div className={styles.menu_content}>
        <MenuCard img={jollof} text="Jollof Delights" />
        <MenuCard img={swallow} text="Swallow & Soups" />
        <MenuCard img={grills} text="Grills & BBQ" />
        <MenuCard img={treats} text="Sweet Treats" />
        <MenuCard img={jollof} text="Jollof Delights" />
        <MenuCard img={grills} text="Grills & BBQ" />
      </div>
    </section>
  );
}

export default Menu;
