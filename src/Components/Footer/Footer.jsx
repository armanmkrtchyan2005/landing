import React from "react";
import styles from "./footer.module.css";
import danger from "./Images/danger.png";
import lock from "./Images/lock.png";
import rocket from "./Images/rocket.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.lilDiv}>
        <img src={rocket} alt="" />
        <p className={styles.title}>Faster, more enjoyable browsing</p>
        <p>
          Block ADS that interrupt your browsing experience. Say goodbye to
          video ADS, pop-ups, flashing banners and more. Blocking these
          annoyances means pages load faster.
        </p>
      </div>
      <div className={styles.lilDiv}>
        <img src={lock} alt="" />
        <p className={styles.title}>Keep your data and devices safe</p>
        <p>
          With AdBlock Plus avoiding tracking and malware is easy. Blocking
          intrusive ADS reduces the risk of “malvertising” infections. Blocking
          tracking stops companies following your online activity.
        </p>
      </div>
      <div className={styles.lilDiv}>
        <img src={danger} alt="" />
        <p className={styles.title}>
          Not all ADS
          <br /> are bad
        </p>
        <p>
          Websites need money to stay free. Support them by allowing Acceptable
          ADS (enabled by default).
        </p>
      </div>
    </div>
  );
};

export default Footer;
