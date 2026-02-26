import MenuListCard from "../menu-list-card/MenuListCard";
import styles from "./MenuList.module.css";
import jollof from "../../assets/images/jollof.png";
import eba from "../../assets/images/Eba.png";
import pounded from "../../assets/images/pounded-yam.png";
import snail from "../../assets/images/snail.png";
import tilapia from "../../assets/images/tilapia.png";
import add from "../../assets/icons/plus-bold.svg";

const MenuList = () => {
  return (
    <section className={styles.menuList}>
      <div className={styles.menuList_text}>
        <h3>Popular </h3>
      </div>
      <div className={styles.menuList_content}>
        <MenuListCard
          img={jollof}
          title="Jollof Rice & Fried Chicken"
          text=" Our signature Jollof rice, served with crispy fried chicken and plantain."
          price="₦3,500"
          icon={add}
        />
        <MenuListCard
          img={eba}
          title="Eba & Egusi Soup (Goat Meat)a"
          text="Hearty Egusi soup with tender goat meat, served with soft Eba."
          price="₦3,500"
          icon={add}
        />
        <MenuListCard
          img={pounded}
          title="Pounded Yam & Edikaikong"
          text="Traditional pounded yam with rich, leafy Edikaikong soup."
          price="₦3,800"
          icon={add}
        />
        <MenuListCard
          img={snail}
          title="Peppered Snail"
          text="Spicy and savory peppered snail, perfect as a starter."
          price="₦2,500"
          icon={add}
        />
        <MenuListCard
          img={tilapia}
          title="Grilled Tilapia Fish"
          text="Whole grilled tilapia seasoned with our special spices."
          price="₦4,500"
          icon={add}
        />
        <MenuListCard
          img={jollof}
          title="Jollof Rice & Fried Chicken"
          text="Our signature Jollof rice, served with crispy fried chicken and plantain."
          price="₦3,500"
          icon={add}
        />
      </div>
    </section>
  );
};

export default MenuList;
