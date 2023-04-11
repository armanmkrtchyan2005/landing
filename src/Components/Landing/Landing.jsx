import React, { useEffect } from "react";
import styles from "./landing.module.css";
import pc from "./Images/comp.png";
import lilPc from "./Images/stop.png";

const Landing = () => {
  useEffect(() => {
    console.log(window.navigator.languages);
  }, []);
  return (
    <div>
      <div className={styles.landing}>
        <picture aria-aria-selected={true}>
          <source media="(max-width: 500px)" srcset={lilPc} />
          <img src={pc} alt="" />
        </picture>
        {/* <img src={pc} alt="pc" /> */}
        <div className={styles.getAd}>
          <div>
            {" "}
            <p className={styles.download}>
              Download <span className={styles.downloadSpan}>AdBlocker</span>{" "}
              Now
            </p>
            <p>Stop receiving ADS from disruptive site</p>
          </div>

          <ul className={styles.ul}>
            <li>Experience a cleaner, faster web and block annoying ads</li>
            <li>
              Protect your privacy. Don’t let advertisers track you across the
              Internet
            </li>
            <li> Free and safe</li>
          </ul>
          <button className={styles.btn}>Get AdBlocker Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
