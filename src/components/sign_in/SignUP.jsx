import styles from "./SignUP.module.css";
import food from "../../assets/images/welcome-image.png";
import mobileRice from "../../assets/images/mobileWelcome.png";
import email from "../../assets/icons/email.svg";
import locked from "../../assets/icons/locked.svg";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import { Link } from "react-router-dom";
function SignUP() {
  return (
    <section className={styles.signin}>
      <picture className={styles.signin_image}>
        <source media="(max-width: 768px)" srcSet={mobileRice} />
        <img src={food} alt="Food" />
      </picture>

      <div className={styles.signin_content}>
        <div className={styles.signin_text}>
          <p>Chuks Kitchen</p>
          <h3>Login your Account</h3>
        </div>

        <form action="">
          <p>Email</p>
          <div className={styles.input_box}>
            <img src={email} alt="" />
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <p>Password</p>
          <div className={styles.input_box}>
            <img src={locked} alt="" />
            <input type="password" placeholder="Enter your password" required />
            {/* <img src={unlock} alt="" /> */}
          </div>

          <div className={styles.remember_forgot}>
            <label htmlFor="remember-me">
              <input type="checkbox" name="remember-me" id="remember-me" />
              Remember me
            </label>
            <Link to="">Forgot password?</Link>
          </div>

          <div className={styles.index_buttons}>
            <Link to="/home">
              <button className={styles.button_1}>Continue</button>
            </Link>
            <p className={styles.or}>OR</p>
          </div>

          <div className={styles.social_login}>
            <img src={google} alt="" />
            <p>Continue with Google</p>
          </div>
          <div className={styles.social_login}>
            <img src={facebook} alt="" />
            <p>Continue with Apple</p>
          </div>

          <div className={styles.account}>
            <p>Don't have an account? <Link to="">Craete an account</Link></p>
          </div>
        </form>

      </div>
    </section>
  );
}

export default SignUP;
