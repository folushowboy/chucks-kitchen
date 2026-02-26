import styles from './DishListCard.module.css'

const DishListCard = ({ img, title, text, price, icon }) => {
  return (
    <div className={styles.dish_card}>
         <img src={img} alt="" />
         <div className={styles.dish_content}>
           <h3>{title}</h3>
           <p>{text}</p>
           <div className={styles.dish_price}>
             <p>{price}</p>
             <img src={icon} alt='' />
           </div>
         </div>
       </div>
  )
}

export default DishListCard