import styles from "./Card.module.css";
import giftLogo from "../../../assets/giftLogo.png";

function Card({ rateData, backgroundFilled }) {
  return (
    <div className={styles.wrapper} style={backgroundFilled ? { backgroundColor: "var(--color-grey)" } : null}>
        <div className={styles.giftContainer}>
            <img src={giftLogo} alt="gitBox" width={100} className={styles.logo}/>
        </div>
        <p className={styles.rate}>{rateData}% Success Rate</p>
        <p className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
        <button className={styles.btn}>Read More</button>
    </div>
  );
}

export default Card;
