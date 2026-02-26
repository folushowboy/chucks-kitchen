import CartCard from "../cart_card/CartCard";
import style from "./Cart.module.css";
import jollof from "../../assets/images/plaintain_jollof.png";
import snail from "../../assets/images/snail-pepper.png";
import egusi from "../../assets/images/egusi_beef.png";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import cancel from "../../assets/icons/cancel.svg";

function Carts() {
  return (
    <section className={style.cart}>
      <h3>My Cart</h3>
      <div className={style.cart_container}>
        <div className={style.cart_items}>
         <CartCard image={jollof} title="Plaintain Jollof" description="With plantain, extra pepper sauce" price="₦2,800" plus={plus} minus={minus} back={cancel}/>
         <CartCard image={snail} title="Snail Pepper" description="With plantain, extra pepper sauce" price="₦2,500" plus={plus} minus={minus} back={cancel}/>
         <CartCard image={egusi} title="Egusi Beef" description="With plantain, extra pepper sauce" price="₦3,200" plus={plus} minus={minus} back={cancel}/>
         <CartCard image={jollof} title="Plaintain Jollof" description="With plantain, extra pepper sauce" price="₦2,800" plus={plus} minus={minus} back={cancel}/>
        </div>
      </div>
      
    </section>
  );
}

export default Carts;
