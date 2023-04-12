import React, { useEffect } from "react";
import styles from "./landing.module.css";
import pc from "./Images/comp.png";
import lilPc from "./Images/stop.png";
import { useTranslation } from "react-i18next";


const Landing = () => {
    const { t } = useTranslation();

  useEffect(() => {
    console.log(window.navigator.languages);
  }, []);
  return (
    <div>
      <div className={styles.landing}>
        <picture>
          <source media="(max-width: 500px)" srcset={lilPc} />
          <img src={pc} alt="" />
        </picture>
        {/* <img src={pc} alt="pc" /> */}
        <div className={styles.getAd}>
          <div>
            {" "}
            <p className={styles.download}>
              {t("text_14")}
              <span className={styles.downloadSpan}>{t("AdBlock")}</span>{" "}
              {t("text_14")}
            </p>
            <p>{t("text_13")}</p>
          </div>

          <ul className={styles.ul}>
            <li>{t("text_11")}</li>
            <li>{t("text_10")}</li>
            <li> {t("text_9")}</li>
          </ul>
          <button className={styles.btn}>{t("text_8")}</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
