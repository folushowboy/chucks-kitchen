import style from "./CartCard.module.css";

function CartCard({ image, title, description, price, plus, minus, back }) {
  return (
    <section className={style.cart_card_container}>
      <div className={style.cart_card}>
        <div className={style.cart_item_image}>
          <img src={image} alt={title} />
            <div className={style.cart_title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        </div>
      
        <div className={style.cart_total}>
          <img src={plus} alt="" />
          <p>1</p>
          <img src={minus} alt="" />
        </div>
        <div className={style.total_price}>
          <p>{price}</p>
          <img src={back} alt="" />
        </div>
      </div>
    </section>
  );
}

export default CartCard;
