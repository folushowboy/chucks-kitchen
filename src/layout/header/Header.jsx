import Button from "../button/Button";
import styles from "./Header.module.css";
import menu from "../../assets/icons/Menu.svg";
import exit from "../../assets/icons/Vector.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(true);
  };

  const hideNavbar = () => {
    setIsOpen(false);
  };
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Chuks Kitchen</h1>
      </Link>
      <nav
        className={styles.Navbar}
        style={{ display: isOpen ? "block" : "none" }}
      >
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
        <div>
          <button className={styles.btn}>Login</button>
        </div>
      </nav>
      <div className={styles.menu}>
        <img
          src={menu}
          id="openIcon"
          onClick={showNavbar}
          style={{ display: isOpen ? "none" : "block" }}
          alt=""
        />
        <img
          src={exit}
          id="closeIcon"
          onClick={hideNavbar}
          style={{ display: isOpen ? "block" : "none" }}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
