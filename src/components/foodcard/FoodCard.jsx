import styles from "./FoodCard.module.css";

function FoodCard({ title, text, price }) {
  return (
    <div className={styles.food_card}>
      <h3>{title}</h3>
      <p className={styles.food_price}>{price}</p>
      <p className={styles.food_text}>{text}</p>
    </div>
  );
}

export default FoodCard;
