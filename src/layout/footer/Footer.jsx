import styles from "./Footer.module.css";
import arrow from "../../assets/icons/UP arrow.svg";
function Footer() {
  return (
    <footer>
      <section className={styles.footer}>
        <div className={styles.text}>
          <h1>Chuks Kitchen</h1>
          <p>
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <nav className={styles.Navbar}>
            <ul>
              <li>
                <a href="" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">My Orders</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.links}>
          <h3>Contact Us</h3>
          <p>+234 801 234 5678</p>
          <p>hello@chukskitchen.com</p>
          <p>123 Taste Blvd, Lagos, Nigeria</p>
        </div>
        <div className={styles.links}>
          <h3>Socials</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
      </section>

      <div className={styles.footer_bottom}>
        <p>© 2020 Lift Media. All rights reserved.</p>
        <img className={styles.arrow} src={arrow} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
