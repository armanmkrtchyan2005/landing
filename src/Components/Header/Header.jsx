import React from "react";
import styles from "./header.module.css";
import logo from "./Images/logo.png";
import { useTranslation } from "react-i18next";


const Header = () => {
const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.text}>{t("AdBlock")}</p>
    </div>
  );
};

export default Header;
