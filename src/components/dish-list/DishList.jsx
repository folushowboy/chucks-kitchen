import { DishListData } from "../../../DishData";
import DishListCard from "../dish-list-card/DishListCard";
import styles from "./DishList.module.css";

const DishList = () => {
  return (
    <section className={styles.dish_container}>
      <div className={styles.dish_text}>
        <h3>Jollof Rice & Entrees</h3>
      </div>

      <div className={styles.dish_content}>
        {DishListData.map((i, idx) => {
          return (
            <DishListCard
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

export default DishList;
