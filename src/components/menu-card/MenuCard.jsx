import styles from './MenuCard.module.css'
const MenuCard = ({img, text}) => {
  return (
    <div className={styles.menu_card}>
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default MenuCard