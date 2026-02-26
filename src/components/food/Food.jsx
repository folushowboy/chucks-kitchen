import styles from "./Food.module.css";
import food from "../../assets/images/foodrice.png";
import exit from "../../assets/icons/Vector.svg";
import FoodCard from "../foodcard/FoodCard";
import timer from "../../assets/icons/timer.svg";
import ProteinCard from "../protein-card/ProteinCard";
import Extra from "../extra/Extra";
import Instruction from "../instruction/Instruction";
import mobileRice from "../../assets/images/mobile-rice.png";
import Button from "../../layout/button/Button";
import { Link } from "react-router-dom";
function Food() {
  return (
    <section className={styles.food}>
      <picture className={styles.food_image}>
        <source media="(max-width: 768px)" srcSet={mobileRice} />
        <img src={food} alt="Food" />
      </picture>

      <div className={styles.food_container}>
        <div className={styles.food_content}>
          <div className={styles.exit_icon}>
            <img src={exit} alt="Exit" />
          </div>
          <FoodCard
            title="Jollof Rice with Fried Chicken"
            price="₦2,800"
            text="Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner."
          />

          <div className={styles.timer_container}>
            <div className={styles.timer_content}>
                <img src={timer} alt="Food" />
                <p>Mildly spicy</p>
            </div>
            <div className={styles.timer_content}>
                <img src={timer} alt="Food" />
                <p>Vegetarian option available</p>
            </div>
            <div className={styles.timer_content}>
                <img src={timer} alt="Food" />
                <p>View Allergies</p>
            </div>
          </div>

          <div>
            <ProteinCard/>
            <Extra/>
            <Instruction/>
            <Link to='/cart'>
             <Button text="Add to Cart"/>
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Food;
