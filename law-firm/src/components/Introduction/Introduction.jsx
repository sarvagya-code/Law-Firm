import styles from "./Introduction.module.css";
import Card from "./Card/Card";

function Introduction() {
  return (
    <div className={styles.wrapper} id="introduction">
      <div className={styles.introWrapper}>
        <div className={styles.introtitle}>
          <h1>Let's Introduce</h1>
          <h1>Ourself</h1>
        </div>
        <div class={styles.line}></div>
        <div className={styles.introText}>
          <h1>Criminal Lawyer</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <h1 className={styles.cardHeader}>Why Choose us?</h1>
      <div className={styles.card}>
        <Card rateData={98} />
        <Card rateData={100} backgroundFilled />
        <Card rateData={100} />
      </div>
    </div>
  );
}

export default Introduction;
