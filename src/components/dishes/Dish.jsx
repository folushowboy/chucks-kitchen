import { DishData } from "../../../Data";
import DishCard from "../dishes-card/DishCard";
import styles from "./Dish.module.css";

const Dish = () => {
  return (
    <section className={styles.dish_container}>
      <div className={styles.dish_text}>
        <h3>Chef's Specials</h3>
      </div>

      <div className={styles.dish_content}>
        {DishData.map((i, idx) => {
          return (
            <DishCard
              img={i.img}
              title={i.title}
              text={i.text}
              price={i.price}
              key={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Dish;
