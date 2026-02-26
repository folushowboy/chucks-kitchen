import Button from "../../layout/button/Button";
import styles from "./DishCard.module.css";

const DishCard = ({ img, title, text, price }) => {
  return (
    <div className={styles.dish_card}>
      <img src={img} alt="" />
      <div className={styles.dish_content}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={styles.dish_price}>
          <p>{price}</p>
          <Button text="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default DishCard;
