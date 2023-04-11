import React from "react";
import styles from "./header.module.css";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.text}>AdBlock</p>
    </div>
  );
};

export default Header;
