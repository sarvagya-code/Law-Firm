import Logo from "./Logo/Logo";
import Tabs from "./Tabs/Tabs";
import styles from "./NavBar.module.css";

import intsagramLogo from "../../../assets/icons/instagram.png";
import facebookLogo from "../../../assets/icons/facebook.png";
import twitterLogo from "../../../assets/icons/twitter.png";
import pintrestLogo from "../../../assets/icons/pintrest.png";

function NavBar({ type = "header" }) {
  switch (type) {
    case "header":
      return (
        <div className={styles.wrapper}>
          <Logo />
          <Tabs />
          <button className={styles.btn}>Contact Now</button>
        </div>
      );
    case "footer":
      return (
        <div className={styles.wrapper}>
          <Logo />
          <Tabs />
          <div className={styles.logos}>
            <img src={intsagramLogo} alt="insta" width={30} />
            <img src={facebookLogo} alt="fb" width={30} />
            <img src={twitterLogo} alt="twitter" width={30} />
            <img src={pintrestLogo} alt="pintrest" width={30} />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default NavBar;
