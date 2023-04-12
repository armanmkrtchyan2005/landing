import React from "react";
import styles from "./footer.module.css";
import danger from "./Images/danger.png";
import lock from "./Images/lock.png";
import rocket from "./Images/rocket.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.lilDiv}>
        <img src={rocket} alt="" />
        <p className={styles.title}>{t("text_7")}</p>
        <p>{t("text_6")}</p>
      </div>
      <div className={styles.lilDiv}>
        <img src={lock} alt="" />
        <p className={styles.title}>{t("text_5")}</p>
        <p>{t("text_4")}</p>
      </div>
      <div className={styles.lilDiv}>
        <img src={danger} alt="" />
        <p className={styles.title}>
          {t("text_3")}
          <br /> {t("text_2")}
        </p>
        <p>{t("text_1")}</p>
      </div>
    </div>
  );
};

export default Footer;
