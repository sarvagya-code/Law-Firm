import logo from "../../../../assets/logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="firmLogo" />
    </div>
  );
}

export default Logo;
