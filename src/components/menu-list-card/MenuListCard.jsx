import { Link } from 'react-router-dom'
import styles from './MenuListCard.module.css'
const MenuListCard = ({img, title, text, price, icon}) => {
  return (
     <div className={styles.menu_card}>
      <Link to='/food-details' className={styles.menu_card_link}>
       <img src={img} alt="" />
      </Link>
       <div className={styles.menu_card_content}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={styles.menu_card_price}>
          <p>{price}</p>
          <img src={icon} alt='' />
        </div>
      </div>
    </div>
  )
}

export default MenuListCard