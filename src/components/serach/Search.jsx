import styles from "./Search.module.css";

const Search = () => {
  return (
    <section className={styles.container}>
          <div className={styles.content}>
      <div className={styles.card}>
        <p>Menu Categories</p>
        <p className={styles.active}>Popular</p>
        <p>Jollof Rice & Entrees</p>
        <p>Swallow & Soups</p>
        <p>Grills & sides</p>
        <p>Beverages</p>
        <p>Desserts</p>
      </div>
    </div>
    </section>
  
  );
};

export default Search;
